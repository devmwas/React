import React, { useState } from 'react'
import {MemoizedChildVI} from './ChildVI'

function ParentIV() {
    const [name, setName] = useState('Mwangi')
    const [count, setCount] = useState(0)

    console.log('Parent IV Render')

    const names = {
        fname: 'Mwangi',
        lname: 'Kinuthia'
    }

    const numbers = ['one', 'two', 'three']

    const demoFunc = () => {}

  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}><h3>Count {count}</h3></button>
        <button onClick={() => setName('Maurice')}><h3>Change Name</h3></button>
        <MemoizedChildVI func={demoFunc} />
    </div>
  )
}

export default ParentIV