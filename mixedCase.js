// Extract only alphabet and ignore symbols

const txt = 'Test@t3XT'
const alphabetOnly = txt.match(/[a-z]/ig).join('');
console.log(alphabetOnly);