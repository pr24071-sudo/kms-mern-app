import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import { userContext } from '../App';
import { useContext } from 'react';

const Navbar = () => {

    const { state, dispatch, userLoginDetails } = useContext(userContext)
     

    // console.log('hey--.', state, userLoginDetails)

    const RenderMenu = () => {
        if (userLoginDetails) {
            return (
                <>

                                  
<li class="nav-item px-2 font-weight-bold  mt-1">
                            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                        </li>
                  
                        <li class="nav-item px-2 font-weight-bold  mt-1">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>

                        <li class="nav-item px-2 font-weight-bold mt-1">
                            <NavLink to="/about" className="nav-link ">About</NavLink>
                        </li>

                        <li class="nav-item px-2 font-weight-bold mt-1">
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                        </li>

                        <li class="nav-item px-2 font-weight-bold mt-1">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>


                        <li class="nav-item px-2 font-weight-bold ">
                            <NavLink to="/logout" className="nav-link">
                                <button type="button" class="btn btn-lg pl-3 btn-danger mt-2">Logout</button>
                            </NavLink>
                        </li>


                    
                </>
            )
        }
        else {
          
               return(
                <>
                 <li class="nav-item px-2 font-weight-bold  mt-1">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>

                <li class="nav-item px-2 font-weight-bold mt-1">
                    <NavLink to="/about" className="nav-link ">About</NavLink>
                </li>

                <li class="nav-item px-2 font-weight-bold mt-1">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>


                <li class="nav-item px-2 font-weight-bold ">
                    <NavLink to="/login" className="nav-link">
                        <button type="button" class="btn btn-lg pl-3 btn-primary mt-2">Login</button>
                    </NavLink>
                </li>

                <li class="nav-item px-2 font-weight-bold ">
                    <NavLink to="/signup" className="nav-link">
                        <button type="button" class="btn btn-lg pl-3 btn-success mt-2">SignUp</button>
                    </NavLink>
                </li>




                </>
               )            
        }
    }
    return (
        <>
            <div style={{ height: "2rem;" }} className='container f'>
                <nav class="navbar navbar-expand-lg bg-white">
                    <div class="container-fluid">
                        <NavLink to="/" className="navbar-brand">
                            <img src={logo} className="logo" alt="Bootstrap" width="130" height="50" />
                        </NavLink>

                        <button class="navbar-toggler toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                           
                             <ul className=" navbar-nav ms-auto px-5  mb-lg-0">
                               

                             <RenderMenu/>
                            </ul> 

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar