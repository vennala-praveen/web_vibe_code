import React, { useEffect, useState } from 'react'

const DataFetch = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false)
        })
    });


  return (
    <div>
        {loading ? (
            <h1>Loading....</h1>
        ) : (
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default DataFetch