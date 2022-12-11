import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
    

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
            <div className='container mt-5'>
                <div class="jumbotron border p-4">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">{userData.username}</a>
                    </p>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Blog