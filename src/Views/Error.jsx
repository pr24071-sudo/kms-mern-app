import React from 'react'
import error from "../images/error404-01.svg"
import { NavLink } from 'react-router-dom'


const Error = () => {
  return (
    <div>
        <section class="pt-5">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				
				<img src={error} class="h-200px h-md-400px mb-4" alt=""/>
				
				<h1 class="display-1 text-danger mb-0">404</h1>
				 
				<h2>Oh no, something went wrong!</h2>
				
				<p class="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
				<NavLink className="btn btn-primary mb-0" to="/">Take me to HomePage</NavLink>

			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Error