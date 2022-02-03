// Username should not have any special symbols
const username = 'hemanth2k'
const username2 = 'hemanth@2k'
const isValid = (text)  => {
    return (/^[A-z0-9]+$/).test(text);
}
console.log(isValid(username))
console.log(isValid(username2))