import React, { useState } from 'react'

const App = () => {

  // const [counter, setCounter] = useState(0);

  // const addValue = () => {
  //   setCounter(counter + 1);
  // }

  // const removeValue = () => {
  //   setCounter(counter - 1);
  // }

  const names = ["Praveen", "Jinwoo", "Aizen", "Ichigo", "Isagi", "Nagi", "Bachira", "Tony"];

  const [name, setUsername] = useState(names[0]);

  const changeName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setUsername(names[randomIndex]);
    // setUsername((prev) => (prev + 1) % names.length);
  };



  // const changeName = () => {
  //   setName("Ichigo");
  // }

  return (
    <div>
      {/* <h2>&nbsp;&nbsp;&nbsp;&nbsp;{counter}</h2>
      <h1>Counter : {counter}</h1>
      <button onClick={addValue}>Add Value</button>&nbsp;&nbsp;&nbsp;
      <button onClick={removeValue}>Remove Value</button><br /><br />
      <footer>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Footer : {counter}</footer> */}

      <h2 className="text-3xl font-bold underline p-4 m-4 bg-green-500 border-2 rounded justify-self-center">Using the useState</h2>
      {/* <h2 className="text-3xl font-bold p-4 m-3 bg-red-600 border-2">{names[name]} </h2> */}
      <h2 className="text-3xl font-bold p-4 m-4 bg-red-600 border-2 text-center rounded">{name} </h2>
      <button className="p-4 mx-24 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={changeName}>Change Name</button>
      {/* <button onClick={() => setUsername("Jinwoo")}>Change to Jinwoo</button>&nbsp;&nbsp;
      <button onClick={() => setUsername("Ichigo")}>Change to Ichigo</button>&nbsp;&nbsp;
      <button onClick={() => setUsername("Aizen")}>Change to Aizen</button>&nbsp;&nbsp;
      <button onClick={() => setUsername("Isagi")}>Change to Isagi</button>&nbsp;&nbsp; */}
      

    </div>
  )
}

export default App
