import React, { useState } from 'react'

function UseStateRender() {

    const [count, setCount] = useState(0)
    console.log('useState rendering and rerendering..')

  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}><h1>Count --- {count}</h1> </button>
        <button onClick={() => setCount(0)}><h1>Count to 0 --- {count}</h1> </button>
        <button onClick={() => setCount(5)}><h1>Count to 5 --- {count}</h1> </button>
    </div>
  )
}

export default UseStateRender