import { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallbackExample(){
    const[countOne,setCountOne] = useState(0)
    const[countTwo,setCountTwo] = useState(0)

    /*here what it means is that by using the callback function we
    defined that when we change the countone vaule only its value will be
    rerendered not the second count  thats why we put the dependency of countone in it */
const memorizeSetCountOneFunc = useCallback(()=> setCountOne(countOne+1),[countOne])
const memorizeSetCountTwoFunc = useCallback(()=> setCountTwo(countTwo+1),[countTwo])

    return(
        <div>
            <h1>use callback </h1>

            {/* when onecount is inceased the twocount also got rerendered we have to 
            stop this using memo */}
            {/* <Counter countValue={countOne} onClick={()=> setCountOne(countOne+1)}/>
            <Counter countValue={countTwo} onClick={()=> setCountTwo(countTwo+1)}/> */}



            <Counter countValue={countOne} onClick={memorizeSetCountOneFunc}/>
            <Counter countValue={countTwo} onClick={memorizeSetCountTwoFunc}/>
         
        </div>
    )
}

export default UseCallbackExample; 