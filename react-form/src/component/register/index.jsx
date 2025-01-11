import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialStateRegsiter = {
  name: "",
  email: "",
  password: "",
};

function RegisterComponent() {
  const [registerFormData, setRegisterFormData] =
    useState(initialStateRegsiter);


function handleRegisterOnSubmit(event){
   event.preventDefault();
   console.log(registerFormData,"regiter data");
   
   setRegisterFormData(initialStateRegsiter)
}
  return (
    <div>
      <h1>register page component</h1>
      <CommonForm
      formControls={registerFormElements}
      formData={registerFormData}
      setFormData={setRegisterFormData}
      buttonText={"register"}
      onHandleSubmit={handleRegisterOnSubmit}
      />
  
    </div>
  );
}
export default RegisterComponent;
