import {
  GameStats,
  loadStatsFromLocalStorage,
  saveStatsToLocalStorage,
  StatsGameMode,
} from './localStorage'

// In stats array elements 0-5 are successes in 1-6 trys

const WIN_DISTRIBUTION_BUCKETS = 6

const createDefaultStats = (): GameStats => ({
  winDistribution: Array.from({ length: WIN_DISTRIBUTION_BUCKETS }, () => 0),
  gamesFailed: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalGames: 0,
  successRate: 0,
})

const sanitizeCount = (value: unknown) => {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    return 0
  }

  return Math.floor(value)
}

const sanitizeWinDistribution = (value: unknown) => {
  const distribution = Array.isArray(value) ? value : []

  return Array.from({ length: WIN_DISTRIBUTION_BUCKETS }, (_, index) =>
    sanitizeCount(distribution[index])
  )
}

const normalizeStats = (rawStats: Partial<GameStats> | null): GameStats => {
  if (!rawStats) {
    return createDefaultStats()
  }

  const normalizedStats: GameStats = {
    winDistribution: sanitizeWinDistribution(rawStats.winDistribution),
    gamesFailed: sanitizeCount(rawStats.gamesFailed),
    currentStreak: sanitizeCount(rawStats.currentStreak),
    bestStreak: sanitizeCount(rawStats.bestStreak),
    totalGames: sanitizeCount(rawStats.totalGames),
    successRate: 0,
  }

  const gamesWon = normalizedStats.winDistribution.reduce(
    (sum, wins) => sum + wins,
    0
  )
  const minimumGamesPlayed = gamesWon + normalizedStats.gamesFailed

  normalizedStats.totalGames = Math.max(
    normalizedStats.totalGames,
    minimumGamesPlayed
  )
  normalizedStats.bestStreak = Math.max(
    normalizedStats.bestStreak,
    normalizedStats.currentStreak
  )
  normalizedStats.successRate = getSuccessRate(normalizedStats)

  return normalizedStats
}

export const addStatsForCompletedGame = (
  gameStats: GameStats,
  count: number,
  mode: StatsGameMode = 'daily'
) => {
  // Count is number of incorrect guesses before end.
  const stats = normalizeStats(gameStats)

  stats.totalGames += 1

  if (count < 0 || count >= WIN_DISTRIBUTION_BUCKETS) {
    // A fail situation
    stats.currentStreak = 0
    stats.gamesFailed += 1
  } else {
    stats.winDistribution[count] += 1
    stats.currentStreak += 1

    if (stats.bestStreak < stats.currentStreak) {
      stats.bestStreak = stats.currentStreak
    }
  }

  stats.successRate = getSuccessRate(stats)

  saveStatsToLocalStorage(stats, mode)
  return stats
}

export const loadStats = (mode: StatsGameMode = 'daily') => {
  return normalizeStats(
    loadStatsFromLocalStorage(mode) as Partial<GameStats> | null
  )
}

const getSuccessRate = (gameStats: GameStats) => {
  const { totalGames, gamesFailed } = gameStats

  return Math.round(
    (100 * (totalGames - gamesFailed)) / Math.max(totalGames, 1)
  )
}
