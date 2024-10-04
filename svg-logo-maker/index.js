const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
render(){
    return `<svg version="1.1" xmlns="http:www.w3.org/2000/svg" width="300" height="200"> ${this.shapeElement}${this.textElement}"/>`
}
setTextElement(text,color){
    this.textElement = `<text x="150" y="125" font-size="50" text-anchor="middle"/>`
}

setShapeElement(shape){
    this.shapeElement = shape.render()
}

}

//Array for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Text:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Text color:",
    },
    {
        type: "input",
        name: "shape-color",
        message: "Shape color:",
    },
    {
        type: "list",
        name: "shape-type",
        message: "Which shape?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

