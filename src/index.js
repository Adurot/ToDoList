
//import {trick} from './magic.js'
import { compareAsc, format } from 'date-fns'
import { item } from './items.js'
// Item attributes: title, description, dueDate, priority, index, list



let i = 0;
let j = 0;
let taskTime=540;
const today = new Date();
const due = new Date();
due.setDate(today.getDate()+taskTime);
const day= due.getDate();
const month= due.getMonth()+1;
const year= due.getFullYear();
const toDo = [];
toDo[i] = new item("Task Title", "Task Description", "Task Due Date", 'high', i, 'default');

i++;
toDo[i] = new item(10, due, month+"/"+day+"/" + year, 'medium', i, 'default');
i++;
toDo[i] = new item(10, 10, 7, 'low', i, 'work');

console.log(toDo[i].priority + " Due Date for " + i)


let btn = document.createElement("button");
btn.innerHTML = "Work";
btn.onclick = function () {
    clrList();
    chooseList('work');
  
};
document.body.appendChild(btn);

function clrList(){
let element = document.getElementById("container");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
}
function pageLoad() {

    let divt = document.createElement("div");
    divt.id = "dtitle";
    divt.className = "title";
    divt.style = "background-color: blue;";
    divt.style.width = "1200px";
    divt.style.height = "100px";
    divt.innerHTML = "Version 1";
    document.body.appendChild(divt);

    let h1 = document.createElement("h1");

    h1.id = "title";

    h1.style.width = "500px";
    h1.style.height = "20px";
    h1.innerHTML = "To Do List";
    document.getElementById("dtitle").appendChild(h1);

    let container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
}


function listLoad() {
    

    let div = document.createElement("div");
    div.id = "div" + toDo[j].index;
    div.className = "toDo";
    div.style = "background-color: yellow;";
    div.style.width = "1200px";
    div.style.height = "400px";
    document.getElementById("container").appendChild(div);

    let h3 = document.createElement("h4");

    h3.id = "title" + toDo[j].index;

    h3.style.width = "300px";
    h3.style.height = "50px";
    h3.innerHTML = "<span>Item number</span> <br>" + toDo[j].index+"<br> <span><u>Title</u></span><br>" + toDo[j].title;
    document.getElementById("div" + toDo[j].index).appendChild(h3);
    h3.style = "background-color: lightgreen;";


    let h4 = document.createElement("h4");
    h4.id = "description" + toDo[j].index;

    h4.style.width = "300px";
    h4.style.height = "50px";
    h4.innerHTML = "<br> <span>Description</span> <br>" + toDo[j].description;
    document.getElementById("div" + toDo[j].index).appendChild(h4);

    let hDue = document.createElement("h4");

    hDue.id = "title" + toDo[j].index;

    hDue.style.width = "300px";
    hDue.style.height = "50px";
    hDue.innerHTML = "<br> <span>Due Date</span><br>" + toDo[j].dueDate;
    document.getElementById("div" + toDo[j].index).appendChild(hDue);


    let hpriority = document.createElement("h4");
    hpriority.id = "<span>description</span><br>" + toDo[j].index;

    hpriority.style.width = "300px";
    hpriority.style.height = "50px";
    hpriority.innerHTML = "<br> <span>Priority</span><br>" + toDo[j].index + " To Do is " + toDo[j].priority;
    document.getElementById("div" + toDo[j].index).appendChild(hpriority);

    let hlist = document.createElement("h4");
    hlist.id = "description" + toDo[j].index;

    hlist.style.width = "300px";
    hlist.style.height = "50px";
    hlist.innerHTML = "<br> <span>List</span> for number " + toDo[j].index + " To Do is " + toDo[j].list;
    document.getElementById("div" + toDo[j].index).appendChild(hlist);
    
}

pageLoad();
chooseList('default');

function chooseList(listType){
    for (j = 0; j < toDo.length; j++) {
        if (toDo[j].list == listType) { listLoad(); }
    }
    
}

let place = "spacestation";

console.log("test working")








const square3 = new item(10, 10, 9, 8, 12, 100, 5);

console.log(square3.area + "square 3 area"); // 100

console.log(square3.dueDate + "due date")


const square = new item(10, 10);

console.log(square.area); // 100






const jim = new item(5, 10, 9, 12, 6, 5);
console.log("check1")

const jim1 = new item(7, 12, 15, 4, 7, 23);


var personActions = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(jim.area);

export const trick = function () {
    return {
        trick: () => { console.log(harry[1].firstName + 'I am doing a trick'); }
    }
}

const eat = function () {
    return {
        eat: () => { console.log(place + ' I am eating'); }
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
        crazyName: () => { console.log(harry[1].getName + ' I am doing a trick'); }
    }
}

const crazyName1 = function () {
    return {
        crazyName1: () => { console.log(harry[1].getName + ' I am doing a trick'); }
    }
}

function chName(namo) {
    harry[1].firstName = namo;

}

/**const chName1= function () {
    return{
        chName1: () => {console.log(harry[1].firstName+ "hello");
    }
}*/

const superMagician = () => {
    return Object.assign(
        {
            firstName: 'Monica',
            set changeName(newName) {
                this.firstName = newName;
            }
        },


        eat(),
        breathe(),
        trick()
    );
}
const noviceMagician = () => {
    return Object.assign(
        {
            firstName: 'Jake',
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
harry.changeName = "17";

console.log(harry[0].firstName)

console.log(harry.firstName)

harry[1] = noviceMagician();

harry[1].changeName = "Stationcraft";

harry[1].eat();

harry[1].crazyName();

harry[1].crazyName1();

console.log(harry[1].firstName)

harry[1].speak;

harry[1].changeName = "kip"

//harry[1].chName1;

console.log(harry[1].firstName)

harry.trick();

harry.breathe();
console.log(harry[1].firstName)
