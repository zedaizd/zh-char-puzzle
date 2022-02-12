import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { SOLUTION_CHAR_TO_SYMBOLS } from '../constants/charToGroups'
import { VALIDGUESS_CHAR_TO_SYMBOLS } from '../constants/charToGroups'
import seedrandom from 'seedrandom'

type prng = ReturnType<typeof seedrandom>

const dedup = <T>(arr: T[]) => {
  return arr.filter((v, i) => arr.indexOf(v) === i)
}

const charToSymbols: { [key: string]: number[] } = WORDS.reduce<{
  [key: string]: number[]
}>((prev, current, index) => {
  const symbols = SOLUTION_CHAR_TO_SYMBOLS[index]
  prev[current] = symbols

  return prev
}, {})

const allSolutionChars = Array.from(Object.keys(charToSymbols))

VALIDGUESSES.forEach((c, i) => {
  const symbols = VALIDGUESS_CHAR_TO_SYMBOLS[i]

  charToSymbols[c] = symbols
})

const symbolToChars = new Map<number, string[]>()
Object.keys(charToSymbols).forEach((char) => {
  let symbols = charToSymbols[char]

  dedup(symbols).forEach((s) => {
    if (symbolToChars.has(s)) {
      symbolToChars.get(s)?.push(char)
    } else {
      symbolToChars.set(s, [char])
    }
  })
})

const getRandomRange = (rng: prng, start: number, range: number) => {
  return Math.abs(rng.int32() % range) + start
}

const getRandomIndex = <T>(rng: prng, arr: T[]) => {
  return getRandomRange(rng, 0, arr.length)
}

const getRandomElement = <T>(rng: prng, arr: T[]) => {
  return arr[getRandomIndex(rng, arr)]
}

const randomSort = <T>(rng: prng, arr: T[]) => {
  const swap = <T>(arr: T[], a: number, b: number) => {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
  }

  let ret = arr.map((v) => v)
  for (let i = 0; i < ret.length; i++) {
    swap(ret, i, getRandomRange(rng, i, ret.length - i))
  }

  return ret
}

/**
 * Generates a string[][] from a list of symbols
 * It is a group of characters that share different level of affinity with the input symbols
 * The affinity between two set of symbols is defined as the number of shared symbols two set of symbols
 * The affinity between a char to a set of symbols is determined by the set of symbols used by the char
 *
 * The first index indicates how many symbols are in-common
 * Pleast note that the first element is always an empty string[] because we don't want to include characters with zero affinity
 */
const getCharsWithVariousAffinitiy = (symbols: number[]) => {
  let charToSymbolCounter: { [key: string]: number } = {}
  symbols.forEach((symbol) => {
    symbolToChars.get(symbol)?.forEach((char) => {
      if (char in charToSymbolCounter) {
        charToSymbolCounter[char] += 1
      } else {
        charToSymbolCounter[char] = 1
      }
    })
  })

  return Object.keys(charToSymbolCounter).reduce<string[][]>(
    (prev, char) => {
      let affinity = charToSymbolCounter[char]
      console.assert(affinity > 0)
      prev[affinity].push(char)
      return prev
    },
    Array(symbols.length + 1)
      .fill(0)
      .map((_) => []) // Because JS array is zero-based. We can only access arr[N] if its length is N + 1
  )
}

const getSymbolsFromSimilarChar = (
  rng: prng,
  charsWithVariousAffinitiy: string[][],
  solutionSymbolCounts: number
) => {
  let minBar = Math.floor(solutionSymbolCounts / 2)

  for (let affinity = minBar; affinity <= solutionSymbolCounts; affinity++) {
    let chars = charsWithVariousAffinitiy[affinity]
    if (chars.length !== 0) {
      return charToSymbols[getRandomElement(rng, chars)]
    }
  }

  return []
}

const getCandidateSymbols = (rng: prng, solutionSymbols: number[]) => {
  let ret: number[] = []

  ret = ret.concat(solutionSymbols)

  let charsWithVariousAffinitiy = getCharsWithVariousAffinitiy(solutionSymbols)
  let isComplexSolution = solutionSymbols.length >= 5

  if (isComplexSolution) {
    ret = ret.concat(
      getSymbolsFromSimilarChar(
        rng,
        charsWithVariousAffinitiy,
        solutionSymbols.length
      )
    )
  }

  let charsWithMinAffinity = new Set(charsWithVariousAffinitiy[1])
  let symbolIndex = getRandomIndex(rng, solutionSymbols)

  for (
    let addedCharCount = 0, searchedSymbolCount = 0;
    addedCharCount < 4 && searchedSymbolCount < solutionSymbols.length;
    searchedSymbolCount++
  ) {
    let sourceChars = symbolToChars.get(solutionSymbols[symbolIndex]) || []

    let validChar = ''
    let iteration = 0
    while (validChar === '' && iteration < 100) {
      let char = getRandomElement(rng, sourceChars)
      if (charsWithMinAffinity.has(char)) {
        validChar = char
      }
      iteration++
    }

    if (validChar !== '') {
      ret = ret.concat(charToSymbols[validChar])
      addedCharCount++
    }

    symbolIndex = (symbolIndex + 1) % solutionSymbols.length
  }

  ret = dedup(ret)

  let charsWithAnyAffinity = charsWithVariousAffinitiy.reduce((prev, chars) => {
    chars.forEach((char) => {
      prev.add(char)
    })

    return prev
  }, new Set<string>())

  let iteration = 0
  while (ret.length < 23 && iteration < 100) {
    let char = getRandomElement(rng, allSolutionChars)
    if (!charsWithAnyAffinity.has(char)) {
      ret = ret.concat(charToSymbols[char])
      ret = dedup(ret)
    }

    iteration++
  }

  if (ret.length > 23) {
    ret = ret.slice(0, 23)
  }

  return randomSort(rng, ret)
}

export const getCharSymbols = (char: string) => {
  return charToSymbols[char]
}

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const rng = seedrandom(index.toString() + 11)
  const solIndex = Math.abs(rng.int32()) % WORDS.length

  const solution = WORDS[solIndex].toUpperCase()
  const solutionSymbols = getCharSymbols(solution)

  const possibleSymbols = getCandidateSymbols(rng, solutionSymbols)

  return {
    solution: solution,
    seedIndex: index,
    solutionSymbols: solutionSymbols,
    possibleSymbols: possibleSymbols,
    tomorrow: nextday,
  }
}

export const {
  solution,
  seedIndex,
  solutionSymbols,
  possibleSymbols,
  tomorrow,
} = getWordOfDay()
