import React, { useState } from 'react'
import zerotwo from "../images/07.svg"
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { Formik, useFormik } from 'formik'
// import { UpdateUserschema } from '../Form-Validation/Schema'




const UpdateUser = () => {

	
	const [userData,setuserData] = useState([])
	





  
	const callAboutPage = async ()=>{
		try {
  
			const res = await fetch("/dash",{
				method :"GET",
				headers : {
					Accept : "application/json",
					"Content-Type" : "application/json"
				},
				credentials : "include"
			})
  
			const data = await res.json()
			setuserData(data)
			const id = data._id
			console.log(id);			
			
			
  
  
			if(!res.status === 200){
				const error = new Error(res.error)
				throw error
			}
			
		} catch (error) {
			console.log(error);
			
		}
	}

	const getid = ()=>{
		console.log(userData._id);
	}
  
	useEffect(()=>{
		callAboutPage()
	},[])
	

	return (
		<div>
			<div class=" container update position-relative z-index-9">
				
					
					<div class="col-lg-8 position-relative">
						<div class=" jk mt-5 bg-primary bg-opacity-10 rounded-3 p-4 p-sm-5">
							<h2 class="mb-3">Update your Details Here</h2>
							<form method='POST' class="row g-4 g-sm-3 mt-2 mb-0">
								<div class="col-12">
									<label class="form-label">Name *</label>

									<input type="text"
										class="form-control"
										aria-label="First name"
										name='username'
										value={userData.username}
										// onChange={handleInput}

									/>
									{/* {errors.username && touched.username ? (<span class="badge badge-danger">{errors.username}</span>) : null} */}


								</div>

								<div class="col-12">
									<label class="form-label">Email *</label>

									<input type="email"
										class="form-control"
										name='email'
										value={userData.email}
										// onChange={handleInput}

									/>
									{/* {errors.email && touched.email ? (<span class="badge badge-danger">{errors.email}</span>) : null} */}

								</div>

								<div class="col-12">
									<label class="form-label">Mobile number *</label>

									<input type="text"
										class="form-control"
										aria-label="Mobile number"
										name='mobile'
										value={userData.mobile}
										// onChange={handleInput}

									/>
									{/* {errors.mobile && touched.mobile ? (<span class="badge badge-danger">{errors.mobile}</span>) : null} */}

								</div>

								{/* onClick={PostData}  */}

								<div class="col-12 d-grid">
									<button type="submit" class="btn btn-lg btn-primary mb-0">Update</button>
								</div>
							</form>
							<button onClick={getid} className='btn btn-danger'>get id</button>
						</div>
					</div>
				</div>
			
		</div>

     

	)
}

export default UpdateUser