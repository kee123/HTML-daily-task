const a = [4, 9, 3, 2];
let index = 2;
console.log(a.at(index));
console.log(`The value at the index ${index} is ${a.at(index)}`);


const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 397, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
const arry = ["hai",'ji','r5','gi'];
const fills=(check)=>arry.length<3;

console.log(arry.filter(fills));


let g = [2,1,1,4,1,4];
let add = g.map(vars=>vars+1);
console.log(add);

// function msgAfterTimeout (msg, who, timeout) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
//     })
// }
// msgAfterTimeout("", "Foo", 1000).then((msg) =>
//     msgAfterTimeout(msg, "Bar", 200)
// ).then((msg) => {
//     console.log(`done after 300ms:${msg}`)
// })


//lexical


// arrow functions.

let a4 = (x,y)=>{
   return x+y;
}
let c = a4(5,8);

console.log(c);


let a5 = ()=>{
    console.log('hi how are you');
}
console.log(a5`this is 
the function`);

// arrow functions 
let _570 = (x,y) => x-y;
let ty = _570(6,9);
console.log(ty);


function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  myBio("hi","hello","bye",'yo','max');




class hia{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    #personal(age)
    {
        console.log(`${age} is the age`);
    }
}
const b = new hia('ravi','34');
console.log(b);
b.personal(45);


var customer = { name: "Matt" };

var product = { name: "Halo 5: Guardians" };

let gift = { timelimit: '4 hours', amount: 50.00 };

let message = `Dear ${customer.name},\n

Thank you for making a recent purchase of '${product.name}' on Amazon.com.

We would love to get your feedback on your experience.

If you respond in the next ${gift.timelimit}, we will give you a gift

certificate of $${gift.amount} dollars!

We look forward to hearing from you!

Best Regards,

Amazon Customer Relations`;

console.log(message);


