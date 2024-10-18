//Model 
app = document.getElementById('App')
let theAnswers = ['Yes','No','Are You Dumb?','Ask Again More Nicely','Mitochondriah Is The Powerhouse Of The Cell']
let i;





//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/` <div class="ball">8</div>
<br/>
<input onchange="showAnswer()" placeholder="Ask Your Question...">
<br/>
<div> ${theAnswers[i]}</div>
`
}








//Controller
function genRandomNum(){
return math.floor(Math.random() * 5);
}
//Trying to figure out how to tie the random number to the Array, don't bully me pls :c
function showAnswer(){
i = 1
updateView();
}







