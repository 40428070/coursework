tutorial_text =['The quiz consists of a math test, testing the math skills of the player. The user will be prompted with a series of different math questions, he will have to select an answer.','For each correct answer, the user will gain some points, the wrong answer will come with some penalty, none answered question will have no effect on the score.','At the end of the quizzes, the user can choose to save the achieved score on a leader board or reattempt the quiz, the math test should provide different random questions each time to keep the quiz score fair.','The math quiz can be of various nature, perform fast calculation, identification of correct graphs or answer to a mathematical or physic question.'];
tutorial_index=0;
max_index = tutorial_text.length-1;
tutorial.innerText= tutorial_text[tutorial_index];
left_arrow.addEventListener('click', e => {
    if (tutorial_index ==0) {
        return;
    }
    tutorial_index --;
    tutorial.innerText= tutorial_text[tutorial_index];

})
right_arrow.addEventListener('click', e => {
    if (tutorial_index == max_index){
        return;
    }
    tutorial_index ++;
    tutorial.innerText= tutorial_text[tutorial_index];
});

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
    window.alert('AntiCheating system prevention!\nThe user is not allowed to right click on this page!');
    
}, false);