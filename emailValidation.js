// Check if  email ID is valid
const lgeMailId   = 'surya@lge.com'; // 
const emailID1  = '18_surya@iitdh.ac.in'; //
const emailID2  = 'surya.18@iitdh.ac.in'; //
const emailID3  = '#surya@lge.com';
const isEmailValid = (text) => {
    return (/^[a-z0-9]+[a-z0-9\_\.]*@[a-z0-9\_\.]+/i).test(text)
} 
// Email ID test
console.log((/^[a-z0-9]+[a-z0-9\_\.]*@[a-z0-9\_\.]+/i).test(emailID1));
console.log((/^[a-z0-9]+[a-z0-9\_\.]*@[a-z0-9\_\.]+/i).test(emailID2));
console.log((/^[a-z0-9]+[a-z0-9\_\.]*@[a-z0-9\_\.]+/i).test(emailID3));

// LG mail ID
console.log((/^[a-z0-9]+[a-z0-9\_\.]*(@lge.com){1}/i).test(lgeMailId));