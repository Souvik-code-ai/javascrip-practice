/*const api_key="htts://home.openweathermap.org/users/sign_up";
const search_btn=document.getElementById("search");
const city_ip=document.getElementById("city");
const weather_res=document.getElementById("Weather_result");
const error_btn=document.getElementById("error");

search_btn.addEventListener("click",()=>{
    const city_name=city_ip.value;
    if(city_name){
        weather_validation(city_name);
    }
    else{
        const new_node=document.createElement("div")
        new_node.innerText="Please provide city name.";
        new_node.style.color="red";
        search_btn.after(new_node);
    }
});

async function weather_validation(city_name) {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=87404bda33f1050d83cf34556a59e7e6&units=metric`;
    try{
        const reply=await fetch(url);
        console.log(reply);
        if(!reply.ok)
            {
                throw new error("Given city is not listed.");
            }
        const info=await reply.json();
        console.log(info);
        weatherresult(info);
    }
    catch(error){
        showError(error.message);
    }

}
function weatherresult(info)
{
    error_btn.textContent="";
    weather_res.classList.remove("hidden");
    const city=document.getElementById("cityname");
    const temperature=document.getElementById("temperature");
    const weather_con=document.getElementById("weather_condition");
    const humidity_percentage=document.getElementById("humidity_percentage");
    const wind_speed=document.getElementById("wind_speed");
    const weather_icon=document.getElementById("weather_icon");
    const datetime=document.getElementById("date_time")
    city.textContent=`${info.name} ${info.sys.country}`;
    temperature.textContent=`Temperature:${info.main.temp}C`;
    weather_con.textContent=`humidity:${info.weather[0].description}`;
    datetime.textContent=new Date().toLocaleString();
    weather_icon.src=`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    humidity_percentage.textContent=`temperature:${info.main.humidity}%`;
    wind_speed.textContent=`Wind speed :${info.wind.speed}m/s`;

}
function showError(message)
{
    weather_res.classList.add("hidden");
    error_btn.textContent=message;
}*/
//hoisting in javascript
/*var x=7;
var b=5;
//x=7;
//console.log(x);
ab();
function ab()
{
    console.log("helloworld");
}f
//global object and global variable
//console.log(window.x);
this.ab();
window.ab();
console.log(this.b);//it will be executed if the variable is defined by var instead of let
console.log(window.b);//it will be executed if the variable is defined by var instead of let
console.log(b);
//difference btw undefined and not defined
let y;
console.log(y);//undefined
console.log(z);*///z is not defined
//differnce btw let,var and const
/*const a=2;
//a=3;
//console.log(c);
//console.log(b);
const b;
b=7;
console.log(b);
console.log(a);*/
//use of scope in javascript
/*let a=2;
{
    console.log(a);
    let a=3;
    console.log(a);
}
console.log(a); */
//settimeout function
function ab(a, b) {
    console.log(a + b);
}
function bc() {
    console.log("helloworld");
}
/*setTimeout(()=>{
    ab(2,3);
},3000);*/
/*setTimeout(()=>{
    console.log("helloworld");

},5000);*/
//setTimeout(bc, 5000);
//setTimeout(ab(2,3),3000);//it will show error
//use of callback function
/*function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcall){
    sum(a,b);
}
calculator(2,3,sum);*/
//use of call back function with arrow function
/*var sum=(a,b)=>{
    console.log(a+b);
}
function calculator(a,b,sumcsll){
    sumcsll(a,b);
}
calculator(2,3,sum);*/
//use of callback function through arrow function
/*var sum = (a, b) => {
    console.log(a + b);
}
var calculator = (a, b, sumcsll) => {
    sumcsll(a, b);
}
calculator(2, 3, sum);*/
//use of callback fucntion directly during function calling
/*var calculator = (a, b, sumcsll) => {
    sumcsll(a, b);
}
calculator(4,3,(a,b)=>{
    console.log(a+b);
});*/
//callback function with settimeout
/*function getdata(dataid,nextdata)
{
    setTimeout(() => {
        console.log(dataid);
        console.log("helloworld");
        
        if(nextdata)
        {
            console.log("fetching data");
            nextdata();
        }
    }, 3000);
}
console.log("fetching data:");
getdata(2,()=>{
    getdata(3,()=>{
        getdata(4,()=>{
            getdata(5);
        });
    }
    );
});*/
//callback function remedies:promise object
//pending state
/*var promise=new Promise((resolve,reject)=>{
    console.log("helloworld");
})
console.log(promise);*/
//resolve state
/*var promise=new Promise((resolve,reject)=>{
    console.log("helloworld");
    resolve("Success");
})
console.log(promise);*/
//rejected state
/*var promise=new Promise((resolve,reject)=>{
    console.log("helloworld");
    reject("Rejected");
})
console.log(promise);*/
//then and catch function
/*var promise=new Promise((resolve,reject)=>{
    console.log("helloworld");
    var a=0;
    if(a>0){
        resolve("done");
    }
    else{
        reject("Rejected");
    }
});
promise.then((res)=>{
    alert("successful");
    console.log("Successful",res);
})
promise.catch((err)=>{
    alert("unsuccessful",err);
})
console.log(promise);*/
//with settimeout function
/*function getresult(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "pass") {
                resolve("success");
            }
            else if (status === "fail") {
                reject("unsuccessful");
            }
        },3000);
    });
}
getresult("pass").then((res) => {
    console.log(res);
    getresult("pass").then((res) => {
        console.log(res);
        getresult("pass").then((res)=>{
            console.log(res);
        });
    });
});*/
//async function 
/*function getgender(gender)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(gender==="male")
            {
                resolve("Male found");
                console.log("Male");
            }
            else if(gender==="female")
            {
                resolve("female found");
                console.log("Female");
            }
            else{
                reject("others")
                console.log("others");

            }
        },2000);
    });
}
async function gethuman(){
    await getgender("male");
    await getgender("female");
    await getgender("male");
    await getgender("none");
}
gethuman();
function getresult(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "pass") {
                resolve("success");
            }
            else if (status === "fail") {
                reject("unsuccessful");
            }
        },1000);
    });
}
getresult("pass").then((res) => {
    console.log(res);
    getresult("pass").then((res) => {
        console.log(res);
        getresult("pass").then((res)=>{
            console.log(res);
        });
    });
});*/
//use of IIFE
/*function getgender(gender)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(gender==="male")
            {
                resolve("Male found");
                console.log("Male");
            }
            else if(gender==="female")
            {
                resolve("female found");
                console.log("Female");
            }
            else{
                reject("others")
                console.log("others");
 
            }
        },2000);
    });
}
(async function(){
    await getgender("male");
    await getgender("female");
    await getgender("male");
    await getgender("none");
})();*/
//use of apis
/*async function getdata(){
    const url="https://slftool.github.io/data.json";
    let promise=await fetch(url);
    let obj=await promise.json();
    console.log(obj);
    console.log(promise);
    console.log(obj["a"]["beruf"][0]);

}
getdata();*/
/*let a=2;
i=a++;
//console.log(a++);
console.log(a);
var x=5;
{
    x=9;
    console.log(window.x);
}
console.log(x);*/
//forEach function
/*let a=[7,45,3,2];
let b=a.forEach((val,idx)=>{
   console.log(val,idx);//here return statement is not allowed in map fucntion

});*/
//console.log(b);//it will be allowed if return statement is used instead of console.log().because return statement 
//includes value in the main array b   
//map fucntion(same for var,let and const datatype)
/*var a=[7,45,3,2];
var b=a.map((val,idx)=>{
   //console.log(val,idx);//if console.log is used console.log outside the block scope is deactivated
   return  val;//if return is used console.log outside the block scope is activated

});
console.log(b);*/
//filter function
/*var a=[7,45,3,2];
var b=a.filter((val,idx)=>{
   if(val%2===0){
    return val;
   }

});
console.log(b);*/
//reduce function
/*var a=[7,45,3,2];
var b=a.reduce((prev,curr)=>{
   if(prev>curr){
    return prev;
   }
   else if(prev<curr)
   {
    return curr;
   }

});
console.log(b);*/;
//use of object
/*const parent={
    "name":"souvik",
    "age":20,
    "address":"kolkata",
    "pincode":function(pin)
    {
        this.pin=pin;
        console.log("my pincode is 700150 ");
    },
    state(){
        console.log("my homestate is West Bengal");
    },
    "stream":"EE",
    nation(name){
        this.name=name;
        console.log("my home country is:",this.name);
        return this.name;
    }
};
console.log(parent.name);
parent.pincode(700150);`
parent.state();
console.log(parent.stream);
//parent.nation("india");
console.log("I live in",parent.nation("India"));
const child={
    "surname":"purkait"
};
child.__proto__=parent;
console.log(child.age);*/
//use of class
class about{
    constructor(to){
        this.to=to;
        console.log("welcomwe");

    }
    name(){
        console.log("souvik purkait");
    }
    age(){
        console.log("age is 221");
    }
    address(place="wb"){
        this.place=place;
        console.log("I live uin ");
        return this.place;
    }
}
let obj=new about();
obj.address("in");
obj.name();
console.log("I live in",obj.address("ind"));
class about_1 extends about{
    constructor(to,too)
    {
        super(to);
        this.too=too;
        console.log("welcome",this.too);
    }
    age_1(){
        super.age();
    }

}
let obj_1=new about_1(1,3);









