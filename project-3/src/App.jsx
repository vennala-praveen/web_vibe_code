import React from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  const data = [
    {
        id:1,
        logo:"/amazon.jpg",
        company:"Amazon",
        posted:"2 days ago",
        role:"Senior UI/UX Designer",
        jobtype:"Part-Time",
        jobdesc:"Senior Level",
        salary:"$120/hr",
        joblocation:"Mumbai, India"
    },
    {
        id:2,
        logo:"/google.jpg",
        company:"Google",
        posted:"10 days ago",
        role:"Frontend Developer",
        jobtype:"Full-Time",
        jobdesc:"Flexible Schedule",
        salary:"$150-220k",
        joblocation:"Kochi, India"
    },
    {
        id:3,
        logo:"/hp.jpg",
        company:"HP",
        posted:"8 days ago",
        role:"Java Developer",
        jobtype:"Part-Time",
        jobdesc:"Remote",
        salary:"$85/hr",
        joblocation:"Chennai, India"
    },
    {
        id:4,
        logo:"/figma.jpg",
        company:"Figma",
        posted:"5 days ago",
        role:"UX Designer",
        jobtype:"Full-Time",
        jobdesc:"In office",
        salary:"$200-250k",
        joblocation:"Bangalore, India"
    },
    {
        id:5,
        logo:"/netflix.jpg",
        company:"Netflix",
        posted:"7 days ago",
        role:"Java Full Stack",
        jobtype:"Full-Time",
        jobdesc:"Remote",
        salary:"$100/hr",
        joblocation:"Delhi, India"
    },
    {
        id:6,
        logo:"/apple.jpg",
        company:"Apple",
        posted:"2 days ago",
        role:"SDE-1",
        jobtype:"Full-Time",
        jobdesc:"Flexible Schedule",
        salary:"$85-110k",
        joblocation:"Bangalore, India"
    },
    {
        id:7,
        logo:"/facebook.jpg",
        company:"Facebook",
        posted:"12 days ago",
        role:"SDE-2",
        jobtype:"Full-Time",
        jobdesc:"Flexible Schedule",
        salary:"$75-130k",
        joblocation:"Kerala, India"
    },
    {
        id:8,
        logo:"/microsoft.jpg",
        company:"Microsoft",
        posted:"4 days ago",
        role:"Project Manager",
        jobtype:"Full-Time",
        jobdesc:"Flexible Schedule",
        salary:"$95-150k",
        joblocation:"Bangalore, India"
    },
    {
        id:9,
        logo:"/samsung.jpg",
        company:"Samsung",
        posted:"6 days ago",
        role:"Senior Staff Analog Design",
        jobtype:"Contract",
        jobdesc:"Flexible Schedule",
        salary:"$85-120k",
        joblocation:"Hyderabad, India"
    }
]
  return (
    <div className='main'>
    <div className='jobposts'>
      {data.map((job)=>(
        <Card key={job.id} job={job}/>
      ))}
    </div>
    </div>
  )
}

export default App