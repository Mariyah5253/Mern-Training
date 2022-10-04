import {printCode} from './demo2';
let firstName: string;
firstName = 'mariya';
let num : number=123;
let bool : boolean=true;
//console.log(firstName,num,bool);


function greet(value:string){
    //console.log("Function is Running");
    return "GoodMoring  "+value;
}

//console.log(greet("M.Hussain"))



function capital_string(value:string){
    
    return value.toUpperCase();
}
//console.log(capital_string("Converted String : Welcome"));

function add(num1:number,num2:number)
{
    return num1+num2;
}
//invoking function using inappropriate parameter
//console.log(add(5,7));
function simple_interest(p:number,t:number,i:number =10)
{
    return ((p*t*i)/100);
}
//console.log("Invoking using All parameter");
//console.log("Simple Interest is : "+simple_interest(5400,2,20));

//console.log("Invoking using only p and t as parameter");
//console.log("Simple Interest is : "+simple_interest(5400,2));

function range(start:number,stop:number,increament:number =1)
{
let ans:string ="";
let num:number=start;
while(num<=stop)
{
    ans=ans+num.toString()+" ";
    num+=increament;
    
}
   return ans;

}
//console.log(range(1,5));

//console.log(range(1,10,2));


function summing(...rest:number[]){

    let sum: number=0;
    for(let i=0;i<rest.length;i++)
    {
        sum+=rest[i];
    }
    return(sum);
}
//console.log(summing());
//console.log(summing(1, 2, 3, 4, 5));
//console.log(summing(10, 20, 33));

function message({title, name , msg}:{title:string, name:string,msg:string})
{
    let ans:string="";
    ans=title+" "+name+"\n";
    ans+=msg;
    return ans;
}
//console.log(message({title: 'Miss', msg: 'Welcome home.', name: 'Suzy'}));

function printStatusCode(code : string|number):void{
  console.log(`Status Code is ${code}`);

}
//printStatusCode('404');
//printStatusCode(404);


//printCode('404')

class Point_2D{
    x_cord:number;
    y_cord:number;
    constructor(x:number,y:number)
    {
        this.x_cord=x;
        this.y_cord=y;
    }
}

var point1=new Point_2D(10,20);
var point2=new Point_2D(40,40);
//console.log("Slope Of the line will be "+(point2.y_cord-point1.y_cord)/(point2.x_cord-point1.x_cord))


class Point_3D{
    x_cord:number;
    y_cord:number;
    z_cord:number;
    constructor(x:number,y:number,z:number)
    {
        this.x_cord=x;
        this.y_cord=y;
        this.z_cord=z;
    }
    display():void{
        console.log("X coordinate = "+this.x_cord);
        console.log("Y coordinate = "+this.y_cord);
        console.log("Z coordinate = "+this.z_cord);
    }
}
var point= new Point_3D(10,20,30);
console.log(point.display());



