import { useEffect, useRef, useState } from "react";


function Hooks(){
    /*useref returns a mutable object that can be changed and modiefied
    in useref we initalize a intial value */
const countvalue = useRef(0)
// here we created a variable with useref
const divElementRef = useRef()
const inputRefElement = useRef()

function handleClick(){
    // here we get the current value of the countvalue and we ++ it
    countvalue.current++
    console.log(countvalue.current);
    
}


useEffect(() => {
    inputRefElement.current.focus();
    console.log(inputRefElement.current)
    // here we get the current value of the divelement ref
    // here we get the current value of divElementRef which is div content
const getDivReference = divElementRef.current
getDivReference.style.color = "red";
setTimeout(() => {
    getDivReference.style.color = "green";
    setTimeout(() => {
        getDivReference.style.color = "red";
        
    }, 999);
}, 999);
console.log(getDivReference);

}, []);

return(
    <div>
        <h1>use ref , use callback , use memo</h1>
    <button onClick={handleClick} >click me</button>
    {/* now if want to get thise div element we will
     ref it with the variable we created above */}
     {/* here we referenced the div to the divElementref so the value of 
     div will go in the divElementRef  */}
    <div ref={divElementRef} >some random div text</div>
<input name="name" placeholder="enter name" ref={inputRefElement}/>

    </div>
)
}
export default Hooks