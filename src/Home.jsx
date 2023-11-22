import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Sidebar from './sidebar'
export default function Home() {
  return (
    <>
    <Navbar/>
     <div className="welcomeUser!">

     </div>
     {/* <Sidebar/> */}
{/* main content  */}

<div className="main flex w-100 justify-center max-w-screen-md bg-slate-400">
<h2>Details</h2>
<label htmlFor="">Username</label>
<input type="username" />
<label htmlFor="">Type</label>
<input type="Type" /> 
<label htmlFor="">Verid</label>
<input type="verid" />
<Link to="/central">
<h3 className='rounded-xl p-2 bg-white text-[#bb2649]'>Submit</h3>
</Link>
</div>

     {/* footer  */}
    <footer>
        <p> 2023 Made By Ramkrishna More</p>
    </footer>

    </>
  )
}
