class  Ball {
    constructor(size, sprite, speed){
        this.size = size;
        this.sprite = sprite;
        this.speed = speed;
    }

    createBall(){
        const ball = document.createElement("div")
        ball.id = "Ball"
        ball.style.width = "20px"
        ball.style.height = "20px"
        ball.style.borderRadius = "50%"
        ball.style.backgroundImage = `url(${this.sprite})`
        return ball
    }
}

export default Ball