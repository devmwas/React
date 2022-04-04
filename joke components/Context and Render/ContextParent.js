import React, { useState } from 'react'

export const CountContext = React.createContext()

function ContextParent({children}) {

    const [count, setCount] = useState(0)

    console.log('Context Parent Render!')

    
  return (
    <div>
        <h1>ContextParent</h1>
        <button onClick={() => setCount(c => c + 1)}>Count {count} </button>
        <CountContext.Provider value={count} >
            {children}
        </CountContext.Provider>
    </div>
  )
}

export default ContextParent