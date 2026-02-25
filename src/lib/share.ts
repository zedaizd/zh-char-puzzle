import { getGuessStatuses, getSymbolStatus } from './statuses'
import { getCharSymbols } from './words'
import { GAME_TITLE } from '../constants/strings'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  solution: string,
  solutionSymbols: number[],
  possibleSymbols: number[],
  seedIndex?: number
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${seedIndex !== undefined ? seedIndex : 'Random'} ${
      lost ? 'X' : guesses.length
    }/6\n\n` + generateEmojiGrid(guesses, solution, solutionSymbols, possibleSymbols)
  )
}

export const generateEmojiGrid = (
  guesses: string[],
  solution: string,
  solutionSymbols: number[],
  possibleSymbols: number[]
) => {
  return guesses
    .map((guess) => {
      if (getGuessStatuses(guess, solution)[0] === 'correct') {
        return '⭐'
      }

      const symbols = getCharSymbols(guess)

      return symbols
        .map((s) => {
          // Intentionally reporting absent parts only.
          // Because we don't want to leak any information about the answer
          if (getSymbolStatus(s, solutionSymbols, possibleSymbols) === 'absent') {
            return '🟥'
          } else {
            return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
