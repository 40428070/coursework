highScore = JSON.parse(localStorage.getItem('highScore'))
score.innerText = highScore
var allowSave = 1
statistic = JSON.parse(localStorage.getItem('statistic'))
console.log(statistic)
Nquestion.innerText += statistic[0]
correct.innerText += statistic[1]
missed.innerText += statistic[2]
wrong.innerText += statistic[3]
Ttime.innerText += statistic[4]+"s"
username.addEventListener('keyup',() =>{
    save.disabled = !username.value
    if(save.disabled)
    {
        save.style.color = "gray";
        save.style.background = "gainsboro";
    }
    else{
        save.style.color = "black";
        save.style.background = "green";
    }
})

saveResult = e => {
    if(allowSave != 1){
        window.alert('Can`t save the score more than once')
        return
    }
    leaderboard = []
    e.preventDefault()
    const result ={
        score: highScore,
        name: username.value
    }
    if (!localStorage.getItem('leaderboard')){
        leaderboard.push(result)
    }
    else{
        leaderboard=JSON.parse(localStorage.getItem('leaderboard'))
        leaderboard.push(result)    
    }
    leaderboard.sort((x,y) => {
        return y.score - x.score
    })
    localStorage.setItem('leaderboard',JSON.stringify(leaderboard))
    window.alert(username.value+' your score: '+highScore+' has been recorded on the leaderboard')
    allowSave ++
}
function draw_happy_face(){
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); //border
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false); //mouth
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);//left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true); //rigt eye
    ctx.stroke();

}
function draw_sad_face(){
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); //border
    ctx.moveTo(100,100);
    ctx.arc(75,100,25,0,Math.PI,true); //mouth
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);//left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true); //rigt eye
    ctx.stroke();
}
function draw_neutral_face(){
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); //border
    ctx.moveTo(100,100);
    ctx.lineTo(55,100); //mouth
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);//left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true); //rigt eye
    ctx.stroke();

}

if (highScore<0){
    draw_sad_face()
}
else if (highScore>150){
    draw_happy_face()
}
else{
    draw_neutral_face()
}
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
    window.alert('AntiCheating system prevention!\nThe user is not allowed to right click on this page!')
    
}, false);