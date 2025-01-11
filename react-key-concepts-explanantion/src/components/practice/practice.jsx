import { useEffect, useState } from "react"


function Practice(){
const[change,setChange] = useState(false)
const [count,setCount] = useState(0)
const[users,setUsers] = useState([])
const[condition,setConditoin] = useState(false)
function changeIt(){
    setChange(!change)
}    


function increaseValue(){
    setCount(count+1)
}

async function Users(){

    let apiresponse = await fetch('https://dummyjson.com/users')
    let result = await apiresponse.json()

    if(result?.users){

        setUsers(result?.users)
    }
else{
    setUsers([])
}
}

console.log(condition);



    return (
        <>
        <div className="flex flex-col">

       <h1>practice session</h1>
     <button  className="border-2 bg-red-300 text-white " onClick={changeIt}>change it</button>
{
    change? <h1>this is true change</h1>: <h1>this is a false change</h1>
}

<button onClick={increaseValue} className="border-2 bg-blue-800 text-white " >counter</button>
{
    count
}

<button onClick={Users}>
    fetch users data
<ul>
               {
                   
                   users && users.length>0?
                   users.map(userItem =>
                    <li key={userItem.id}>
                        <p>{userItem.firstName}  {userItem.lastName}</p>
                    </li> ) : <h1>no user found try again</h1>

}
            </ul>
</button>


</div>
            </>  
    )
}

export default Practice






// import { useEffect, useState } from "react"

// const value = false;
// const counter = 0;

// function Practice(){


//     const[change,setChange] = useState(value)
// const [count,setCount] = useState(counter)
// const [color,setColor] = useState(false)

//     function toggleText(){
//          setChange(!change)
//     }

//     function incrementCounter(){
//         setCount (count+1)
//     }

//     useEffect(() => {
//           if(count >=10) setColor(true);
        
//     }, [count]);

//     return (
//         <>
//         <button  onClick={toggleText} className="font-extrabold text-3xl text-red-700 border-2" >
//             toggle text</button>

//             {
//                 change?<h1>i am sandeep kashya</h1>
//                 : <h1> i win again</h1>
//             }

//             <button onClick={incrementCounter} className="font-extrabold text-3xl text-blue-700 border-2" >counter</button>

//             {
//             <h1 style={{backgroundColor:color?"red":"blue"}} >count : {count}</h1> 
        
             
                
//             }

//             </>
//     )
// }

// export default Practice