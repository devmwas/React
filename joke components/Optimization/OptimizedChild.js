import React from 'react'

export function OptimizedChild() {
    console.log('Optimized Child Rendering!')
  return (
    <div><h1>Child of an Optimized Parent</h1></div>
  )
}

export const MemoizedOptimizedChild = React.memo(OptimizedChild)