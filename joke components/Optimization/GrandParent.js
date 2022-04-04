import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

function GrandParent() {

    const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}><h2>Grand Parent Count {count} </h2></button>
        <ParentOne grandCount={count}>
            <ChildOne />
        </ParentOne>
    </div>
  )
} 

export default GrandParent