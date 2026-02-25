import { HintKey } from '../keyboard/HintKey'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="遊玩說明" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        請根據文字部件字卡，猜中隱藏其中的國字
        <br />
        下面是題目範例，有三張字卡
        <br />
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <HintKey symbol={20} />
        <HintKey symbol={88} />
        <HintKey symbol={73} />
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        字卡上是拆解答案的國字後得到的部件
        <br />
        所有組成答案的部件都藏在中
        <br />
        但是謎題顯示的字卡，混入了無關的部件
        <br />
        <br />
        請根據字卡部件，猜測答案的國字
        <br />
        共有六次機會輸入答案，每次可試一字
        <br />
        猜測字的部件，會改變字卡的顏色，顯示哪些部件在答案裡
        <br />
        以下假設這關的答案是「左」
        <br />
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <HintKey symbol={20} status="correct" />
        <HintKey symbol={88} />
        <HintKey symbol={73} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        如果猜「友」，會打中左邊的卡
        <br />
        卡片變綠色表示答案有這個部件
        <br />
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <HintKey symbol={20} />
        <HintKey symbol={88} status="absent" />
        <HintKey symbol={73} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        如果猜「古」，「口」會打中中間的卡
        <br />
        卡片變紅色表示答案沒有這個部件
        <br />
        <br />
        答案跟可以猜的字出自
        <a
          href="https://language.moe.gov.tw/result.aspx?classify_sn=23&subclassify_sn=437&content_sn=46"
          className="underline font-bold"
        >
          「教育部常用字表」
        </a>
        <br />
        文字拆解的規則出自
        <a
          href="https://www.cns11643.gov.tw/pageView.jsp?ID=104"
          className="underline font-bold"
        >
          「全字庫」
        </a>
        <br />
        祝你玩得愉快！
      </p>
    </BaseModal>
  )
}
