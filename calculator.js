
const display= document.getElementById("display");
//search the html page for for the element with the id of display
//const is here to  store in a variable so that we can easily change the value in js
function appendValue(value){
    display.value+=value;
    //this function takes a value as an argument and appends it to the current value of the display
    //+= means to add the new value to the existing value   
    // the function appendVAlue(value) create a reusable function that take one input
    //display.value +=value; this line updates the display by adding the new value to the existing value

     
}
function clearDisplay(){
    display.value="";
   
    //this function clears the display by setting its value to an empty string
  // clearDisplay() is a function that clears the display when called when C  is pressed

}
function deleteLast(){
    display.value=display.value.slice(0,-1);
    //this function removes the last character from the display value using the slice method
    //slice(0,-1) means to take a portion of the string starting from index 0 up to (but not including) the last character
    //deleteLast() is a function that deletes the last character from the display when called when DEL is pressed
}
function calculateResult(){
    try{
        display.value=eval(display.value)//eval is a built-in JavaScript function that evaluates a string as a JavaScript expression
        //this function evaluates the expression in the display and updates the display with the result
    }catch(error){
        display.value="Error"
        //if there is an error during evaluation, it catches the error and displays "Error" on the display
    }   

}
const darkMode=document.getElementById("togglebutton");
darkMode.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    });
//this code adds an event listener to the button with the id "togglebutton"
//when the button is clicked, it toggles the "dark-mode" class on the body element
//this allows for switching between light and dark themes when the button is clicked    
//darkMode is a variable that stores the button element
//addEventListener is a method that attaches an event handler to the button for the "click" event
//when the button is clicked, the function inside the event listener is executed
//document.body.classList.toggle("dark-mode") toggles the "dark-mode" class on the body element, enabling or disabling dark mode styling
//this code enables a dark mode feature for the calculator application
//when the button is clicked, it toggles the "dark-mode" class on the body element
//this allows for switching between light and dark themes when the button is clicked
//darkMode is a variable that stores the button element
//addEventListener is a method that attaches an event handler to the button for the "click" event
//when the button is clicked, the function inside the event listener is executed
//document.body.classList.toggle("dark-mode") toggles the "dark-mode" class on the body element, enabling or disabling dark mode styling
//this code enables a dark mode feature for the calculator application
//when the button is clicked, it toggles the "dark-mode" class on the body element
//this allows for switching between light and dark themes when the button is clicked
//darkMode is a variable that stores the button element
//addEventListener is a method that attaches an event handler to the button for the "click" event
//when the button is clicked, the function inside the event listener is executed
//document.body.classList.toggle("dark-mode") toggles the "dark-mode" class on the body