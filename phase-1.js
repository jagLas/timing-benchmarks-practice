// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(addNums(5))

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += addNums(i);
  }

  return sum;
}

console.log(addManyNums(3));



module.exports = [addNums, addManyNums];