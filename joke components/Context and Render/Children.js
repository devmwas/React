import React, { useContext } from 'react'
import {CountContext} from './ContextParent'

function Children() {

    console.log('Children Render')

  return (
    <div>
        <h1>Children</h1>
        <ChildA />
    </div>
  )
}

export const ChildA = () => {

    console.log('ChildA Render')

    return(
        <div>
            <h1>ChildA</h1>
            <ChildB />
        </div>
    )
}

export const ChildB = () => {

    console.log('ChildB Render')

    return(
        <div>
            <h1>ChildB</h1>
            <ChildC />
        </div>
    )
}

export const ChildC = () => {

    console.log('ChildC Render')
    const count = useContext(CountContext)

    return(
        <div>
            <h1>ChildC</h1>
            <h1>Count {count} </h1>
        </div>
    )
}

export default Children