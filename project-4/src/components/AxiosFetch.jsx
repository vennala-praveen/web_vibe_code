import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosFetch = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => setPosts(res.posts)
    //     .then(res => setLoading(res.false)))
    // })

    useEffect(() => { axios.get('https://jsonplaceholder.typicode.com/posts') 
        .then(res => { 
            setPosts(res.data); 
            setLoading(false); 
        }) 
        .catch(err => { 
            console.error(err); 
            setLoading(false); 
        }); 
    }, []);
    

  return (
    <div>
        {loading ? (
            <h1>Loading....</h1>
        ) : (
            <ul>
                {posts.map(data => (
                    <li key={data.id}>{data.body}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default AxiosFetch

