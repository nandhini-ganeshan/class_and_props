import React from 'react'

export default class Class extends React.Component {
  constructor(){
    super();
    // this.color="red";
    this.state={color:"red"};
  }
  
    render() {
    return (
     
      <div>
        <button onClick={()=>{
            this.setState({color:"blue"})
        }}> 
        change color
        </button>
    <h1> color:{this.state.color}</h1>
        </div>
    )
  }
}
