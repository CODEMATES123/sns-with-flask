import React, { useState } from 'react'
import { apiBaseURL } from '../constants'

type Class={
  id:number,
  department:string,
  code:string,
  name:string,
  season:string,
  time:string,
  day:string,
  place:string,
  unit:number,
  teacher:string,
  grade_min:number,
  grade_max:number,
  note:string,
  error:string,
  is_spring:boolean,
  is_autumn:boolean
}

const Home = () => {
  const [classes,setClasses]=useState<Class[]>([])
  fetch(`${apiBaseURL}/api/classes`).then(res=>res.json()).then(data=>{
    setClasses(data)
  })
  return (
    <div>{classes.length===0?"ロード中...":JSON.stringify(classes)}</div>
  )
}

export default Home