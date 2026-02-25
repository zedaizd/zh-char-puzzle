# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript app.
- `src/components/` holds UI pieces grouped by domain (`grid/`, `keyboard/`, `modals/`, `stats/`, `alerts/`).
- `src/lib/` contains game logic and utilities (word selection, stats, local storage, keyboard helpers).
- `src/constants/` stores generated runtime constants such as `wordlist.ts` and symbol mappings.
- `dataset/` holds raw and filtered character data; `dataset/dev/` includes scripts that regenerate `src/constants/*`.
- `public/` contains static assets, especially component images under `public/parts/`.

## Build, Test, and Development Commands
- `npm start`: run the local dev server.
- `npm run build`: create a production build in `build/`.
- `npm test`: run Jest tests in watch mode.
- `CI=true npm test -- --watch=false`: run tests once (CI-style).
- `npm run lint`: Prettier check for `src/`.
- `npm run fix`: format `src/` with Prettier.
- `node dataset/dev/update_frequently_used.js` then `node dataset/dev/update_app_consts.js`: regenerate constants after dataset changes.

## Coding Style & Naming Conventions
- TypeScript is `strict`; keep types explicit for exported APIs and complex state.
- Follow Prettier defaults configured here: 2-space indentation, single quotes, no semicolons.
- Use PascalCase for React component files (`StatsModal.tsx`), camelCase for utility modules (`localStorage.ts`), and UPPER_SNAKE_CASE for exported constants.
- Keep components focused; move reusable logic to `src/lib/` or `src/contexts/`.

## Testing Guidelines
- Test stack: Jest + React Testing Library (`src/setupTests.ts`).
- Add tests as `*.test.tsx` near the related module (or under `src/` if cross-cutting).
- Prefer behavior-focused tests (rendering, interaction, state transitions) over implementation details.
- Ensure `npm run lint` and CI-style tests pass before opening a PR.

## Commit & Pull Request Guidelines
- Use short, imperative commit subjects; optional prefixes like `chore:` are common.
  - Examples: `Fix building error`, `chore: make tutorial more readable`.
- Keep commits scoped to one concern.
- PRs should include: what changed, why, test evidence, and screenshots/GIFs for UI changes.
- Link related issues and call out data regeneration steps when `dataset/` or generated constants changed.
