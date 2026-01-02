import React from 'react'
import saveicon from '/save.svg'
import { useState } from 'react'

const Card = ({job}) => {

  const [saved, setsaved] = useState("save");
  const [icon, seticon] = useState()
  const [bgcolor, setbgcolor] = useState()

  const handleSave = ()=>{
    if(saved === "save"){
      setsaved("saved");
      seticon("saved");
      setbgcolor("#dcdcdc");
    } else {
      setsaved("save")
      seticon("")
      setbgcolor("")
    }
  }

  return (

    <div className='card'>

      <div className='card-top'>
        <img className='logo' src={job.logo}/>
        <div onClick={handleSave} style={{backgroundColor:bgcolor}} className='save'>
            <p>{saved}</p>
            <img className={icon} src={saveicon}/>
        </div>
      </div>

      <div className='card-between'>
        <div className='company-details'>
            <p className='company-name'>{job.company}</p>
            <p className='jobposted'>{job.posted}</p>
        </div>
        <p className='job-role'>{job.role}</p>
        <ul className='job-info'>
            <li>{job.jobtype}</li>
            <li>{job.jobdesc}</li>
        </ul>
      </div>

      <hr/>

      <div className='card-bottom'>
        <div className='sal-location'>
          <p className='salary'>{job.salary}</p>
          <p className='job-location'>{job.joblocation}</p>
        </div>
        <button>Apply now</button>
      </div>

    </div>
  )
}

export default Card 