import React from "react"
import PropTypes from 'prop-types'

const Home = () => {
    const [userName, setUserName] = React.useState('Tony')
    const [age, setAge] = React.useState(0)

    return <div>
        <h1>Home Page</h1>
        <User userName={userName} age={age} updateProfile={setAge} />
    </div>
}

const User = ({userName, age, updateProfile}) => {

    return <div>
        <h3>Welcome, {userName}</h3>
        {age !== 0 ? <p>current age {age}</p> : <p>age invalid</p>}
        <button onClick={() => updateProfile(50)}>update</button>
    </div>
}

User.propTypes = {
    userName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    updateProfile: PropTypes.func.isRequired
}

export default Home