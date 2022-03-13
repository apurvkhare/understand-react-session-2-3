import React from 'react'

const UseRefComponent = () => {
    const inputRef = React.useRef()
    const teamRef = React.useRef('Avengers')

    React.useEffect(() => {
        console.log(inputRef.current)
    }, [])

    return (
        <>
            <h1 >UseRefComponent</h1>
            <input ref={inputRef} type='text' />
            <button onClick={() => console.log(inputRef.current.value)}>click me</button>
        </>
    )
}

export default UseRefComponent
