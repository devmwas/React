import React, { useState } from 'react'
import useInput from './useInput'

function NormalInput() {

    const [firstName, bindFirstName, resetF] = useInput('')
    const [lastName, bindLastName, resetL] = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`First name is '${firstName}' last name is '${lastName}.'`)
        resetF()
        resetL()
    }

  return (
    <React.Fragment>
        <form onSubmit={handleSubmit}>
            <label>
                FirstName
                <input type='text' 
                { ...bindFirstName }
                />
            </label>
            <label>
                LastName
                <input type='text' 
                { ...bindLastName }
                />
            </label>
            <button type='text'>Submit</button>
        </form>
    </React.Fragment>
  )
}

export default NormalInput