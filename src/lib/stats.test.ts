import { addStatsForCompletedGame, loadStats } from './stats'
import { GameStats } from './localStorage'

const createStats = (): GameStats => ({
  winDistribution: [0, 0, 0, 0, 0, 0],
  gamesFailed: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalGames: 0,
  successRate: 0,
})

beforeEach(() => {
  localStorage.clear()
})

test('records a win in the right bucket without mutating input stats', () => {
  const initialStats = createStats()

  const updatedStats = addStatsForCompletedGame(initialStats, 2)

  expect(updatedStats.winDistribution).toEqual([0, 0, 1, 0, 0, 0])
  expect(updatedStats.totalGames).toBe(1)
  expect(updatedStats.successRate).toBe(100)
  expect(initialStats.winDistribution).toEqual([0, 0, 0, 0, 0, 0])
})

test('treats invalid win bucket as a failed game', () => {
  const initialStats = {
    ...createStats(),
    currentStreak: 3,
    bestStreak: 4,
    totalGames: 4,
  }

  const updatedStats = addStatsForCompletedGame(initialStats, 999)

  expect(updatedStats.gamesFailed).toBe(1)
  expect(updatedStats.currentStreak).toBe(0)
  expect(updatedStats.totalGames).toBe(5)
  expect(updatedStats.successRate).toBe(80)
})

test('normalizes malformed stored stats', () => {
  localStorage.setItem(
    'gameStatsDaily',
    JSON.stringify({
      winDistribution: [2],
      gamesFailed: 1,
      currentStreak: 3,
      bestStreak: 1,
      totalGames: 1,
      successRate: 0,
    })
  )

  const loadedStats = loadStats()

  expect(loadedStats.winDistribution).toEqual([2, 0, 0, 0, 0, 0])
  expect(loadedStats.totalGames).toBe(3)
  expect(loadedStats.bestStreak).toBe(3)
  expect(loadedStats.successRate).toBe(67)
})

test('stores daily and random stats separately', () => {
  const dailyStats = addStatsForCompletedGame(createStats(), 0, 'daily')
  const randomStats = addStatsForCompletedGame(createStats(), 1, 'random')

  expect(dailyStats.winDistribution).toEqual([1, 0, 0, 0, 0, 0])
  expect(randomStats.winDistribution).toEqual([0, 1, 0, 0, 0, 0])
  expect(loadStats('daily').winDistribution).toEqual([1, 0, 0, 0, 0, 0])
  expect(loadStats('random').winDistribution).toEqual([0, 1, 0, 0, 0, 0])
})
