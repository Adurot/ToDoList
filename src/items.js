

export class item {
    constructor(title, description, dueDate, priority, height, width, index) {
        this.title=title;
        this.description= description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.height = height;
        this.width = width;
        this.index=index;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}


function calcArea(height, width) {
    return width*height;

}

const square = new item(10, 10, 9, 8, 12, 6, 5);

console.log(square.area); // 100


const square3 = new item(10, 10, 9, 8, 12, 100, 5);



console.log(square3.area+ "square 3 area"); // 100

console.log(square3.dueDate+ "due date")