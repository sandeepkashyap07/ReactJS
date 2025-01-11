import { useLayoutEffect, useState } from "react";

function useWindowRezise(){
    const[windowSize,setWindowSize] = useState({
        width:0,
        height:0
})


function handleResize(){
    setWindowSize({
        width:innerWidth,
        height:innerHeight
    })
}
useLayoutEffect(()=>{
    handleResize();
window.addEventListener('resize',handleResize)
return ()=>{
    window.removeEventListener('resize',handleResize)
}
},[])

return windowSize;
}
export default useWindowRezise;