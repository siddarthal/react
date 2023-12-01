console.log("sid reddy");
const arr = [1, 2, 5, 6, 6, 8];
arr.push(9);
console.log(arr);
arr.forEach((key) => console.log(key));
const a = arr.map((key) => key * key);
console.log(a);
const [x, b, ...c] = a;
console.log(x, b);
console.log(x, b, c);
const obj = {
  name: "sidd",
  size: 5,
};
console.table(obj);
const mobj = {
  name: {
    hum: "sidd",
    age: 26,
  },
  number: 874484894,
  pincodes: [333, 555, 5555],
};
console.table(mobj);
console.log(mobj.pincodes[0]);
console.log(mobj["name"]["hum"]);

obj.address = "helsinki";
console.table(obj);
const sum = (p) => p * p;
console.log(sum(20));
const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",

  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};
const name = "sod";
arto.greet();

const referenceToGreet = arto.greet.bind(arto);
referenceToGreet();
// setInterval(arto.greet.bind(arto), 1000);
