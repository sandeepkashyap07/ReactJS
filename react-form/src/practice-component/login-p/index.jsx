import { useState } from "react"
import CommonFormP from "../common-form-p";

import { loginFormElementsP } from "../../config-p";

const initialState ={
    email:" ",
    password:" ",

}

function LoginComponentP(){
    const[loginformData,setLoginFormData]  = useState(initialState);
    
function onHandleSubmit(event){
    event.preventDefault();
    console.log(loginformData,"login data");
}

return(
    <div>
     <h1>   login page Component</h1>
<CommonFormP
formData={loginformData}
setFormData={setLoginFormData}
formControls={loginFormElementsP}
buttonText={"login"}
onHandleSubmit={onHandleSubmit}


/>
     
    </div>
)





}
export default LoginComponentP;