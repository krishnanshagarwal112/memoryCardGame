let points = document.getElementById("points")
let Images = document.getElementsByTagName("img")
let srcList = ["images/ronaldo.jpeg","images/messi.jpeg","images/neymar.jpeg","images/maradona.jpeg"]
let src = ""
pointsCounter = 0    // score
turnsCounter = 0    // number of cards flipped
let imgArr = []
let win = true;

for(let i = 0; i< Images.length; i++){
    
    Images[i].dataset.src = randomeSource()
    

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
            pointsCounter++
            points.textContent = pointsCounter
            console.log("workinhg...")
            if(imgArr[1] === imgArr[3]){
                turnsCounter = 0
                console.log("right guess")
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
                }, 1000);
                
            }
           setTimeout(() => {
            imgArr = []
           }, 1100);
        }
    })
    
}



function randomeSource(){
    src = srcList[Math.floor(Math.random() * srcList.length)]
    return src
    
}






