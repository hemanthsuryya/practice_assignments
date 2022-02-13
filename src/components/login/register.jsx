import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const nav = useNavigate();
    const [userDetails, setUserDetails] = useState({
        emailId:"", username:"", phoneno:"", age:"", address:"", password:""

    })
    useEffect(()=> {
        if(localStorage.getItem('emailId')){
            nav('/');
        }
    });
    const Submitregister = (e) => {
        e.preventDefault();
        let data = localStorage.getItem('data');
        if(data){
            data[userDetails.emailId] = data;
        }
        else{
            data ={}
            data[userDetails.emailId] = userDetails;
        }

        localStorage.setItem('UserData', JSON.stringify(data));
        nav('/login');
    };
    return (<div className='base-container'>
        <div id="form-container">
            <div id="register-form-div">
                <h2>Register yourself (react)</h2>
                <form id="registerForm" onSubmit={Submitregister} >
                    Full Name
                    <input type="text" className="name" placeholder="Joe" value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails, username:e.target.value})} /><br />
                    Email ID
                    <input type="email" className="emailId" placeholder="joe@mail.com" value={userDetails.emailId} onChange={(e)=>setUserDetails({...userDetails, emailId:e.target.value})} /><br/>
                    Phone number 
                    <input type="number" className="phNumber" placeholder="XXX-XXX-XXXX" value={userDetails.phoneno} onChange={(e)=>setUserDetails({...userDetails, phoneno:e.target.value})} /> <br />
                    Age
                    <input type="number" className="age" placeholder="age" value={userDetails.age} onChange={(e)=>setUserDetails({...userDetails, age:e.target.value})} /> <br/>
                    Address
                    <input type="text" className="address" placeholder="address . . ." value={userDetails.address} onChange={(e)=>setUserDetails({...userDetails, address:e.target.value})} /> <br />
                    Password
                    <input type="password" className="password" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails, password:e.target.value})} /><br /> 
                    <input type="submit" value="Register" />
                </form>
                <a href="/login">Use login</a>
            </div>
        </div>
    </div>
    );
}

export default Register