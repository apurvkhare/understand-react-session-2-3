import React from 'react'

const defaultUser = 'Tony'
function userNameReducer(currUser = defaultUser, newUser) {
    return newUser
}

function NameInput() {
    const [user, setUser] = React.useReducer(userNameReducer, defaultUser)
    const handleChange = e => setUser(e.target.value)
    return (
        <div>
            <label>
                User Name: <input value={user} onChange={handleChange} />
            </label>
            <h3>You typed: {user}</h3>
        </div>
    )
}

export default NameInput


const initialState = {
    count: 0
    // lot other state values
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + action.payload.step,
            }
        
        case "decrement":
            return {
                ...state,
                count: state.count - action.payload.step,
            }
        
        case "clear":
            return {
                ...state,
                count: 0,
            }
    
        default:
            return state
    }
}


const step = 3

const CounterComponent = () => {
    const [state, dispatch] = React.useReducer(countReducer, initialState)
    const increment = () => dispatch({
        type: 'increment',
        payload: {
            step
        } 
    })

    const decrement = () => dispatch({
        type: 'decrement',
        payload: {
            step
        } 
    })

    const clear = () => dispatch({
        type: 'clear' 
    })

    return (
    <div>
      <h3>Counter value: {state.count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={clear}>reset</button>
    </div>
  )
}