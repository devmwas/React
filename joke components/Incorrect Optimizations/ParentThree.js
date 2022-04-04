import React, { useState } from 'react'
import {MemoizedChildThree} from './ChildThree'
import {MemoizedChildV} from './ChildV'
import ChildV from './ChildV'

function ParentThree() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Mwangi')

    console.log('Parent Three Rendering')

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count} </button>
        <button onClick={() => setName('Maurice')}>Change Name</button>
        <h2>Name: {name} </h2>
        {/* <MemoizedChildThree name={name} >
          <i>Hello </i> 
        </MemoizedChildThree> */}
        <MemoizedChildV name={name} />
    </div>
  )
}

export default ParentThree