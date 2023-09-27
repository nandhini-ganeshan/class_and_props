

import React from 'react'
import Class from './components/Class'
import Card from './components/card/Card'
import "./app.css"
import User_data, { userData } from "./components/card/User_data"
export const App = () => {
  return (
    <div className='app-div'>
      {/* <Class/> */}
      {userData.map((user)=>{
        return <Card username={user.username} pic={user.pic} prototypeCount={user.prototypeCount} projectCount={user.projectCount}/>
      })}
    </div>
  )
}
