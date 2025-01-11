// import { useContext } from "react"
// import { GlobalContext } from "../../context"

// function ContextButtonComponent(){
//     const{setTheme,theme} = useContext(GlobalContext)
//     // this is one way to change  or alter the value by clicking
//     return <button className="border-4" onClick={()=> setTheme(theme ==="light"?"dark":"light")}>change theme</button>

// }
// export default ContextButtonComponent


/*ANOTHER WAY */
import { useContext } from "react"
import { GlobalContext } from "../../context"

function ContextButtonComponent(){
    const{handleChangeThemeOnButtonClick} = useContext(GlobalContext)
    // this is one way to change  or alter the value by clicking
    return <button className="border-4" onClick={handleChangeThemeOnButtonClick}>change theme</button>

}
export default ContextButtonComponent