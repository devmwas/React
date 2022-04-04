import React, { useCallback, useMemo, useState } from 'react'
import {MemoizedOptimizedChild} from './OptimizedChild'

function OptimizedParent() {

    const [count, setCount] = useState(0)

    const names1 = {
        fname: 'Mwangi',
        lname: 'Kinuthia'
    }

    const [names, setNames] = useState(names1)

    const demoFunc = () => {}

    const numbers = []

    console.log('Optimized Parent Rendering')

    const MemoizedNames = useMemo(() => names, [])
    const demo = useCallback(demoFunc, [])
    const demo2 = useMemo(() => demoFunc, [])
    const numbers2 = useMemo(() => numbers, [])

  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}><h3>Count {count} </h3></button>
        <button onClick={() => setNames({fname: 'Maurice', lname: 'Tafari'})}>Change Names</button>
        <h1>Names: {names.fname} {names.lname} </h1>
        <MemoizedOptimizedChild names={MemoizedNames} func={demo2} numbers={numbers2}  />
    </div>
  )
}

export default OptimizedParent