import { ReactNode, useContext } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { SymbolDisplay } from '../grid/SymbolDisplay'
import { AppContext } from '../../contexts/AppContext'

type Props = {
  children?: ReactNode
  symbol: number
  width?: number
  status?: CharStatus
  isPreviewMatch?: boolean
}

export const HintKey = ({
  children,
  status,
  width = 40,
  symbol,
  isPreviewMatch = false,
}: Props) => {
  const { isDarkMode } = useContext(AppContext)

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white transition-shadow',
    {
      'bg-slate-200 hover:bg-slate-300 active:bg-slate-400':
        !status && !isDarkMode,
      'bg-slate-600 hover:bg-slate-500 active:bg-slate-400':
        !status && isDarkMode,

      'bg-red-300 text-white': status === 'absent' && !isDarkMode,
      'bg-red-400 text-white': status === 'absent' && isDarkMode,

      'bg-green-200 hover:bg-green-300 active:bg-green-400 text-white':
        status === 'correct' && !isDarkMode,
      'bg-green-500 hover:bg-green-400 active:bg-green-300 text-white':
        status === 'correct' && isDarkMode,

      'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-700 text-white':
        status === 'present',

      'ring-2 ring-indigo-500 dark:ring-indigo-300 shadow-lg shadow-indigo-400/50':
        isPreviewMatch,
    }
  )

  return (
    <button style={{ width: `${width}px`, height: '58px' }} className={classes}>
      <SymbolDisplay symbol={symbol} />
    </button>
  )
}
