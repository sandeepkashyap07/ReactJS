import FormComponent from "./component/form"
import LoginComponent from "./component/login/index.jsx"
import RegisterComponent from "./component/register/index.jsx"
import LoginComponentP from "./practice-component/login-p/index.jsx"
import AnotherFormComponent from "./practice-form.jsx"

function App() {

  return (
    
  <div className='font-extrabold  text-3xl   '>
    
    {/* <FormComponent/> */}
    {/* <AnotherFormComponent/> */}

<div className="flex gap-10 justify-around">
  {/* <LoginComponent /> */}
  {/* <RegisterComponent/> */}
  <LoginComponentP/>
</div>

  </div>
  )
}

export default App
