import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login () {
    const nav = useNavigate();
    // const [emailId, setEmailId] = useState("");
    // const [password, setPassword] = useState("");
    const [creds, setCreds] = useState({
        emailId:"",
        password:""
    })
    useEffect(()=>{
        if(localStorage.getItem('emailId')){
            nav("/");
        }
    });
    const submitOperation = async (e) => {
        if(e){
            e.preventDefault();
            let data = JSON.parse(localStorage.getItem("UserData"));
            if(data){
                if(creds.emailId in data){
                    if(data[creds.emailId].password == creds.password){
                        localStorage.setItem("emailId", creds.emailId);
                        nav("/");
                    }
                    else{
                        console.log('Invalid creds');
                    }
                }
                else{
                    nav('/register');
                }
            }
            else{
                nav('/register');
            }
            
        }
        
    };
    
    return ( <div className='base-container' >
        <div>
            <h2>Login (react)</h2>
            <form onSubmit={submitOperation}>
                Email ID
                <input type="email" className="userEmailId" value={creds.emailId} onChange={(e)=>setCreds({...creds, emailId:e.target.value})} placeholder="joe@mail.com" /><br/> 
                Password
                
                <input type="password" className="userPassword" value={creds.password} onChange={(e)=>setCreds({...creds, password:e.target.value})}  /><br/> 
                <input type="submit" value="Login"/> 
            </form>
            <a href="/register">New user</a>
        </div>
    </div>
    );
}

export default Login