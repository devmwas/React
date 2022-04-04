import React, { useReducer } from 'react'

function StateRender2() {

    const initialState = ['Python', 'JavaScript', 'HTML', 'CSS']

    const reducer = (state, action) => {
        switch(action) {
            case 'add':
                const newState = [ ...state, 'C#' ]
                return newState
            case 'minus':
                const newState2 = [ ...state ]
                newState2.pop()
                return newState2
            default:
                return state
        }
    }

    const [langs, dispatch] = useReducer(reducer, initialState)
    const LANGS = langs.map((lang, index) => <span key={index}><b> {lang} </b></span>)

    console.log('UseState Rendering With Array')

  return (
    <div>
        <h1>Programming Languages</h1>
        {LANGS}
        <br />
        <button onClick={() => dispatch('add')}><h3>ADD</h3></button>
        <button onClick={() => dispatch('minus')}><h3>MINUS</h3></button>
    </div>
  )
}

export default StateRender2