import React from 'react'

export default function Sidebar() {
  return (

    <div className="sidebar" >
        
        <ul>
<Link to="/home">    
        <li><img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/000000/home--v1.png" alt="home--v1"/><a>Home</a></li>
</Link>          
            <li onclick="">
                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/000000/create-new.png" alt="create-new"/>
                <a href="#">Create Account</a></li>
          
            <li onclick="">
                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/24/000000/login-rounded-right.png" alt="login-rounded-right"/>
                <a href="#">Login</a></li>
            
            <li>
                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/000000/group-task.png" alt="group-task"/>
                <a href="#">Contact</a></li>
        </ul>
    </div>
    
    )
}



// <div class="sidebar" id="mySidebar">
// <ul>
//     <li >
//         <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/000000/home--v1.png" alt="home--v1"/>
//         <Link to="./Home.html">Home</Link>
//         </li>
//     <li onclick="logout()">
//         <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/24/000000/login-rounded-right.png" alt="login-rounded-right"/>
//         <a href="#">Logout</a></li>
   
// </ul>
// </div>