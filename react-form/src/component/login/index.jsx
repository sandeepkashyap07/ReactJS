import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialState ={
    email: "",
    password: "",
}

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState(initialState);
  
  function onHandleSubmit(event){
      event.preventDefault()
      console.log(loginFormData, "login data");

    //   after printing the value on output it will again reset the value to empty
    
      setLoginFormData(initialState)
}

  return (
    <div>
      <h1>login page component</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={'login'}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}
export default LoginComponent;
