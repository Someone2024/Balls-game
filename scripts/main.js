import Ball  from "./ball.js"
import Shape  from "./Shape.js"

class Game {
    constructor() {
        this.time = this.time
        this.score = this.score
    }

    game_container = document.getElementById("Game")

    Run(){
       this.Time()
       this.game_container.appendChild(BallO.createBall())
       this.game_container.appendChild(ShapeO.createShape())
    }

    Time(){
        let secs = 0;
        let mins = 0;
        const TimeDiv = document.createElement("div")
        const SecondsDiv = document.createElement("span")
        const MinutesDiv = document.createElement("span")

        TimeDiv.append(MinutesDiv, SecondsDiv)
        this.game_container.appendChild(TimeDiv)

        setInterval(() => {
            secs++
            if (secs===59) {
                secs = 0
                mins++
            }
            SecondsDiv.textContent = ":" + secs
            MinutesDiv.textContent = mins
            this.time = MinutesDiv + ":" + SecondsDiv 
        }, 1000);
    }
}

const GameO = new Game();
const BallO  =  new Ball(12,"./icon.png",3)
const ShapeO =  new Shape("blue",2,3)
GameO.Run()