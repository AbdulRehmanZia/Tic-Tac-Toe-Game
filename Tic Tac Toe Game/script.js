let boxes = document.querySelectorAll(".box");
console.log(boxes);

let resetBtn = document.getElementById("resetBtn");
let turnO = true; //for X and O

let msgContainer = document.querySelector(".msg-container")
let newBtn = document.getElementById("newBtn")
let winnerMsg = document.getElementById("message")

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = ()=>{
    turnO=true
    enableBoxes()
    msgContainer.style.display = "none"
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("boax has clicked");
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
}
);

const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled= true
    }
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled= false
        box.innerText=""
    }
}

const showWinner = (winner)=>{
    winnerMsg.innerText = `Congratulations! Winner is "${winner}"`
    msgContainer.style.display = "block"
    disableBoxes()
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1 =  boxes[pattern[0]].innerText
    let pos2 =  boxes[pattern[1]].innerText
    let pos3 =  boxes[pattern[2]].innerText

    if(pos1 != "" && pos2 != "" && pos3!= ""){
        if (pos1 === pos2 && pos2 === pos3) {
            console.log("you are winner", pos1);
            showWinner(pos1)
        }
    }
  }
};


resetBtn.addEventListener("click", resetGame)
newBtn.addEventListener("click", resetGame)