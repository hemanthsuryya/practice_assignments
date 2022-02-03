// Check if value is phone number of 10 digits length
const phoneNo   = '9980808080'; //Valid input
const phoneNo2  = '90909090909'; //Invalid input
const isPhoneNoValid = (text) => {
    return (/^[1-9][0-9]{9}$/).test(text)
} 
console.log(isPhoneNoValid(phoneNo));
console.log(isPhoneNoValid(phoneNo2));