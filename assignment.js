let now = new Date();

// 1. Function to return name of the month if pass date string
const month = (dateStr) => {
    const calender = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December']; 
    return calender[dateStr.getMonth()];
}
console.log('1. Month: '+ month(now));

// 2. Display date in YYYY-MM-DD format
const dateFormatModified = (date) => {
    let DD = String(now.getDate()).padStart(2,'0');
    let MM = String(now.getMonth()+1).padStart(2,'0');
    let YYYY = now.getFullYear();
    return(`${YYYY}-${MM}-${DD}`);
}
console.log('2. YYYY-MM-DD date format:' +dateFormatModified(now));

// 3. Display time in 24 hr format
const hrs24 = (date) => {
    let minutes = date.getMinutes();
    let hour = date.getHours();
    return(`${hour}:${minutes}`)
}
console.log('3. Time in 24 hrs format: ' + hrs24(now));

// 4. Write a function to get an ID of length is 10 digits
const userID = () => {
    return(Math.ceil(Math.random()*10000000000))
}
console.log('4. User ID: ' + userID())

// 5. Statement for random number between 1-10
const randomWithinTen = () => { 
    return(Math.ceil((Math.random()*100)%10))
}
console.log('5. Random no. between 1-10: ' + randomWithinTen());