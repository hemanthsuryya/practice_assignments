import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    function logout(){
        localStorage.removeItem("emailId");
        window.location.href = "/";
    }
    const nav = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState(0);
    const [age, setAge] = useState(0);
    
    const loadEff = useCallback(async () => {
        if(!localStorage.getItem('emailId')){
            nav('/login');
        }
        const obj = JSON.parse(localStorage.getItem('UserData'));
        const userObj = obj[localStorage.getItem('emailId')];
        setName(userObj['username']);
        setEmail(userObj['emailId']);
        setPhoneno(userObj['phoneno']);
        setAge(userObj['age']);
    }, [nav])
    useEffect(() => {
        loadEff();
    }, [loadEff]);

    return(
        <div>
        <p> Logged in</p>
        <table >
            <tr>
                <td>Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Email ID</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Contact no.</td>
                <td>{phoneno}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{age}</td>
            </tr>
        </table>
        <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Dashboard