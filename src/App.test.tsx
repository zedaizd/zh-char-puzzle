import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { GAME_TITLE, SWITCH_TO_RANDOM_CONFIRM_TEXT } from './constants/strings'
import { defaultSolution } from './lib/words'

beforeEach(() => {
  localStorage.clear()

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })

  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  })
})

afterEach(() => {
  jest.restoreAllMocks()
})

test('renders App component', () => {
  render(<App />)
  const linkElement = screen.getByText(GAME_TITLE)
  expect(linkElement).toBeInTheDocument()
})

test('highlights matching hint cards while typing a guess', () => {
  const { container } = render(<App />)
  const guessInput = screen.getByPlaceholderText('猜一字')
  fireEvent.change(guessInput, { target: { value: defaultSolution } })

  const highlightedHintKeys = container.querySelectorAll('button.ring-2')
  expect(highlightedHintKeys.length).toBeGreaterThan(0)
})

test('asks for confirmation before switching unfinished daily game', () => {
  const confirmSpy = jest.spyOn(window, 'confirm').mockReturnValue(false)
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: '隨機模式' }))

  expect(confirmSpy).toHaveBeenCalledWith(SWITCH_TO_RANDOM_CONFIRM_TEXT)
  expect(screen.queryByText('(Random)')).not.toBeInTheDocument()
})

test('switches to random mode after confirmation', () => {
  jest.spyOn(window, 'confirm').mockReturnValue(true)
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: '隨機模式' }))

  expect(screen.getByText('(Random)')).toBeInTheDocument()
})
