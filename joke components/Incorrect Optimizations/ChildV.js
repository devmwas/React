import React from 'react'

export function ChildV({name}) {
    const date = new Date()

  return (
    <div>
        <h1>Hello {name}. The time is: {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} </h1>
    </div>
  )
}

export const MemoizedChildV = React.memo(ChildV)