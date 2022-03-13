import React from 'react'
import { useFetch } from '../utils/customHooks'

const Users = () => {
    const [ data, loading, error ] = useFetch('https://jsonplaceholder.typicode.com/users')

    if(loading)
        return <p>Loading...</p>
    
    if(error)
        return <p>Error! {JSON.stringify(error)}</p>

    return (
        <div>
            <h1>Users</h1>
            {/* {JSON.stringify(data)} */}
            {data?.data && data?.data.length !== 0 && data?.data.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    )
}

export default Users