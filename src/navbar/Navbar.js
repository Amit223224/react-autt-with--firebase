
import React from 'react'
import { Link } from "react-router-dom";


const Navbar = (props) => {
    return (
        <div >
        
           <nav className="navbar navbar-expand-lg navbar-success bg-success bg-opacity-10  ">
  <div className="container-fluid">
    <a  className="navbar-brand link-success offset-3" >Plants-Help </a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       
      
      <li className="nav-item">
          <Link to="/" className="nav-link  mx-auto ms-5 ">
          <button type="submit" className="btn btn-outline-danger rounded-pill " onClick={props.handleAuth}>Logout</button>
          </Link>
        </li>
      </ul>
    </div>
    
  </div>
</nav>

 <h1 className="  mt-5 pb-5 text-success text-center bg-warning bg-opacity-10 rounded-pill ">Welcome to our pages</h1>
 <img  src="img-4.jpg" alt=""   className="ms-4 rounded-pill " />
 

 
 </div>



    
    )
}

export default Navbar;
