import {
  InformationCircleIcon,
  ChartBarIcon,
  SunIcon,
} from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import { Alert } from './components/alerts/Alert'
import { Grid } from './components/grid/Grid'
import { InputCell } from './components/grid/InputCell'
import { AboutModal } from './components/modals/AboutModal'
import { InfoModal } from './components/modals/InfoModal'
import { StatsModal } from './components/modals/StatsModal'
import {
  GAME_TITLE,
  WIN_MESSAGES,
  GAME_COPIED_MESSAGE,
  ABOUT_GAME_MESSAGE,
  NOT_ENOUGH_LETTERS_MESSAGE,
  WORD_NOT_FOUND_MESSAGE,
  CORRECT_WORD_MESSAGE,
} from './constants/strings'
import {
  isWordInWordList,
  getCharSymbols,
  defaultSolution,
  defaultSolutionSymbols,
  defaultPossibleSymbols,
  getRandomWord,
} from './lib/words'
import { addStatsForCompletedGame, loadStats } from './lib/stats'
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
} from './lib/localStorage'

import './App.css'
import { HintPanel } from './components/keyboard/HintPanel'
import { AppContext } from './contexts/AppContext'

const ALERT_TIME_MS = 2000

function App() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [solution, setSolution] = useState(defaultSolution)
  const [solutionSymbols, setSolutionSymbols] = useState(defaultSolutionSymbols)
  const [possibleSymbols, setPossibleSymbols] = useState(defaultPossibleSymbols)
  const [isDaily, setIsDaily] = useState(true)

  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
      ? true
      : false
  )
  const themeState = { isDarkMode, setIsDarkMode }
  const [successAlert, setSuccessAlert] = useState('')
  const [validSymbolGuesses, setValidSymbolGuesses] = useState([] as number[][])
  const [validSymbols, SetValidSymbols] = useState([] as number[])
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage()

    if (loaded?.solution !== defaultSolution) {
      return []
    }
    const gameWasWon = loaded.guesses.includes(defaultSolution)
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === 6 && !gameWasWon) {
      setIsGameLost(true)
    }
    return loaded.guesses
  })
  const [isInfoRead, setIsInfoRead] = useState(() => {
    let isRead = localStorage.getItem('isInfoRead')
    if (isRead !== 'true') {
      setIsInfoModalOpen(true)
      return false
    }

    return true
  })

  const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  useEffect(() => {
    if (isDaily) {
      saveGameStateToLocalStorage({
        guesses,
        solution,
      })
    }
  }, [guesses, solution, isDaily])

  useEffect(() => {
    localStorage.setItem('isInfoRead', isInfoRead.toString())
  }, [isInfoRead])

  useEffect(() => {
    if (isGameWon) {
      setSuccessAlert(
        WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]
      )
      setTimeout(() => {
        setSuccessAlert('')
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
  }, [isGameWon, isGameLost])

  const onChar = (value: string) => {
    if (guesses.length < 6 && !isGameWon) {
      setCurrentGuess(`${value}`)
    }
  }

  const handleNewRandomGame = () => {
    const newWord = getRandomWord()
    setSolution(newWord.solution)
    setSolutionSymbols(newWord.solutionSymbols)
    setPossibleSymbols(newWord.possibleSymbols)
    setGuesses([])
    setCurrentGuess('')
    setIsGameWon(false)
    setIsGameLost(false)
    SetValidSymbols([])
    setValidSymbolGuesses([])
    setIsDaily(false)
    setIsStatsModalOpen(false)
  }

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return
    }
    if (!(currentGuess.length === 1)) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, ALERT_TIME_MS)
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true)
      return setTimeout(() => {
        setIsWordNotFoundAlertOpen(false)
      }, ALERT_TIME_MS)
    }

    const winningWord = solution === currentGuess

    if (currentGuess.length === 1 && guesses.length < 6 && !isGameWon) {
      setGuesses([...guesses, currentGuess])

      let latestValidGuessedSymbols = getCharSymbols(currentGuess).filter(
        (sym) => solutionSymbols.includes(sym)
      )

      let newlyValidSymbols = latestValidGuessedSymbols.filter(
        (sym) => !validSymbols.includes(sym)
      )

      setValidSymbolGuesses([...validSymbolGuesses, latestValidGuessedSymbols])
      SetValidSymbols([...validSymbols, ...newlyValidSymbols])

      setCurrentGuess('')

      if (winningWord) {
        if (isDaily) {
          setStats(addStatsForCompletedGame(stats, guesses.length))
        }
        return setIsGameWon(true)
      }

      if (guesses.length === 5) {
        if (isDaily) {
          setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        }
        setIsGameLost(true)
      }
    }
  }

  const previewSymbols =
    currentGuess.length === 1 ? getCharSymbols(currentGuess) || [] : []

  return (
    <AppContext.Provider value={themeState}>
      <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex w-80 mx-auto items-center mb-8 mt-12">
          <h1 className="text-xl grow font-bold dark:text-white">
            {GAME_TITLE}
            {!isDaily && (
              <span className="text-xs ml-2 text-indigo-500">(Random)</span>
            )}
          </h1>
          <SunIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => handleDarkMode(!isDarkMode)}
          />
          <InformationCircleIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <ChartBarIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
        </div>

        <Grid
          guesses={guesses}
          solution={solution}
          solutionSymbols={solutionSymbols}
          possibleSymbols={possibleSymbols}
        />
        <HintPanel
          solution={solution}
          guesses={guesses}
          solutionSymbols={solutionSymbols}
          possibleSymbols={possibleSymbols}
          previewSymbols={previewSymbols}
        />
        <div>
          <InputCell value={currentGuess} onChar={onChar} onEnter={onEnter} />
        </div>
        {/* <Keyboard
          onChar={onChar}
          onDelete={onDelete}
          onEnter={onEnter}
          guesses={guesses}
        /> */}
        <InfoModal
          isOpen={isInfoModalOpen}
          handleClose={() => {
            setIsInfoModalOpen(false)
            setIsInfoRead(true)
          }}
        />
        <StatsModal
          isOpen={isStatsModalOpen}
          handleClose={() => setIsStatsModalOpen(false)}
          guesses={guesses}
          gameStats={stats}
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          handleShare={() => {
            setSuccessAlert(GAME_COPIED_MESSAGE)
            return setTimeout(() => setSuccessAlert(''), ALERT_TIME_MS)
          }}
          solution={solution}
          solutionSymbols={solutionSymbols}
          possibleSymbols={possibleSymbols}
          isDaily={isDaily}
          handleNewRandomGame={handleNewRandomGame}
        />
        <AboutModal
          isOpen={isAboutModalOpen}
          handleClose={() => setIsAboutModalOpen(false)}
        />

        <button
          type="button"
          className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
          onClick={() => setIsAboutModalOpen(true)}
        >
          {ABOUT_GAME_MESSAGE}
        </button>

        <Alert
          message={NOT_ENOUGH_LETTERS_MESSAGE}
          isOpen={isNotEnoughLetters}
        />
        <Alert
          message={WORD_NOT_FOUND_MESSAGE}
          isOpen={isWordNotFoundAlertOpen}
        />
        <Alert message={CORRECT_WORD_MESSAGE(solution)} isOpen={isGameLost} />
        <Alert
          message={successAlert}
          isOpen={successAlert !== ''}
          variant="success"
        />
      </div>
    </AppContext.Provider>
  )
}

export default App
