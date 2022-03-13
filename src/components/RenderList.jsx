import React from 'react'

const RenderList = () => {
    const [data, setData] = React.useState([
        {
            id: 1,
            name: 'Tony',
        },
        {
            id: 2,
            name: 'Steve',
        },
        {
            id: 3,
            name: 'Bruce',
        },
        {
            id: 4,
            name: 'Natasha',
        },
        {
            id: 5,
            name: 'Barton',
        },
        {
            id: 6,
            name: 'Thor',
        },
    ])

    return (
        <div>
            {data && data.length !== 0 ? (
                data.map(dataItem => <p key={dataItem.id}>{dataItem.name}</p>)
            ) : (
                <h3>No data to show</h3>
            )}
        </div>
    )
}

export default RenderList
