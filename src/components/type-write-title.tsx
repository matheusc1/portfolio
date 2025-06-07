import { useEffect, useState } from 'react'

type TypewriterTitleProps = {
  title: string
}

export function TypewriterTitle({ title }: TypewriterTitleProps) {
  const [text, setText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(title.slice(0, index + 1))
      index++
      if (index === title.length) clearInterval(interval)
    }, 80)

    return () => clearInterval(interval)
  }, [title])

  return (
    <h1 className="text-gray-100 font-title leading-title text-[3.5rem] text-shadow-lg/40">
      {text}
      <span className="animate-pulse text-gray-300">|</span>
    </h1>
  )
}
