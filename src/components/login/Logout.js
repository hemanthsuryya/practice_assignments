function Logout(){
    localStorage.removeItem("emailId");
    window.location.href = "/";
}

export default Logout;