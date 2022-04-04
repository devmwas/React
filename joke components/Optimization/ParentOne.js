import React, { useState } from 'react'

function ParentOne({children}) {

    const [count, setCount] = useState(0)


    console.log('Parent Rendering!')

  return (
    <div>
        <h1>Count {count} </h1>
        <button onClick={() => setCount(c => c + 1)}>add</button>
        {children}
    </div>
  )
}

export default ParentOne