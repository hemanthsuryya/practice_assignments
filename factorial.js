const factorial_value = (n) => {
    if(n==1){
        return 1;
    }
    else{
        return(n* factorial_value(n-1));
    }
}

const n = 5; // Factorial n value
const value = factorial_value(process.argv[2] ? process.argv[2]: n);
console.log(value);
