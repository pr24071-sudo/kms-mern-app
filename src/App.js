import './App.css';
import Header from './Views/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Contact from './Views/Contact';
import About from './Views/About';
import Footer from './Views/Footer';
import Login from './Views/Login';
import Signup from './components/Signup';
import UserDashboard from './Views/UserDashboard';
import AllData from './Views/AllData';
import AdminHome from './Admin/AdminHome';
import AdminLogin from './Admin/AdminLogin';
import Error from './Views/Error';
import Blog from './components/Blog';
import Logout from './components/Logout';
import { createContext,useReducer, useState } from 'react';
import {reducer,initialState} from "../src/reducer/UseReducer"
import AboutUser from './components/AboutUser';
import UpdateUser from './components/UpdateUser';

export const userContext = createContext()

function App() {
  const [userLoginDetails, setUserLoginDetails] = useState(null)
  const [state,dispatch]  = useReducer(reducer,initialState)
  return (
    <>

    <userContext.Provider value={{state,dispatch,userLoginDetails, setUserLoginDetails}}>

    

      <BrowserRouter>
        <Header />
        <Routes>         
          <Route path="/(login)" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<UserDashboard />} />
          <Route path='/alldata' element={<AllData />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path="*" element={<Error/>} />
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/AboutUser' element={<AboutUser />} />
          <Route path='/updateuser' element={<UpdateUser />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
