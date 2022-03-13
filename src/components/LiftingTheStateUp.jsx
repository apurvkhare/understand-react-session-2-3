import React from 'react'

const Home = () => {
    const [name, setName] = React.useState('Guest')

    return <div>
        <Profile name={name}/>
        <Greeting name={name}/>
    </div>
}

const Profile = ({name}) => {
    return<div>
        <h3>Your User Name: {name}</h3>
    </div>
}

const Greeting = ({name}) => {
    return<div>
        <h3>Welcome {name}, Good morning</h3>
    </div>
}

export default Home