import topCover from './assets/top-cover.png'
import bottomCover from './assets/bottom-cover.png'
import { Heart } from '@phosphor-icons/react'

export function App() {
  return (
    <div>
      <img src={topCover} className='w-full' alt="top cover" />
      <div className="text-gray-600 font-maven">Hello world!</div>
      <Heart />
      <img src={bottomCover} className='w-full' alt="bottom cover" />
    </div>
  )
}
