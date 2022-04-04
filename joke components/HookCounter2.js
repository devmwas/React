import React from 'react'
import useCounter from './useCounter'

function HookCounter2() {

    const [count, increment, decrement, reset] = useCounter(100, 10)

  return (
    <React.Fragment>
        <h1>Count2 -- {count} </h1>
        <button onClick={increment}><h3>Increment</h3></button>
        <button onClick={decrement}><h3>Decrement</h3></button>
        <button onClick={reset}><h3>Reset</h3></button>
    </React.Fragment>
  )
}

export default HookCounter2