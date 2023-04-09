const word_element=document.getElementById('word');
const correctLetters=[];
const wrongLetters=[];
const popup=document.getElementById('popup-container');
const message_el=document.getElementById('success-message');
const wrongLetters_el=document.getElementById('wrong-letters');
const items=document.querySelectorAll('.item');
const message=document.getElementById('message'); 
const playAgainBtn=document.getElementById('play-again');
const newWordAdd=document.getElementById('new-word');
let selectedWord=getRandomWord();


// function newWordAdd(){
//     newWordAdd.addEventListener('click',function(){

//     })
// }

function getRandomWord(){
    const words =["javascript","java","python"];
    return words[Math.floor(Math.random()*words.length)];
}



function displayWord(){
    word_element.innerHTML=`
        ${selectedWord.split('').map(letter=>`
            <div class="letter">
                ${correctLetters.includes(letter) ? letter:''}
            </div>
        `).join('')}
    `;

    const w= word_element.innerText.replace(/\n/g,'');
    if(w===selectedWord){
        popup.style.display='flex';
        message_el.innerText='Tebrikler Kazandınız';
    }
}

function updateWrongLetters(){
    wrongLetters_el.innerHTML=`
        ${wrongLetters.length>=0?'<h3>Wrong Letters</h3>':''}
        ${wrongLetters.map(letter=>`<span>${letter}</span>`)}
    `;

    items.forEach((item,index) => {
        const errorCount=wrongLetters.length;

        if (index<errorCount){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
    if(wrongLetters.length===items.length){
        popup.style.display='flex';
        popup.style.backgroundColor='rgba(255, 0, 0, 0.3)';
        message_el.innerText='Kaybettiniz :((';
    }

}

function displayMessage(){
    message.classList.add('show');
    setTimeout(function(){
        message.classList.remove('show');  
    },1000); 
}

playAgainBtn.addEventListener('click',function(){
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display='none';
});


window.addEventListener('keydown',function(e){
    if(e.keyCode>=65 && e.keyCode<=90){
        const letter=e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                displayMessage();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }else{
                displayMessage();
            }
        }
        
    }
});


displayWord();