class Shape {
    constructor(color, shape, number){
        this.color = color;
        this.shape = shape;
        this.number = number;
    }

    createShape(){
        const Shape = document.createElement("div")
        Shape.style.width = "30px"
        Shape.style.height = "30px"
        Shape.style.backgroundColor = "red"
        Shape.textContent = this.number
        Shape.style.backgroundColor = this.color
        Shape.id = "Shape" 
        return Shape
    }
}

export default Shape