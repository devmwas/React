import React from 'react'
import ChildIV from './ChildIV'

function ChildThree({name}) {

    console.log('Child Three Rendering')
  return (
    <div>
      <h1>{} -- {name} </h1>
      <ChildIV />
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)