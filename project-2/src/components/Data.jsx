import React from 'react'

const Data = () => {

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }


  return (
    <div>
      <button onClick={getData} style={{ display: "block", marginTop: "150px", margin: "120px", padding: "20px", borderRadius:"10px"}} >Get Data</button>
    </div>
  )
}

export default Data
