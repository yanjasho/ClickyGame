import React, { Component } from "react";
import pic1 from "./1.jpg"
import pic2 from "./2.jpg"
import pic3 from "./3.jpg"
import pic4 from "./4.jpg"
import pic5 from "./5.jpg"
import pic6 from "./6.jpg"
import pic7 from "./7.jpg"
import pic8 from "./8.jpg"
import pic9 from "./9.jpg"

const picArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]

class Pics extends Component {

    state = {
      score: 0
    };

    scoreCount = event =>{
      event.preventDefault();
      this.setState ({
        score: this.state.score+1
      })

        let currentIndex = picArray.length
        let temporaryValue
        let randomIndex

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = picArray[currentIndex];
            picArray[currentIndex] = picArray[randomIndex];
            picArray[randomIndex] = temporaryValue;
        }
        return picArray;
    }

    render() {
        return (
            <div>
                <div>{this.state.score}</div>
                <div className="row">
                    <div className="col">
                        <img src={picArray[0]} alt="flower" width="300" height="300" onClick={this.scoreCount}/>
                    </div>
                    <div className="col">
                        <img src={picArray[1]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                    <div className="col">
                        <img src={picArray[2]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={picArray[3]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                    <div className="col">
                        <img src={picArray[4]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                    <div className="col">
                        <img src={picArray[5]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={picArray[6]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                    <div className="col">
                        <img src={picArray[7]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                    <div className="col">
                        <img src={picArray[8]} alt="flower" width="300" height="300" onClick={this.scoreCount}/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Pics;