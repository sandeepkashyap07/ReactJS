import { memo } from "react";
function Counter({countValue,onClick}){
    /*so here in the console log wihtout callback or usememo \
    when we increase one ccounter value the second conuter in the callback component
    it also rerendered and vise versa */
    console.log("this is getting rendered",countValue,onclick);
    
    return(
        <div>
            <p>{countValue}</p>
            <button onClick={onClick} >click me</button>
        </div>
    )
}
// here we wrap the whole counter in the memo 
export default memo(Counter)