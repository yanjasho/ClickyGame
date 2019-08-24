import React from "react";
import pic1 from "./1.jpg"
import pic2 from "./2.jpg"
import pic3 from "./3.jpg"
import pic4 from "./4.jpg"
import pic5 from "./5.jpg"
import pic6 from "./6.jpg"
import pic7 from "./7.jpg"
import pic8 from "./8.jpg"
import pic9 from "./9.jpg"

let picArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]

function shuffle() {
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

shuffle()

// function Score() {
//   render() {
//     const score = this.scoreSount();

//     return (
//       <div>
//   Your Score = {score}
//       </div>
//     );
//   }
// }
//let score=0

function Pic1() {
  return (
    <div className="col">
        <img src={picArray[0]} alt="flower" width="300" height="300" onClick={scoreCount}/ > 
    </div>
  );
}

function Pic2() {
  return (
    <div className="col">
        <img src={picArray[1]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}

function Pic3() {
  return (
    <div className="col">
        <img src={picArray[2]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}

function Pic4() {
  return (
    <div className="col">
        <img src={picArray[3]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}
function Pic5() {
  return (
    <div className="col">
        <img src={picArray[4]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}
function Pic6() {
  return (
    <div className="col">
        <img src={picArray[5]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}
function Pic7() {
  return (
    <div className="col">
        <img src={picArray[6]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}
function Pic8() {
  return (
    <div className="col">
        <img src={picArray[7]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}

function Pic9() {
  return (
    <div className="col">
        <img src={picArray[8]} alt="flower" width="300" height="300" onClick={scoreCount}/> 
    </div>
  );
}

function scoreCount() {
  //event.preventDefault();
  let score=0
  score = score+1

  return(
    <div>
      Your Score = {score}
    </div>
  );
}

export {
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  Pic5,
  Pic6,
  Pic7,
  Pic8,
  Pic9,
  scoreCount
}