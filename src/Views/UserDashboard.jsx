import React, { useEffect, useState,useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import port1 from "../images/portfolio-details-1.jpg"
import port2 from "../images/portfolio-details-2.jpg"
import port3 from "../images/portfolio-details-3.jpg"
import { userContext } from '../App';


const UserDashboard = () => {
    const [userData, setuserData] = useState([])
    const {setUserLoginDetails} = useContext(userContext)
    const navigate = useNavigate()

    const callAboutPage = async () => {
        try {

            const res = await fetch("/dash", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json()
            console.log(data);
            setuserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        } catch (error) {
            console.log(error);
            navigate("/login")
        }
    }

    useEffect(() => {
        setUserLoginDetails(userData)
    }, [userData])
    

    useEffect(() => {
        callAboutPage()
    }, [])
    return (
        <div>
            <main id="main">

                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Hello {userData.username}</h2>
                            <ol>
                                {/* <li><NavLink><span className='btn btn-danger'>Logout</span></NavLink></li> */}

                            </ol>
                        </div>

                    </div>
                </section>
                <section id="portfolio-details" class="portfolio-details">
                    <div class="container">

                        <div class="row gy-4">

                            <div class="col-lg-8">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={port1} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={port2} alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={port3} alt="Third slide" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Client</strong>: ASU Company</li>
                                        <li><strong>Project date</strong>: 01 March, 2020</li>
                                        <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                        <li><div class="d-grid gap-2 col-12 mx-auto">
                                            <NavLink to="/alldata"> <button class="btn btn-primary" type="button">Get All your Books</button></NavLink>
                                            
                                        </div></li>
                                    <NavLink to="/AboutUser"><button type="button" class="btn btn-warning position-relative">About User</button></NavLink>
                                    </ul>
                                </div>
                                <div class="portfolio-description">
                                    <h2>This is an example </h2>
                                    <p>
                                        Looking for great reads?
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>



            </main>
        </div>
    )
}

export default UserDashboard