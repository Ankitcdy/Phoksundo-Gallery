import React, { useState, useEffect } from 'react'
import axios from 'axios'


const DataFetch = () => {
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(8)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch((err => console.log(err)))
    }, [])
    return (
        <>
            <div className='row'>
                {posts.slice(0, limit).map(item => (
                    <div className="col-md-3 shadow-lg mt-4" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
                {limit < posts.length && (
                    <center><button className="btn btn-warning mt-3 p-2" onClick={() => setLimit(limit + 8)}>Load more</button></center>
                )}


            </div>
        </>
    )
}

export default DataFetch