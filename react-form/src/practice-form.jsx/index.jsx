import { useState } from "react"


function AnotherFormComponent(){
    // THIS IS GENERAL METHOD
    
    const[nameValue,setNameValue]=useState("")
    const[email,setEmail]  = useState("")


    function handleOnName(event){
const{value} = event.target
setNameValue(value)
    }

    function handleOnEmail(event){
const{value} = event.target
setEmail(value)
    }


    // --DYNAMIC METHOD
    // const[formData,setFormData]=useState({
    //     name:"",
    //     email:""
    // })
    
    
    // function handleOnChange(event){
        //     const{name,value} = event.target
        //     setFormData({
            //         ...formData,
            //         [name]:value
            //     })
            
            // }
            
            
            function handleSubmit(event){
                event.preventDefault();
                // const{name,value} = event.target
                // console.log(formData)
                console.log("Form Submitted:", { name: nameValue, email: email });

            }
            
            // console.log(formData)
            console.log("Form Submitted:", { name: nameValue, email: email });
            return(

<div>
<h1>this is another form component</h1>
<form action="" onSubmit={handleSubmit}>

<input type="text"
// value={formData.name}
value={nameValue}
name="name"
id="name"
// onChange={handleOnChange}
onChange={handleOnName}
placeholder="enter you name"
className="border-2 border-black"
/>
<input type="email"
value={email}
name="email"
id="email"
// onChange={handleOnChange}
onChange={handleOnEmail}
placeholder="enter you email"
className="border-2 border-black"
 />
<button className="bg-red-800 text-white" type="submit">submit</button>
</form>



</div>
)


}
export default AnotherFormComponent;