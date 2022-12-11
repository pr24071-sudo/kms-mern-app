import React, { useState } from 'react'
import zerotwo from "../images/07.svg"
import { useNavigate } from 'react-router-dom';
// import { Formik, useFormik } from 'formik'
// import { Signupschema } from '../Form-Validation/Schema'




const Signup = () => {
	const navigate = useNavigate()

	const [user, setUser] = useState({
		username: "",
		email: "",
		mobile: "",
		password: "",
		cpassword: ""
	})

	let name, value
	const handleInput = (e) => {
		name = e.target.name
		value = e.target.value
		setUser({ ...user, [name]: value })
	}


	const PostData = async (e) => {
		
		e.preventDefault()
		const { username, email, mobile, password, cpassword } = user
		
		const res = await fetch("/register", {
			
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},

			body: JSON.stringify({
				username, email, mobile, password, cpassword
			})
		})

		const data = await res.json()
		

		if (data === 422 || !data) {
			alert("not registered")
		} else {
			alert("Sucesssfuly")
			navigate('/login')
		}
	}

	return (
		<div>
			<div class=" container position-relative z-index-9">
				<div class="row g-4 g-sm-5 justify-content-between">
					<div class=" hero-rah mb-5 col-12 col-lg-6 d-md-flex align-items-center justify-content-center  bg-opacity-10 vh-lg-100">
						<div class="p-3 p-lg-5">
							<div class="text-center">
								<h2 class="fw-bold">Welcome to our largest community</h2>
								<p class="mb-0 h6 fw-light">Let's learn something new today!</p>
							</div>
							<img src={zerotwo} class="mt-5" alt="" />
						</div>
					</div>
					<div class="col-lg-6 position-relative">
						<div class=" jk mt-5 bg-primary bg-opacity-10 rounded-3 p-4 p-sm-5">
							<h2 class="mb-3">Register Here</h2>
							<form method='POST' class="row g-4 g-sm-3 mt-2 mb-0">
								<div class="col-12">
									<label class="form-label">Name *</label>

									<input type="text"
										class="form-control"
										aria-label="First name"
										name='username'
										value={user.username}
										onChange={handleInput}

									/>
									{/* {errors.username && touched.username ? (<span class="badge badge-danger">{errors.username}</span>) : null} */}


								</div>

								<div class="col-12">
									<label class="form-label">Email *</label>

									<input type="email"
										class="form-control"
										name='email'
										value={user.email}
										onChange={handleInput}

									/>
									{/* {errors.email && touched.email ? (<span class="badge badge-danger">{errors.email}</span>) : null} */}

								</div>

								<div class="col-12">
									<label class="form-label">Mobile number *</label>

									<input type="text"
										class="form-control"
										aria-label="Mobile number"
										name='mobile'
										value={user.mobile}
										onChange={handleInput}

									/>
									{/* {errors.mobile && touched.mobile ? (<span class="badge badge-danger">{errors.mobile}</span>) : null} */}

								</div>

								<div class="col-12">
									<label class="form-label">Password *</label>

									<input type="password"
										class="form-control"
										aria-label="password"
										name='password'
										value={user.password}
										onChange={handleInput}

									/>
									{/* {errors.password && touched.password ? (<span class="badge badge-danger">{errors.password}</span>) : null} */}

								</div>
								<div class="col-12">
									<label class="form-label">Confirm Password *</label>

									<input type="password"
										class="form-control"
										aria-label="password"
										name='cpassword'
										value={user.cpassword}
										onChange={handleInput}

									/>
									{/* {errors.cpassword && touched.cpassword ? (<span class="badge badge-danger">{errors.cpassword}</span>) : null} */}

								</div>

								<div class="col-12 d-grid">
									<button onClick={PostData} type="submit" class="btn btn-lg btn-primary mb-0">Register</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Signup