import React, { useState } from 'react'
import {MemoizedChild} from './ChildTwo'

function ParentTwo() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Mwangi')

    console.log('ParentTwo Rendering')

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count} </button>
        <button onClick={() => setName('Maurice')}>Change Name</button>
        <h2>Name: {name} </h2>
        <MemoizedChild name={name} />
    </div>
  )
}

export default ParentTwo