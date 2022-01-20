import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Logout from  './Logout';
let username, emailId, phoneno, age, address;



function Dashboard() {
    function logout(){
        localStorage.removeItem("emailId");
        window.location.href = "/";
    }
    const nav = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('emailId')){
            nav('/login');
        }
    });
    return(
        <div>
        <p> Logged in</p>
        {/* <a href='/Logout'> Logout</a> */}
        <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Dashboard