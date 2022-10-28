// create variables
const lowerdisplay = document.querySelector('.cal-lower');
const upperdisplay = document.querySelector('.cal-upper');
const buttons = document.querySelectorAll('.button');

//for buttons
let buttonValue = "value";
let buttonType = "type";

//set variables
let a = "";
let b = "";
let operator = "";
let temp = "";
let result = "";

//set toggles
let isEqualPressed = false;
let isDigitPressed = false;
let isOperationPressed = false;

//listen for clicks
buttons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        buttonValue = e.target.dataset.value;
        buttonType = e.target.dataset.role;
        clearButtonValue = buttonValue;
        filterInput();
        log();
    })
});
window.addEventListener("keydown",filterKeyboardInput);

function filterKeyboardInput(e){
    let key = e.key;
    switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            buttonValue = key;
            buttonType = "digit";
            filterInput();
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            buttonValue = key;
            buttonType = "operation";
            filterInput();
            break;
        case ".":
            buttonValue=key;
            buttonType = "decimal";
            filterInput();
            break;
        case "=":
        case "Enter":
            buttonValue =key;
            buttonType = "Equal";
            filterInput();
            break;
        case "BackSpace":
        case "Delete":
            buttonValue =key;
            buttonType = "CE";
            filterInput();
            break;
        case "Escape":
            buttonValue=key;
            buttonType="AC";
            filterInput();
            break;
        default:
            break;
            
    }
}

function filterInput(){
    if (buttonType==="digit"){
        if (isEqualPressed && temp==result)
        {
            isEqualPressed = false;
            temp="";
            b="";
            result="";
            storeNumbersInT(buttonValue,buttonType);
            lowerdisplay.textContent = `${temp}`;
            isDigitPressed = true;
        }else if(isEqualPressed)
        {
            isEqualPressed=false;
            temp="";
            b="";
            storeNumbersInT(buttonValue,buttonType);
            lowerdisplay.textContent=`${temp}`;
            isDigitPressed=true;
        }
        else
        {
            if (isOperationPressed){
                temp="";
                isOperationPressed=false;
                storeNumbersInT(buttonValue,buttonType);
                show
            }
        }
    }
};
//storing number
function storeNumbersInT(buttonValue, buttonType){
    if(temp === "0" && buttonType != 'decimal'){
        temp = "";
        return temp += buttonValue;
    } else if(buttonType === 'decimal' && temp.toString().includes(".") === true){
        return;
    } else if(buttonType === 'decimal' && temp === ""){
        return temp = "0."
    } else if (overflowDisplay()){
        return temp;
    } return temp += buttonValue;
}
