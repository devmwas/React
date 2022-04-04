import React from 'react'

function ChildTwo({name}) {

    console.log('Child Two Rendering')
  return (
    <div><h1>Child Two -- {name} </h1></div>
  )
}

export const MemoizedChild = React.memo(ChildTwo)