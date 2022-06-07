
//import {trick} from './magic.js'

import {item} from './items.js'


let i=0;
let j=0;
const toDo=[];
toDo[i] = new item(10, 10, 9, i, i+1, 5, i);

i++;
toDo[i] = new item(10, 10, 9, i, i+1, 5, i);
i++;
toDo[i] = new item(10, 10, 9, i, i+1, 5, i);

console.log(toDo[i].priority+ " Due Date for " +i)

function pageLoad()
{

let div = document.createElement("div");
div.id = "dtitle";
div.className = "title";
div.style = "background-color: blue;";
div.style.width = "900px";
div.style.height = "200px";
div.innerHTML= "Version 1";
document.body.appendChild(div);  

let h1 = document.createElement("h1");

h1.id = "title";

h1.style.width = "300px";
h1.style.height = "50px";
h1.innerHTML= "To Do List";
document.getElementById("dtitle").appendChild(h1);  
}


function listLoad()
{


let div = document.createElement("div");
div.id = "div"+toDo[j].index;
div.className = "toDo";
div.style = "background-color: yellow;";
div.style.width = "900px";
div.style.height = "200px";
div.innerHTML= "Item number " +toDo[j].index;
document.body.appendChild(div);  

let h3 = document.createElement("h");

h3.id = "title"+toDo[j].index;

h3.style.width = "300px";
h3.style.height = "50px";
h3.innerHTML= "<br> Title for number "+toDo[j].index+" To Do";
document.getElementById("div"+toDo[j].index).appendChild(h3);  


let h4 = document.createElement("h");
h4.id = "description"+toDo[j].index;

h4.style.width = "300px";
h4.style.height = "50px";
h4.innerHTML= "<br> Description for number "+toDo[j].index+" To Do";
document.getElementById("div"+toDo[j].index).appendChild(h4);
}

pageLoad();
for(j=0; j < toDo.length; j++){
listLoad();
}
let place= "spacestation";

console.log("test working")








const square3 = new item(10, 10, 9, 8, 12, 100, 5);

console.log(square3.area+ "square 3 area"); // 100

console.log(square3.dueDate+ "due date")


const square = new item(10, 10);

console.log(square.area); // 100





    
    const jim = new item(5, 10, 9, 12, 6, 5);
    console.log("check1")

    const jim1= new item (7, 12, 15, 4, 7, 23);
    

    var personActions = {
        getFullName() {
          return this.firstName + ' ' + this.lastName;
        },
      };

console.log(jim.area); 

export const trick = function () {
    return {
        trick: () => { console.log(harry[1].firstName+ 'I am doing a trick'); }
    }
}

const eat = function () {
    return {
        eat: () => { console.log(place+ ' I am eating'); }
    }
}
const breathe = function () {
    return {
        breathe: () => { harry[1].firstName = "billy" }
    }
}
const swim = function () {
    return {
        swim: () => { console.log('I am swimming'); }
    }
}




const crazyName = function () {
    return {
        crazyName: () => { console.log(harry[1].getName+' I am doing a trick'); }
    }
}

const crazyName1 = function () {
    return {
        crazyName1: () => { console.log(harry[1].getName+' I am doing a trick'); }
    }
}

function chName(namo) 
{
    harry[1].firstName=namo;

}

/**const chName1= function () {
    return{
        chName1: () => {console.log(harry[1].firstName+ "hello");
    }
}*/

const superMagician = ()=> {
 return Object.assign(
     {firstName: 'Monica',
     set changeName(newName) {
        this.firstName = newName;
    }},
     
     
     eat(),
     breathe(),
     trick()
   );
}
const noviceMagician = () => {
 return Object.assign(
     {firstName: 'Jake', 
     set changeName(newName) {
        this.firstName = newName;
    },
    get getName() {
        return this.firstName;
    }
    },
    
     crazyName(),
     crazyName1(),
     eat(),
     breathe(),
     swim()
   );
}

let harry = superMagician();

harry.eat();

console.log(harry.firstName)

harry[0] = noviceMagician();
harry.changeName="17";

console.log(harry[0].firstName)

console.log(harry.firstName)

harry[1]  = noviceMagician();

harry[1].changeName="Stationcraft";

harry[1].eat();

harry[1].crazyName();

harry[1].crazyName1();

console.log(harry[1].firstName)

harry[1].speak;

harry[1].changeName="kip"

//harry[1].chName1;

console.log(harry[1].firstName)

harry.trick();

harry.breathe();
console.log(harry[1].firstName)
