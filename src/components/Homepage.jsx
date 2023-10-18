import React from 'react'
import './Homepage.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/law.jpeg'



function Homepage() {
    return (
       <>
       <Navbar/>
        <form style={{textAlign: 'center', minWidth:'50%'}}>
           <div class="flexCenter flexColumn " style={{ gap: 20 }}>

<div style={{borderRadius:10,background: 'white',marginBottom:20}}>
    <img src={Logo} style={{padding:5, height:200}}/>
</div>

           <h1>J-CONNECT</h1>
         <p>
           J-Connect is an application to help connect urban dwellers to probono lawyers to solve the challenges they face in as far as justice access is concerned
           </p>

           <div class="flexCenter social" style={{ gap: 20 }}>
               <div>
         <Link to='/Login'>Log In</Link>
         </div>
         
         <div>
         <Link to='/Register'>Register</Link>
         </div>  
           </div>

       
       </div>
          
           {/* <div className='back-image'>
               <img src={img}/>
           </div> */}
       </form>
       </>
    )
}

export default Homepage
