const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here

  function addNums10(increment) {
    const nums = [];
    for (let i = increment; i <= 10 * increment; i += increment) {
      console.time(`addNums(${i})`);
      nums.push(addNums(i));
      console.timeEnd(`addNums(${i})`);
    }
  
    return nums;
  }

  const start = Date.now();
  addNums10(increment);
  const end = Date.now();

  console.log(`${end - start} ms`);

}


function addManyNums10Timing(increment) {

  function addManyNums10(increment) {

    const nums = [];
    for (let i = increment; i <= 10 * increment; i += increment) {
      console.time(`addManyNums(${i})`)
      nums.push(addManyNums(i));
      console.timeEnd(`addManyNums(${i})`)
    }
  
    return nums;
  
  }

  const start = Date.now();
  addManyNums10(increment)
  const end = Date.now();

  console.log(`${end - start} ms`);
 
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);