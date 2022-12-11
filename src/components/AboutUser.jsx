import React, { useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import zerotwo from "../images/08.svg"

const AboutUser = () => {

  
  const navigate = useNavigate()
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
          


          if(!res.status === 200){
              const error = new Error(res.error)
              throw error
          }
          
      } catch (error) {
          console.log(error);
          navigate("/login")
      }
  }

  useEffect(()=>{
      callAboutPage()
  },[])

    return (
        <>
             <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src={zerotwo} height="500" width="500" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Details of  [{userData.username}]</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>UserName:</strong> <span>{userData.username}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{userData.email}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{userData.mobile}</span></li>
                  <li> </li>
                
                </ul>
              </div>
             
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
            <NavLink to="/updateuser"><button  className='btn btn-success'>Update user details</button></NavLink>
          </div>
        </div>

      </div>
    </section>
    

        </>
    )
}

export default AboutUser