import React, { useState } from 'react'

function useCounter(initialCount = 0, magnitude) {

    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(count + magnitude)
    }

    const decrement = () => {
        setCount(count - magnitude)
    }

    const reset = () => {
        setCount(initialCount)
    }

  return [count, increment, decrement, reset]

}

export default useCounter