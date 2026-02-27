import { render } from '@testing-library/react'
import { Histogram } from './Histogram'
import { GameStats } from '../../lib/localStorage'

const createStats = (winDistribution: number[]): GameStats => ({
  winDistribution,
  gamesFailed: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalGames: 0,
  successRate: 0,
})

test('renders valid bar widths when there are no wins', () => {
  const { container } = render(
    <Histogram gameStats={createStats([0, 0, 0, 0, 0, 0])} />
  )
  const bars = container.querySelectorAll('.bg-blue-600')

  expect(bars).toHaveLength(6)
  bars.forEach((bar) => {
    expect((bar as HTMLElement).style.width).toBe('5%')
  })
})
