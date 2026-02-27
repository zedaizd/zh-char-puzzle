const gameStateKey = 'gameState'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'
const gameStatDailyKey = 'gameStatsDaily'
const gameStatRandomKey = 'gameStatsRandom'

export type StatsGameMode = 'daily' | 'random'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

const getGameStatKey = (mode: StatsGameMode) => {
  if (mode === 'random') {
    return gameStatRandomKey
  }

  return gameStatDailyKey
}

export const saveStatsToLocalStorage = (
  gameStats: GameStats,
  mode: StatsGameMode = 'daily'
) => {
  localStorage.setItem(getGameStatKey(mode), JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = (mode: StatsGameMode = 'daily') => {
  const stats = localStorage.getItem(getGameStatKey(mode))
  if (stats) {
    return JSON.parse(stats) as GameStats
  }

  if (mode === 'daily') {
    const legacyStats = localStorage.getItem(gameStatKey)
    return legacyStats ? (JSON.parse(legacyStats) as GameStats) : null
  }

  return null
}
