import React from 'react'

const ControlledInput = () => {
    const [name, setName] = React.useState('')

    const handleChange = (e) => setName(e.target.value.toString().toUpperCase())

    return <div>
        <h3>Enter your name</h3>
        <input type="text" value={name} onChange={handleChange} />
    </div>
}

export default ControlledInput