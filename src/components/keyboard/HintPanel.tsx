import { getSymbolStatus } from '../../lib/statuses'
import { getCharSymbols } from '../../lib/words'
import { HintKey } from './HintKey'

type Props = {
  guesses: string[]
  solution: string
  solutionSymbols: number[]
  possibleSymbols: number[]
  previewSymbols?: number[]
}

export const HintPanel = ({
  guesses,
  solution,
  solutionSymbols,
  possibleSymbols,
  previewSymbols = [],
}: Props) => {
  let usedSymbols = guesses.reduce<number[]>((prev, current) => {
    return prev.concat(getCharSymbols(current))
  }, [])
  usedSymbols = usedSymbols.filter((v, i) => usedSymbols.indexOf(v) === i)

  const symbolStatuses = possibleSymbols.map((s) =>
    usedSymbols.includes(s)
      ? getSymbolStatus(s, solutionSymbols, possibleSymbols)
      : undefined
  )
  const previewSymbolSet = new Set(previewSymbols)

  const possibleSymbolIndexGroups: number[][] = []
  const groupSizes = possibleSymbols.length % 2 === 0 ? [7, 6] : [8, 7]

  let index = 0
  let groupIndex = 0
  while (index < possibleSymbols.length) {
    let currentGroupSize = groupSizes[groupIndex % 2]
    let row: number[] = []
    for (
      let i = 0;
      i < currentGroupSize && index < possibleSymbols.length;
      i++
    ) {
      row.push(index)
      index++
    }
    groupIndex++
    possibleSymbolIndexGroups.push(row)
  }

  return (
    <div>
      {possibleSymbolIndexGroups.map((v, i) => (
        <div key={i} className="flex justify-center mb-1">
          {v.map((index) => (
            <HintKey
              key={index}
              symbol={possibleSymbols[index]}
              status={symbolStatuses[index]}
              isPreviewMatch={previewSymbolSet.has(possibleSymbols[index])}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
