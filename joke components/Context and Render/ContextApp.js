import React from 'react'
import ContextParent from './ContextParent'
import Children from './Children'

function ContextApp() {
  return (
    <div>
        <h1>ContextApp</h1>
        <ContextParent>
            <Children />
        </ContextParent>
    </div>
  )
}

export default ContextApp