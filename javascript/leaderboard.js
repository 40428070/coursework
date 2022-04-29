var i=0;
highScoreBoard=JSON.parse(localStorage.getItem('leaderboard'));
//parse the leaderboard localstorage
if (!highScoreBoard){
    results.innerHTML="No score saved yet!";
}
else{
results.innerHTML = '<tr><th>Name</th><th>Score</th></tr>'+highScoreBoard.map(result =>{
    if (i==0 && result.score>150){
        i++;
        return '<tr style="color: goldenrod;" ><td>'+result.name+'<img id="logo" src="images/crown.png"></td><td>'+result.score+'</td></tr>';
    }
    else if(result.score>150){
        i++;
        return '<tr style="color: green;" ><td>'+result.name+'</td><td>'+result.score+'</td></tr>';
    }
    else if (result.score<0){
        i++;
        return '<tr style="color: red;" ><td>'+result.name+'</td><td>'+result.score+'</td></tr>';
    }
    else{
        i++;
        return '<tr style="color: grey;" ><td>'+result.name+'</td><td>'+result.score+'</td></tr>';
    }
    
}).join('');
}

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
    window.alert('AntiCheating system prevention!\nThe user is not allowed to right click on this page!');
    
}, false);