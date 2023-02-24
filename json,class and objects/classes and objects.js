class student{
    constructor(name,department)
    {
        this.name=name;
        this.department=department;
        console.log("the name is narasimhan"); /* we can print inside the constructors*/
    }
    show(){
        console.log(`${this.name} is studying in ${this.department}`);
    }
}
class sections extends student{
    constructor(name,department,_amount)
    {
        super(name,department);
        this._amount=_amount;
    }
    show1()
    {
        console.log(`The count of section A is" ${this._amount}`);
    }
}
 
const p5=new student("Narasimhan","EEE");
p5.show();

const jk=new sections("raj","ece","98");
jk.show();
jk.show1();

class car{

    company;
    price;
    color;
    #blueprint;
    constructor(company,price,color,blueprint){
        this.company=company;
        this.price=price;
        this.color=color;
        this.blueprint=blueprint;
    }
    display()
    {
        console.log(`the cost of ${this.company} ${this.color} is ${this.price}. blueprint is ${this.#blueprint} `);
    }
    blueprint()
    {

    }

}
const mm=new car("tata",'10.8L','red','print.pdf');
mm.display();
console.log(mm.company);
// console.log(mm.#blueprint);





