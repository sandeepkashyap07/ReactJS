import { useState } from "react";

function FormComponent() {
  const [namevalue, setNameValue] = useState("");
  const [emailvalue, setEmailValue] = useState("");
const[formDate,setFormData] = useState({
    // here the name must be same as the name we have gievn int he input field
    name:"",
    email:""

})



//   THIS IS GENERAL METHOD AND ITS NOT SCALABLE FORM
//   function handleInputChange(event) {
//     console.log(event);
//     // ḥere we have an event in which their is value field and we will grasp that
//     // value field
//     const { value } = event.target;
//     setNameValue(value);
//   }

//   function handleEmailChange(event) {
//     const { value } = event.target;
//     setEmailValue(value);
//   }

  function handleSubmit(event) {
    /*so here preventdefault means that the default behaviour of the
    browser when we clcik on submit the page get refreshed this will
    prevent the page from refreshing */
    event.preventDefault();
    //call api here and pass the name value
    // here the namevalue got printed whatever we write in the placeholder
    console.log(namevalue,emailvalue, "namevalue");
  }


// HERE WE WILL CREATE A FUNCTION THAT IS FOR SCALABLE FORM
/* IN WHICH WE CAN HAVE ANYNUMBER OF DIFFERNET DATA 
VALUE WITHOUT CREATING SEPERATE method function
 FOR EACH PLACEHOLDER FIELD*/

function handleOnChange(event){
    /* so here it means that the event knows that the field we are typing
    in is a name or email field becauase we have named each field*/
//  console.log(event.target.name);

//  here we are destructruing the name and its value
// means name is email or asny field name and its value is something we have typed
 const{name,value} = event.target 
 
 setFormData({
    /*so we are destructuring the formdata beacuase
    when we change the input field the data in other input field remain 
    their not going to vanish other wise it will be basnished */
    ...formDate,
    /*here the name from the usestate which is from the name of the input name
    will havae the value corresponding to the value accordinig to the name */
    [name]:value

    
 })
}
console.log(formDate)

  return (
    <div className="flex flex-col">
      <h1>Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {/* here anything in the value cannot be changed'
        in the place holder and right now we have set it as nameValue
        which is empty */}
        <input
        //   value={namevalue}

        // from formdata we will take name 
          value={formDate.name}
          name="name"
          id="name"
          placeholder="enter your name"
          type="text"
          className="border-2 border-black"
          /*onchange is used to update the value in the value feild
        and so when ever we try to type in the placeholder
        we will call  handleInputChange function to update it*/
        //   onChange={handleInputChange} //for general onchange where for each input we will create a different method


          onChange={handleOnChange} //dynamic form

        //   UPPER THING CAN ALSO BE DONE LIKE THIS
        // HERE WE SIMPLY PUTTING THE THING OF THE FUNCTION HERE 
        //   onChange={(event)=>setFormData({
        //     ...FormData,
        //     [event.target.name]:event.target.value
        //   })} 
        />

        <input
        //   value={emailvalue}
          value={formDate.email}
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          className="border-2 border-black"
        //   onChange={handleEmailChange}
          onChange={handleOnChange}
        />
        {/* the type submit have a onsubmit property to submit the data in database */}
        <button type="submit" className="border-2 bg-slate-900 text-white">
          Sumbit
        </button>
      </form>
    </div>
  );
}
export default FormComponent;
