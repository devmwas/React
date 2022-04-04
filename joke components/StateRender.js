import React, { useReducer } from 'react'

function StateRender() {

    const initialState = {
        fname: 'Mwangi',
        lname: 'Kinuthia'
    }

    const reducer = (state, action) => {
        switch(action) {
            case 'change':
                const newNames = { ...state, fname: "Mwas", lname:   "Dev" }
                return newNames
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState) 
    const {fname, lname} = state

    console.log('UseState Rendering With Object!')

  return (
    <div>
        <h1>First name: {fname} </h1>
        <h1>Last name: {lname} </h1>
        <button onClick={() => dispatch('change')}><h3>Change Names</h3></button>
    </div>
  )
}

export default StateRender