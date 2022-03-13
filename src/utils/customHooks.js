import React from 'react'
import axios from 'axios'

export const useFetch = url => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const fetchData = React.useCallback(() => {
        setLoading(true)
        axios.get(url).then((data) => {
            setLoading(false)
            setData(data)
        }).catch((error) => {
            setLoading(false)
            setError(error)
        })
    }, [url])

    React.useEffect(fetchData, [fetchData])

    return [data, error, loading]
}