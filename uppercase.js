// Extract upper-case from text
const txt = 'Test@t3XT'
const extractUppercase = txt.match(/[A-Z]/g).join('');
console.log(extractUppercase);