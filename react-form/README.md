# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



how to create a dynamic react form

--> firstly creata config folder in which we will describe all the configuration like form name type label placeholder and everyhting required

->> then we will creata a folder or regsiter in in this file we will
create a usestate of regsiter  formdata, setformdata----- and call the 
Common form page that common form element contain formcontrol prop with 
registerform elemsnts example
<!-- <CommonForm
      formControls={registerFormElements}
      formData={registerFormData}
      setFormData={setRegisterFormData}
      buttonText={"register"}
      onHandleSubmit={handleRegisterOnSubmit}
      submit function will remain same like the previous ones
      /> -->

then move to common form file 
the commonform function will take all the props value in the parameter
from the above code
their we map the formcontrols with a function named render

--in render function we will call the common input component from 
common input file in render function we will assign the event.the name of  various input fields
<!-- content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            type={getCurrentElement.type}
            onchange={(event)=>
                setFormData({
                    ...formData,
                    [event.target.name] : event.target.value
                })} -->

                and before this we will check the component type from this
                
<!-- const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
}; -->

then the value passed in the common input will be passed as props and come into the common input file their we will assign the each prop with
its respective place

loginElements(config)  --> commonInput -> commonform

