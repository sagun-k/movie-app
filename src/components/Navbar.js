import React from 'react'

const Navbar=(props)=> {
    const textStyle={
        color:"#50ab57"
    }
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid" style={textStyle} >
    <a className="navbar-brand fs-2 " style={textStyle} href="#">MoviesReview</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={textStyle}>
        <li className="nav-item">
          <a className="nav-link active" style={textStyle} aria-current="page" href="#">Home</a>
        </li>
   
        <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" style={textStyle} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" style={textStyle} href="#">Action</a></li>
            <li><a className="dropdown-item" style={textStyle} href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" style={textStyle} href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.value} onChange={(event)=>props.setSearchvalue(event.target.value)} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
    )
}

export default Navbar
