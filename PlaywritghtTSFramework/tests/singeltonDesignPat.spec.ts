class singelton{


private logArray:number[] = [];
private static instance:singelton;
private constructor(){
}
static getInstance():singelton{
    if(!singelton.instance){
        singelton.instance= new singelton();
    }
     return singelton.instance;
}
public logVal(val:number):number{
    this.logArray.push(val) 
    console.log(this.logArray.length)
    return this.logArray.length;
}
}


const obj1 = singelton.getInstance();
const obj2 = singelton.getInstance();
const obj3 = singelton.getInstance();

obj1.logVal(3);
obj2.logVal(5);
obj3.logVal(7);
console.log(obj1.logVal(1));