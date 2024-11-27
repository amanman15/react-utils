import React from 'react'

export default function Home(props) {
  return (
    <div className="container my-3" >
      <h1 style={{color: props.mode==="light"?"black":"white"}}> This is home</h1>
    </div>
  )
}
