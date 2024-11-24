import React from 'react'

export default function Navbar(props) {

    const searchConsle = () => {
      console.log("You clicked search button")
      alert("Clikced")
    }
  return (
<nav className={`navbar navbar-expand-lg bg-${props.background} border-bottom border-body`}  data-bs-theme={props.background}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick={searchConsle}>Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
