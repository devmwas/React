import React, { useState } from 'react'
import HookCounter from './HookCounter'
import HookCounter2 from './HookCounter2'
import HookCounter3 from './HookCounter3'

function NormalCounter() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

  return (
    <div>
        {/* <h1>Counter1 ---- {count} </h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        
        <h1>Counter2 ---- {count2} </h1>
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
        <button onClick={() => setCount2(0)}>Reset</button> */}

        <HookCounter />
        <HookCounter2 />
        <HookCounter3 />
    </div>
  )
}

export default NormalCounter