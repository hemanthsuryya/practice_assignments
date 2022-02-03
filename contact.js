function toggleMode(n){
    sessionStorage.setItem("mode", n);
    if(n==1){
        let container = document.getElementsByTagName("body")[0];
        container.style.backgroundColor = "#d5e7f1";
        let form = document.getElementsByClassName("contactForm")[0];
        form.style.backgroundColor = "lightskyblue";
        let mode = document.getElementsByClassName("mode")[0];
        mode.style.backgroundColor = "lightskyblue";
    }
    else{
        let container = document.getElementsByTagName("body")[0];
        container.style.backgroundColor = "#121212";
        let form = document.getElementsByClassName("contactForm")[0];
        form.style.backgroundColor = "#a09e9e";
        let mode = document.getElementsByClassName("mode")[0];
        mode.style.backgroundColor = "#a09e9e";
        
    }
      
}

const submitAction = () => {
    let userData = {
        "name": document.getElementById("name").value,
        "emailID": document.getElementById("email").value,
        "dob": document.getElementById("dob").value,
        "workMode": document.querySelector('input[name="workMode"]:checked').value,
        "phone": document.getElementById("phone").value,
        "description": document.getElementById("description").value 
    }
    // document.write(userData.name === userData.name.toLowerCase() && userData.description === userData.description.toLowerCase())
    if( userData.name === userData.name.toLowerCase() && userData.description === userData.description.toLowerCase()){
        sessionStorage.setItem("userdata", JSON.stringify(userData));
        return true;    
    }
    else{
        alert("Use of only lowercase is allowed !!")
        return false;
    }
}

const checkmode = ()=> {
    let i = parseInt(sessionStorage.getItem("mode"))
    toggleMode(i);
}

const LoadingContent = () => {
    checkmode();
    let userData = sessionStorage.getItem("userdata");
    let person = JSON.parse(userData);
    // console.log(userData);
    var td = document.getElementsByTagName("td");
    td[0].innerHTML = person.name;
    td[1].innerHTML = person.emailID;
    td[2].innerHTML = person.dob;
    td[3].innerHTML = person.workMode;
    td[4].innerHTML = person.phone;
    td[5].innerHTML = person.description;
    // document.getElementById("tabName").innerHTML = person.name;
    
}