//calling isValidpassword function and checking password doenot contain username and space and password contains more than 8 characters
function isValidPassword(password, username) {
  return (
    password.length >= 8 &&
    !password.includes(" ") &&
    !password.includes(username)
  );
};
//user enters the password
const password= prompt(`Enter a password:`);
//user enters the username
const username=prompt(`Enter a username:`);
console.log(isValidPassword(password,username));