import React from 'react'

const UserContext = React.createContext()

const UserProvider = ({children}) => {
    const [name, setName] = React.useState('Guest')

    const value = {name, setName}
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

const useUserContext = () => {
    const state = React.useContext(UserContext)
    if (!state) {
        throw new Error('useUserContext can only be used in a component wrapped with UserProvider')
    }
    return state
}

export {UserProvider, useUserContext}