import React from 'react'

export function ChildVI({func}) {
    console.log('Memoized Child VI Render!')
  return (
    <div><h1>Hello </h1></div>
  )
}

export const MemoizedChildVI = React.memo(ChildVI) 