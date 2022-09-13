console.log("O-X Game")

let win = document.querySelector(".win")
let playTurn = document.querySelector(".turn")
let winInner = document.querySelector(".winInner")
let reset = document.getElementById("reset")
let replay = document.getElementById("replay")
let turn = "X"
let isgameover = false

// change turn
function changeTurn(){
    return (turn === "X")? "O" : "X"
}

//check win function
function checkWin(){
   let boxText = document.getElementsByClassName("boxText")
   
   let win = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
   ]
   
   win.forEach(function(e){
       if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
          winInner.innerText = boxText[e[0]].innerText
          isgameover = true
       }
       
   })
   
}


// game logic
let boxes = document.getElementsByClassName("boxes")

Array.from(boxes).forEach(function(element,index){
  let boxText = element.querySelector(".boxText")
  element.addEventListener("click" , function(){
    
    if(boxText.innerText === ""){
       boxText.innerText = turn
       turn = changeTurn()
       checkWin()
       if(isgameover == false){
          playTurn.innerText = turn
       }
       else{
          win.style.height = "90vh"
       }
    }
    
  })
})

// reset btn
reset.addEventListener("click" , function(){
   let boxes = document.getElementsByClassName("boxes")
   
   Array.from(boxes).forEach(function(element,index){
        let boxText = element.querySelector(".boxText")
        boxText.innerText = ""
        turn = "X"
        isgameover = false
        playTurn.innerText = turn
   })
})

// replay btn
replay.addEventListener("click" , function(){
   let boxes = document.getElementsByClassName("boxes")
   
   Array.from(boxes).forEach(function(element,index){
        let boxText = element.querySelector(".boxText")
        boxText.innerText = ""
        win.style.height = "0px"
        turn = "X"
        isgameover = false
        playTurn.innerText = turn
   })
})