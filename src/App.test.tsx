import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { GAME_TITLE } from './constants/strings'
import { defaultSolution } from './lib/words'

beforeEach(() => {
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
