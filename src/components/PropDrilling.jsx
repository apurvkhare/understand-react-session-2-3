import React from 'react'
import {UserProvider, useUserContext} from '../context/UserContextProvider'

const Home = () => {
    const [name, setName] = React.useState('Guest')

    return <div>
        <UserProvider>
            <Profile />
            <Welcome />
        </UserProvider> 
        <About />
    </div>
}

const About = () => {
    return <h1>About component</h1>
}

const Profile = () => {
    const {name} = useUserContext()

    return<div>
        <h3>Your User Name: {name}</h3>
    </div>
}

const Greeting = () => {
    return<div>
        {/* ...
        ... */}
        <GreetingMsg />
    </div>
}

const GreetingMsg = () => {  
    const {name} = useUserContext()

    return <h3>Welcome {name}, Good morning</h3>
}

const Welcome = () => {
    return<div>
        {/* ...
        ... */}
        <Greeting />
    </div>
}
export default Home