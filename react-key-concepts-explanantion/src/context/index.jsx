import { createContext, useState } from "react";

// create a  context
export  const GlobalContext = createContext(null);

// create a global state that receive component as a child
function GlobalState({children}){



    /*here we have created a state having theme value as
    light now we want to provide this value to anyother state in the whole area */
    const[theme,setTheme] =useState("light")

/*THIS IS THE SECOND WAY TO ALTER THE VALUES */
function handleChangeThemeOnButtonClick(){
    setTheme(theme ==="light"?"dark":"light")
}


    // here the globalcontext is a provider to the childern that are warped
    // by the globalcontext and the child is the consumer
    /*here the globalContext will provide the state and its value and
    the child state is consumer get or consume the thriugh component */
    // return <GlobalContext.Provider value={{theme,setTheme}}>{children}</GlobalContext.Provider>




    return <GlobalContext.Provider value={{theme,handleChangeThemeOnButtonClick}}>{children}</GlobalContext.Provider>
    /* here we have passed the value of theme in provider and now 
     every state can access it */
}

export default GlobalState
/*and now it will not start working simply firstly you need to 
wrapp the root component by the global state */