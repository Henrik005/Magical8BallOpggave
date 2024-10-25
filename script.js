//Model 
const model = {
app: document.getElementById('App'),
theAnswers: ['Yes','No','Are You Dumb?','Ask Again More Nicely','Mitochondriah Is The Powerhouse Of The Cell'],
randNum: ''
}




//View
updateView();
function updateView(){
model.app.innerHTML = /*HTML*/` <div class="ball">8</div>
<br/>
<input onchange="giveAnswer()" placeholder="Ask Your Question...">
<br/>
<div> ${model.theAnswers[model.randNum]}</div>
`
}








//Controller
function genNumber(){
    return Math.floor(Math.random() * model.theAnswers.length)
}

function giveAnswer(){
    genNumber();
    model.randNum = genNumber()
    updateView();
}







