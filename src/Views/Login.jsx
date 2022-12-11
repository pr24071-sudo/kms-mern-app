import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import zerotwo from "../images/02.svg"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../App';

const Login = () => {
    
    const {state,dispatch} = useContext(userContext)


    const navigate = useNavigate()
    const [detail, setDetail] = useState({	
		email: "",	
		password: "",
	})

    let name, value
	const handleInput = (e) => {
		name = e.target.name
		value = e.target.value
		setDetail({ ...detail, [name]: value })
	}

    const PostData = async (e) => {
		
		e.preventDefault()
		const {  email, password } = detail
		
		const res = await fetch("/login", {
			
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},

			body: JSON.stringify({
				 email, password
			})
		})

		const data = await res.json()
        console.log('data', data)

		if (res.status === 400 || !data) {
			alert("not registered")
            navigate('/')
		} else {
            dispatch({type:"USER",payload:true})
			alert("Sucesssfuly")
			navigate('/dashboard')
		}
	}

    

 
    // }
    return (
        <div>
            <main>
                <section class="p-0 d-flex align-items-center position-relative overflow-hidden mb-5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class=" hero-rah col-12 col-lg-6 d-md-flex align-items-center justify-content-center  bg-opacity-10 vh-lg-100">
                                <div class="p-3 p-lg-5">

                                    <div class="text-center">
                                        <h2 class="fw-bold">Welcome to our largest community</h2>
                                        <p class="mb-0 h6 fw-light">Let's learn something new today!</p>
                                    </div>
                                    <img src={zerotwo} class="mt-5" alt="" />
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 m-auto">
                                <div class="row my-5">
                                    <div class="col-sm-10 col-xl-8 m-auto">
                                        {/* <img src={logo} className="mb-0 fs-1" height="150" width="150" /> */}
                                        <h1 class="fs-2">Login into Eduport!</h1>
                                        <p class="lead mb-4">Nice to see you! Please log in with your account.</p>
                                        <form method='POST'>
                                            <div class="mb-4">
                                                <label for="exampleInputEmail1" class="form-label">Email address *</label>
                                                <div class="input-group input-group-lg">
                                                    <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-envelope-fill"></i></span>
                                                    
                                                    <input type="email" 
                                                    class="form-control border-0 bg-light rounded-end ps-1" 
                                                    placeholder="E-mail" id="exampleInputEmail1" 
                                                    name="email"
                                                    value={detail.email}
                                                    onChange={handleInput}
                                                    
                                                    />

                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <label for="inputPassword5" class="form-label">Password *</label>
                                                <div class="input-group input-group-lg">
                                                    <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-lock-fill"></i></span>
                                                    
                                                    <input type="password" 
                                                    class="form-control border-0 bg-light rounded-end ps-1" 
                                                    placeholder="password" 
                                                    id="inputPassword5" 
                                                    name="password"
                                                    value={detail.password}
                                                    onChange={handleInput}
                                                    />

                                                </div>
                                                <div id="passwordHelpBlock" class="form-text">
                                                    Your password must be 8 characters at least
                                                </div>
                                            </div>
                                            <div class="mb-4 d-flex justify-content-between mb-4">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                                </div>
                                                <div class="text-primary-hover">
                                                    <a href="forgot-password.html" class="text-secondary">
                                                        <u>Forgot password?</u>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="align-items-center mt-0">
                                                <div class="d-grid">
                                                    <button onClick={PostData} class="btn btn-primary mb-0" type="button">Login</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="mt-4 text-center">
                                            <span>Don't have an account? <NavLink style={{ Textdecoration: "None" }} to="/signup">Signup</NavLink></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login