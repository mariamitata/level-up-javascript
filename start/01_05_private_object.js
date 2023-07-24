// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "MariamiTa",
  [password]: "123456", 
  age: 35
}

console.log(user.username);
console.log(user.password);
