let points = document.getElementById("points")
let Images = document.getElementsByTagName("img")
let srcList = ["images/ronaldo.jpeg","images/messi.jpeg","images/neymar.jpeg","images/maradona.jpeg"]
let src = ""
pointsCounter = 0    // score
turnsCounter = 0    // number of cards flipped
let imgArr = []

let count = 0

    
// }
let randomNumber = 0
for(let j = 0; j < 2; j++){
    for(let i = 0; i< srcList.length; i++){
        // take any random number of total images
        randomNumber =[Math.floor(Math.random() * Images.length)]
        
        if(Images[randomNumber].dataset.src == ""){
            Images[randomNumber].dataset.src = srcList[i]
        }
        else{
            i--;
        } 
    }
}


for(let i = 0; i< Images.length; i++){
    if(Images[i].dataset.src != ""){
        console.log(i,Images[i].dataset.src);
    }
    else{
        console.log("none")
    }
}



for(let i = 0; i< Images.length; i++){
    
    Images[i].addEventListener("click",function(){
        if(turnsCounter < 2 && Images[i].dataset.bool == "false"){
            console.log(Images[i],"is clicked")
            Images[i].setAttribute("src", Images[i].dataset.src)
            Images[i].dataset.bool = "true"
            turnsCounter++;
            imgArr.push(i,Images[i].getAttribute("src")) 
        }    
        if(imgArr.length === 4){
            
            console.log("workinhg...")
            if(imgArr[1] === imgArr[3]){
                turnsCounter = 0
                console.log("right guess")
                count++;
                // cards will always be open
            }
            else{
                setTimeout(() => {
                    console.log("wrong guess")
                    Images[imgArr[0]].setAttribute("src","images/default.jpg")
                    Images[imgArr[2]].setAttribute("src","images/default.jpg")
                    Images[imgArr[0]].dataset.bool = "false"
                    Images[imgArr[2]].dataset.bool = "false"

                    turnsCounter = 0
                }, 500);
                
            }
           setTimeout(() => {
            imgArr = []
            pointsCounter++
            points.textContent = pointsCounter
           }, 600);
        }
        if(count == 4){
            alert("YOU WONS")
        }
    })
   
    
}






