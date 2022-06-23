//first step is to listen for all key presses and 
//deteremine which key has been pressed
const calculator = document.querySelector('.calculator');  //selec the wrapper holding the elements
const keys = calculator.querySelector('.calculatorKeys');  //select the calculatorKeys element since all keys are children of the calculatorKeys element
const display = document.querySelector('.calculatorDisplay');//to diplay the key that was clicked to replace zero


//add an event listener that on click of a calculator key, an event is triggered
keys.addEventListener("click", e => {
    if(e.target.matches('button')){
        //we use the data-action attribute to determine the type of key that is clicked
        const key = e.target;  //the variable key is assigned to any event triggered by the buttons of the calculator
        const action = key.dataset.action;  //variable action is used to access the data-action of various keys

        //now we need to display the clicked number content onto the calculatorDisplay elemnt to replace the default zero
        //to do that we need to know two things
        //1. The number of the key that was clicked
        //2. The current displayed number
        //we can get these two values through the textContent property of the clicked key and .calculatorDisplay respectively
        const keyContent = key.textContent;
        console.log(keyContent) //will display the values of the buttons
        const displayedNum = display.textContent;
        // console.log(displayedNum); will show 0 at click of any button

        //if the key does not have a data action attribute, it must be a number key
        //check if it has the data-action attribute
        if(!action){
            // console.log('number key!')
            // =========== Displaying calculator ke values on the .calculatorDisplay ==========
            //if calculator shows 0, we want to replace the displayed content with the content of the clicked key
            if(displayedNum === 0) {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        // At this point, the user may either hit any operator key or the decimal key
        //1. ========== when they hit the operator key ===========
        //this is by adding the .is-depressed class
        else if(
            action === "addition" ||
            action === "subtraction" ||
            action === "multiplication" ||
            action === "division" 
        ){
            // console.log('operator key!')
            key.classList.add('.is-depressed')
        }

        //2. ==========when they hit the decimal key, append the decimal to the displayed content ==========
        else if (action === "decimal"){
            // console.log('decimal')
            display.textContent = displayedNum + '.'
        }
        else if(action === "clear"){
            console.log('clear key')
        }
        else if(action === "calculate"){
            console.log("equal key")
        }
    }
})