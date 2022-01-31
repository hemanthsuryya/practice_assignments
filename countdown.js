const countdown = (n) => {
    if(n>=1){
        setTimeout(() => {
            console.log(n);
            countdown(n-1);
        }, 1000);
    }
    else{
        console.log('Count down over');
    }
}

const n = 5; // n seconds timer value
countdown(process.argv[2] ? process.argv[2]: n);