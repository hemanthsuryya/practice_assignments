// Extract lowercase from text
const txt = 'Test@t3XT'
const extractLowercase = txt.match(/[a-z]/g).join('');
console.log(extractLowercase);