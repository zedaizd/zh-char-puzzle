import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  RANDOM_GAME_TEXT,
  DAILY_GAME_TEXT,
  RANDOM_STATS_TEXT,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  dailyGameStats: GameStats
  randomGameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  solution: string
  solutionSymbols: number[]
  possibleSymbols: number[]
  isDaily: boolean
  handleNewRandomGame: () => void
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  dailyGameStats,
  randomGameStats,
  isGameLost,
  isGameWon,
  handleShare,
  solution,
  solutionSymbols,
  possibleSymbols,
  isDaily,
  handleNewRandomGame,
}: Props) => {
  const renderStatsSection = (title: string, gameStats: GameStats) => (
    <section className="mt-2">
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <StatBar gameStats={gameStats} />
      {gameStats.totalGames > 0 && (
        <>
          <h5 className="text-sm leading-6 font-medium text-gray-900 dark:text-gray-100">
            {GUESS_DISTRIBUTION_TEXT}
          </h5>
          <Histogram gameStats={gameStats} />
        </>
      )}
    </section>
  )

  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {renderStatsSection(DAILY_GAME_TEXT, dailyGameStats)}
      {renderStatsSection(RANDOM_STATS_TEXT, randomGameStats)}
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            {isDaily && (
              <>
                <h5>{NEW_WORD_TEXT}</h5>
                <Countdown
                  className="text-lg font-medium text-gray-900 dark:text-gray-100"
                  date={tomorrow}
                  daysInHours={true}
                />
              </>
            )}
            <button
              type="button"
              className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={handleNewRandomGame}
            >
              {RANDOM_GAME_TEXT}
            </button>
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                solution,
                solutionSymbols,
                possibleSymbols
              )
              handleShare()
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
