# 字知之明 (zh-char-puzzle) - Gemini CLI Context

This project is a Chinese character decomposition guessing game based on [cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle). Instead of guessing letters in a word, players guess a Chinese character, and the feedback is based on the components (radicals/parts) that make up the character.

## Project Overview

- **Purpose**: A Wordle-like game for Chinese character decomposition.
- **Main Technologies**: React (v17), TypeScript, Tailwind CSS.
- **Key Features**:
  - Daily puzzles based on a deterministic seed.
  - Character decomposition hints (showing which parts are correct, present elsewhere, or incorrect).
  - Uses component images from CNS11643 (全字庫).
  - Stat tracking and social sharing (emoji grid).

## Architecture & Data Flow

- **Frontend**: Standard React/TypeScript application created with `create-react-app`.
- **Game Logic**: Core logic resides in `src/lib/words.ts`, handling character-to-symbol mapping and affinity calculations.
- **Data Management**:
  - Raw data is in `dataset/`.
  - `dataset/dev/update_app_consts.js` processes YAML datasets and generates TypeScript constants in `src/constants/`.
  - Generated files like `src/constants/wordlist.ts` and `src/constants/charToGroups.ts` are used at runtime to keep the application lightweight and fast.
- **Assets**: Component images are stored in `public/parts/` and named by their component ID (e.g., `1.png`).

## Building and Running

### Development

```bash
npm install
npm start
```

### Production Build

```bash
npm run build
```

### Testing

```bash
npm test
```

### Updating Data Constants
If the raw datasets in `dataset/` are modified, regenerate the application constants:

```bash
node dataset/dev/update_app_consts.js
```

### Deployment
The project is configured for GitHub Pages:

```bash
npm run deploy
```

## Development Conventions

- **Styling**: Tailwind CSS is used for all UI components. Theme support (dark/light) is implemented via `AppContext`.
- **Formatting**: [Prettier](https://prettier.io/) is used for code formatting. Run `npm run fix` to format the codebase.
- **Source Control**: Git is managed with Husky and lint-staged to ensure code quality on commit.
- **Local Storage**: Game state (guesses, statistics, settings) is persisted in the browser's local storage.
- **Data Integrity**: New characters should be validated against the CNS11643 decomposition database. Minimum component count for a "solution" character is typically 3 (defined in `update_app_consts.js`).

## Key Files

- `src/App.tsx`: Main entry point and state coordinator.
- `src/lib/words.ts`: Daily word selection, symbol affinity, and guess validation.
- `src/components/grid/Grid.tsx`: Visual representation of guesses.
- `src/components/keyboard/HintPanel.tsx`: The "keyboard" equivalent showing available character components.
- `dataset/dev/update_app_consts.js`: Critical build-time script for data synchronization.
