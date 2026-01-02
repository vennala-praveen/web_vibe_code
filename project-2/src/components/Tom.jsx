import React from 'react'
import axios from 'axios'


const Tom = () => {
    const getAxiosData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
    }
  return (
    <div>
      <button onClick={getAxiosData} style={{display:"block", margin: "50px", padding: "20px", borderRadius:"10px"}}>Get Axios Data</button>
    </div>
  )
}

export default Tom
