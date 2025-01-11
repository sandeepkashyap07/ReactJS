import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";

import './style.css'


const initialState = true

/*so here the prop named name that we created in app.jsx
is being recieved as named props */
function ProductList({name,city,listOfdummyPorductData}){
    
    // const flag = true;

//     function renderTextBlock(getFlag){
// return getFlag ?<h4>name is {name} city is {city}</h4>:
//                 <h4>hello world</h4>

//     }


//  --- 3rd way 
// const renderTextBlock = flag ?<h4>name is {name} city is {city}</h4>:
//                       <h4>hello world</h4>


//--4th way

// let renderTextBlock = null;
// if(flag){
//     renderTextBlock = <h4>name is {name} city is {city}</h4>
// }else{
//     renderTextBlock =  <h4>hello world</h4>

// }



//  -- USE STATE
// this is a usestate hook having state variable in it
/*here the flag is state variable and the setflag is the functiono that sets the
value */
// here the flag intial value is false
/* here flag is the variable that contain the value and the setflag is to
update the value or to change the value and the usestate is used to assign the
value to the flag*/
const[flag,setFlag] = useState(initialState)
const[count,setCount] = useState(0);
const [changeStyle,setChangeStyle] = useState(false)
function handleToggleText (){
    setFlag(!flag)
}

function handleIncreaseCount(){
    setCount(count+1)
}

/*USEEFFECT use
useeffect will render only once when the page is laoded if their is
no  dependency 

the useffect will be executed first its code then anyone , like here firslty 
the flag is true but here it changes into false so the false condition
will be shown first as compared to in general flag true
 */
useEffect(() => {
    setFlag(!flag)
    console.log("run only once page load")
   
}, []);// this will only run on page laod once because we dont have any dependencies

useEffect(() => {
    // console.log("count changes");
    /*here if the count is 10n then the setchangestyle is  gonna true */
    if(count ===10) setChangeStyle(true);
    
}, [count]); //here we are taking count as dependency if any changes is done on it will show effect on count

console.log(changeStyle)

// function ProductList({name,city})
/*here we already destructered the props  */



    // console.log(props)
    // destructure
    // const{name,city,dummyPorductData} = props;
    return(
        <div   >
            <h3 className="title" >ECommerce prject</h3>
            
            <button onClick={handleToggleText}>toggle text</button>

            {/* imported it here and along with this 
            productlist will be exported to app.jsx */}
            {/* <ProductItem/> */}

{
    flag? <h4>name is {name} city is {city}</h4> : <h4>hello world</h4>
}

            {
                // 1st way
                // here what it means that if flag is true
                // then it will render first h4 otherwise another one

                // flag ?
                //  <h4>name is {name} city is {city}</h4>
                //  :<h4>hello world</h4>


                //  this can be donw by creating a function

            }

{
    // 2nd  way is function creation
    // renderTextBlock(flag)
}


{
    // 3rd way
    // renderTextBlock
}

{
    // 4th way
    // renderTextBlock
}

{/*when ever a dynamic value comes and every javascript code will be enclosed with this {} */}


<div className="text-xl">
    <button style={{backgroundColor: changeStyle?"red":"yellow"}} onClick={handleIncreaseCount}>increase Count</button>
    <p>count is {count}</p>
</div>
            {
                <ul>
                    {
                        listOfdummyPorductData.map((single_data,id) =>

                            /*so what we want to do here is to pass value
                            of data into productitem component */
                            

                             <ProductItem single_data = {single_data} key={id}/>
                            
                            // <li className="list-disc" key={id}>{single_data}</li>
                        )
                        /*so here we have used key prop because key prop 
                        helps react to uniquely identify each lists value
                        so that it can keep track and upadte it 
                        beacuse in list multiple value with same tag
                        is mapped so we need to unqiuely identify each list
                       while rendering thats why we use key prop */
                    }
                </ul>
            }
        </div>
       
    )
}

export default ProductList;