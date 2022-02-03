const changeCol = () => {
    // Get elements by tag name
    document.getElementsByTagName('P')[0].style.backgroundColor = "red";
}

const a = ()=> {
    // Get elements by class name
    document.getElementsByClassName("abSpace")[0].innerHTML = "A";
    b();
}
const b = ()=> {
    // Get elements by class name
    document.getElementsByClassName("abSpace")[0].innerHTML = "B";
} 

// Countdown timer
const countdown = (n) => {
    if(n>=1){
        setTimeout(() => {
            document.getElementById("timer").innerHTML = n;
            console.log(n);
            countdown(n-1);
        }, 1000);
    }
    else{
        document.getElementById("timer").innerHTML = 'Count down over';
    }
}

// Update text onclick of button or onchange of input
const updateText = () => {
    let txt = document.getElementById("ip").value;
    document.getElementById("op").value = txt
    rev(txt);
}

// Reverse sentence words
// str = "apple banana orange"
const rev = (str) => {
    let strList = str.split(' ');
    let modifiedList = []
    while(strList.length != 0)
    {
        modifiedList.push(strList.pop())
    }
    let modifiedStr = modifiedList.join(" ")
    document.getElementById("op2").value = modifiedStr;

}