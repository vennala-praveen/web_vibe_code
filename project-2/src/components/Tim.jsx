import React, { useEffect, useState } from 'react'

const Tim = () => {

    //first -> side effect function -> api fetching / axios
    //second -> clean up function (unmount data)
    //third -> dependency list through comma sepereted

    const [count, setCount] = useState(0);
    // const [total, setTotal] = useState(0);

    //variation -> 1
        // useEffect(() => {
        //     alert("I will run on each render")
        // });

    //variation -> 2 --> that will only run on first render
        // useEffect(() => {
        //     alert("I will run only on 1st render")
        // }, []);

    //variation -> 3 --> that runs after count update d but before rendering
        // useEffect(() => {
        //     alert("I will run everytime when count is updated")
        // }, [count]);

    //variation -> 4 --> multiple dependencies
        // useEffect(() => {
        //     alert("I will run everytime when count is updated and total is also updated")
        // }, [count, total]);

    //variation -> 5 --> adding the clean up function
        useEffect(() => {
          alert("count is updated")
        
          return () => {
            alert("count is unmounted from UI")
          }
        }, [count])
        

    function handleClick(){
        setCount(count + 1)
    }

    // function handleTotal(){
    //     setTotal(total + 1);
    // }

  return (
    <div style={{color: "white"}}>
      <h1>UseEffect</h1>
      <button style={{margin: "20px 50px"}} onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <h2 style={{margin: "20px 50px", color: "white"}}>count is : {count}</h2>
      {/* <br />
      <button style={{margin: "20px 50px"}} onClick={handleTotal}>Click Me</button>
      <br />
      <br />
      <h2 style={{margin: "20px 50px", color: "white"}}>total is : {total}</h2> */}
    </div>
  )
}

export default Tim
