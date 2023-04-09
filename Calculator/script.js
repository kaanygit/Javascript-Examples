const display=document.querySelector('.calculator-input');
const keys=document.querySelector('.calculator-keys');

let displayValue='0';
let firstValue=null;
let operator=null;
let waitingForSecondValue=false;

updateDisplay();

function updateDisplay(){
    display.value=displayValue;
}

keys.addEventListener('click',function(e){
    const element=e.target;
    const value=element.value;

    if(!element.matches('button')) return;

    switch(element.value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case '.':
            inputDecimal();
            break;
        case 'clear':
            clear();
            break;
        default:
            inputNumber(element.value);


        

    }

    // if(element.classList.contains('operator')){
    //     // console.log('operator',element.value);
    //     handleOperator(element.value);
    //     updateDisplay();
    //     return;
    // }

    // if(element.classList.contains('decimal')){
    //     // console.log('decimal',element.value);
    //     inputDecimal();
    //     updateDisplay();
    //     return;
    // }

    // if(element.classList.contains('clear')){
    //     // console.log('clear',element.value);
    //     clear();
    //     updateDisplay();
    //     return;
    // }


    //console.log('number',element.value);

    // inputNumber(element.value);
    updateDisplay();
});

function handleOperator(nextOperator){
    const value=parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        operator=nextOperator;
        return;
    }

    if(firstValue===null){
        firstValue=displayValue;
    }else if(operator){
        const result=calculate(firstValue,value,operator);
        displayValue=`${parseFloat(result.toFixed(7))}`;
        firstValue=result;
    }

    waitingForSecondValue=true;
    operator=nextOperator;

    console.log(firstValue,operator,waitingForSecondValue,displayValue);

}

function calculate(first,second,operator){
    if(operator==='+'){
        return first+second;
    }else if(operator==='-'){
        return first-second;
    }else if(operator==='*'){
        return first*second;
    }else if(operator==='/'){
        return first/second;
    }
    return second;
}


function inputNumber(num){
    if(waitingForSecondValue){
        displayValue=num;
        waitingForSecondValue=false;
    }else{
        displayValue=displayValue==='0'?num:displayValue+num;
    }
    console.log(firstValue,operator,waitingForSecondValue,displayValue);
}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue+='.';
    }
}

function clear(){
    displayValue='0';
}