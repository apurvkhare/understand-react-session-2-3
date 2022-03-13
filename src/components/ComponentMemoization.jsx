import React from 'react'

let ComponentMemoization = ({hero, updateHero}) => {

    console.log('child component rendered')

  return (
    <div>
        <h1>ComponentMemoization</h1>
        <p>My name is {JSON.stringify(hero)}</p>
    </div>
  )
}

ComponentMemoization = React.memo(ComponentMemoization)

const ParentComponent = () => {

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState("Tony")
    const hero = React.useMemo(() => ({
        name,
        skills: ['super strength', 'flight', 'x-ray vision'],
        team: 'Avengers'
    }), [name])

    const updateHero = React.useCallback(() => (name, team) => {
        setName(name)
        hero.team = team
    }, [hero])
    
    console.log('parent component rendered')

    const handleClick = () => {
        setCount(count + 1)
    }
    
    return (
        <div>
        <h1>ParentComponent</h1>
        <ComponentMemoization updateHero={updateHero} />
        <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default ParentComponent