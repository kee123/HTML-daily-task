console.log("narasimhan");
let a = "abc";
let a5= "0";
console.log(Number(a));
const qwe=`The usage of the line breaker
is`;
console.log(qwe);
const len='the e';
console.log(len.length); 
console.log(len.length-1);
console.log(len[0]);
console.log(len[len.length-1]);
let include="consonants";
include = "hai";
include = "toys";
if(include.includes('oy'))
{
    console.log("oy is here");
}
else
{
    console.log("oy is not here");
}
const a78="entertainment";
if(a78.startsWith('en'))
{
    console.log("en is here");

}
else
{
    console.log("there is no en");
}
if(a78.endsWith('ntertainment'))
{
    console.log("t is here");

}
else
{
    console.log("there is no t");
}
let tag = "Our motherland india";
console.log(tag.indexOf("o"));
let line = "Ram is nice person. Ram is educated";
let first = line.indexOf("Ram");
let second =line.indexOf("Ram",first+1);
console.log(second);
let arm = "Ramesh";
console.log(arm.slice(2,5));
console.log(arm.slice(4));
console.log(arm.toUpperCase());
let texts = "Goat";
console.log(texts);
texts=texts.replace('Go','bo');
console.log(texts);
let str = "We can do string manipulation";
console.log(str);
str=str.replaceAll('can','should');
console.log(str);

let arr=['a',2345,"*",['a','z',"234"]];
let zee = arr[3];
console.log(zee);
console.log(arr[3][0]);
let aim = ['doctor','director','civil servant'];
console.log(aim);
aim.push('army');
console.log(aim);
aim.unshift('police');
console.log(aim);
aim.pop();
console.log(aim);
aim.shift();
console.log(aim);
let car = ['Tata','Mahindra','suzuki'];
car.splice(1,2);
console.log(car);
car.push('kia','chevrolet');
console.log(car);
car.unshift("swift",'tata nano');
console.log(car);
car.splice(1,2,'jcb');
console.log(car);
car.splice(2,2);
console.log(car);
let vehicles = ['bike','car','bus','train','metro'];
vehicles.splice(3,0,'wheels');
console.log(vehicles);
vehicles.splice(2,1);
console.log(vehicles);
vehicles.splice(3,2,'bridge');
console.log(vehicles);
const students = ['name','age','gender'];
for(let boy of students )
{
    console.log(boy);
}
function double(x){
    return x*2;
}
const num=[5,6,9];
const double1= num.map(double);
console.log(double1);
let trans = ['bike','car','train','bus','truck'];
trans.splice(4,0,'hai');
console.log(trans);
trans.splice(2,3);
console.log(trans);
trans.splice(0,1,'string');
console.log(trans);
const data = 'the name is kumar';
const split = data.split(" ");
console.log(split);
console.log(split[0]);
const my = students.toString();
console.log(my);
const a10 = [45,'34','dog',23];
const z10 = a10.join('.');
console.log(z10);
console.log("hai");
/*
18.2.23*/

let arrays = [ ];
arrays.push('hi',5,'siva');
console.log(arrays.length);
console.log(Object.keys(arrays));
/* the object .keys will helps to represent the key(or) index  values of the arrays) */

let arr1 =['one','two','three','four','five','six',7];
let arr2 = ['5',6,7];
let arr3 = arr2.concat(arr1);
console.log(arr3);
let arr4 = arr3.concat(arr1,arr2);
console.log(arr4);
console.log(arr1[arr1.length-1]);

let aaa = ['a','b','c','d','e','f'];
aaa.copyWithin(2,3);
console.log(aaa);
aaa.copyWithin(2,3,5);
console.log(aaa);
let a9 = ['a','b','c','d','e','f'];
a9.copyWithin(0,2);
console.log(a9);
let a99 = ['a','b','c','d','e','f'];
a99.copyWithin(0,2,3);
console.log(a99);
let a999 = ['a','b','c','d','e','f'];
a999.copyWithin(0,1,5);
console.log(a999);

let age = [21,45,12,76,23,10];
let result = age.filter(separate);
function separate(age){
    if(age>=18)
    {
        return age;
    }
}
console.log(result);

