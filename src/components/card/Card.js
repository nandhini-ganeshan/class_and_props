import React from 'react'
import "./card.css"
import image from"../images/profile.jpg"
export default function Card(props) {
  return (
    <div className='card-div'>
      <span ></span>
      <span className='popup-menu'>...</span>
    <div className='profile'>
        <div className='profile-img'>
<img src={props.pic}alt=''></img>
        </div>
       <div className='profile-name'>{props.username}</div>

    </div>
    <div className='status'> 
    <StatusCount subtitle="projects" count ={props.projectCount}/>
    <StatusCount subtitle="prototype" count={props.prototypeCount} />
    </div>
    </div>
  )
}




 function StatusCount(props) {
  return (
    <div className='status-div'>
      <div className='count'>{props.count}</div>
     <div className='subtitle'>{props.subtitle}</div>
     
      
    </div>
  )
}
