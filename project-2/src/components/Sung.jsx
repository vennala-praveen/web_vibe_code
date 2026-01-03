import React, { useEffect, useState } from 'react'

const Sung = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        //api call on component mount

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
    }, []) //empty dependency array = run once
    console.log(user)

  return (
    <div className='h-screen w-screen bg-black text-white'>
        <ul>
            {user.map(user => (
                <li key={user.id}>{user.name}, {user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default Sung