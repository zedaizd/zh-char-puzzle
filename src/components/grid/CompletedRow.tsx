import { getGuessStatuses, getSymbolStatus } from '../../lib/statuses'
import { Cell } from './Cell'
import { SymbolDisplay } from './SymbolDisplay'

type Props = {
  guess: string
  symbols: number[]
  solution: string
  solutionSymbols: number[]
  possibleSymbols: number[]
}

export const CompletedRow = ({
  guess,
  symbols,
  solution,
  solutionSymbols,
  possibleSymbols,
}: Props) => {
  const statuses = getGuessStatuses(guess, solution)
  const getSymbolDisplayClassName = (symbol: number) => {
    let ret = 'p-0.5 m-0.5 w-2/5 border-2 border-solid rounded'
    switch (getSymbolStatus(symbol, solutionSymbols, possibleSymbols)) {
      case 'absent':
        ret += ' border-red-400'
        break

      case 'correct':
        ret += ' border-green-400'
        break

      default:
        ret += ' border-slate-500'
        break
    }

    return ret
  }

  return (
    <div className="mb-6 items-center">
      <Cell value={guess} status={statuses[0]} />
      <div className="flex h-40 items-center flex-wrap flex-col">
        {symbols.map((symbol, i) => (
          <div className={getSymbolDisplayClassName(symbol)}>
            <SymbolDisplay key={i} symbol={symbol} />
          </div>
        ))}
      </div>
    </div>
  )
}
