const a = {
    name:'ram',
    age : 65,
    gender : 'male'

}
const b = JSON.stringify(a);
console.log(b);
console.log(JSON.parse(`{"name":"ram","age":65,"gender":"male"}`));
 

const exa= `{
      "nation":"india",
      "capital":"delhi",
      "states":"28"
}`
console.log(JSON.parse(exa));

const a5 = ['a','b,',4,'23'];
console.log(JSON.stringify(a5));

const a8= `[
    "76","india","industries and factories"]`
console.log(JSON.parse(a8));


function army()
{
    console.log("first");
}
function military()
{
    console.log("second");
    army();
   

}
military();
// army();



