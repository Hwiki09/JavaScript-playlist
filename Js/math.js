var x = Math.ceil(4.89);
console.log(x);

var y = Math.floor(4.89);
console.log(y);

var z = Math.round(4.89);
console.log(z + "k");

var o = Math.round(4.49);
console.log(o + "k");

var t = Math.min(100, 50, 1880, -120.89, -90, 555);
console.log(Math.ceil(Math.round(t) + 10.3));

var random = Math.random();
console.log(Math.floor(random * 10) + 1) // Range [1 - 10]