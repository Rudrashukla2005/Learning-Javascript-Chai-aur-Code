const scores = 100;
console.log(scores);

const balance = new Number(1000.290892);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));
console.log(balance.toPrecision(3));

console.log("----------------Maths---------------------");
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.5));
console.log(Math.ceil(5.5));
console.log(Math.floor(5.5));
console.log(Math.min(5.5));
console.log(Math.max(5.5));

console.log("-----------------Random Number function-------------");

console.log(Math.random()*10)+1;

console.log("--------------------Date Functions--------------------");

console.log(Date().toString());
// console.log(Date().toDateString());
// console.log(Date().toISOString());
// console.log(Date().toLocaleDateString());
// console.log(Date().toLocaleString());

// Some other Date Methods.

const DateOne = Date.now();
console.log(Date.now());
// console.log(Date.getTime());
console.log(Math.ceil(Date.now()/1000));

// console.log(Date.getDay());
// console.log(Date.getMonth());


