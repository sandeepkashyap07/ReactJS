import { useEffect, useState } from "react"



function Users(){
const[usersList,setUserList] = useState([]);
const[pending,setpending] =useState(false)
// const[show,setShow] = useState(false)


async function fetchAllUsers(){

    try{
      setpending(true)
         const apiresponse = await fetch('https://dummyjson.com/users')
         const result = await apiresponse.json()
        // console.log(result);
        // if here the result contain users array then
        if(result?.users){
            setUserList(result?.users)
            setpending(false)
        }else{
            setUserList([])
            setpending(false)
        }
    }
    catch(error){
console.log(error)
    }

}

function showUsers(){
  fetchAllUsers()
}

// useEffect(()=>{
//  fetchAllUsers()
// },[])



// console.log(usersList);
if(pending) return <h1>fetching users data</h1>
    return(
        <div>

            
                <h1 className="text-xl">All Users lists</h1>
            <button className="text-xl" onClick={showUsers} >click to show users</button>
            <ul>
               {
           
                    usersList && usersList.length>0?
                    usersList.map(userItem =>
                        <li key={userItem.id}>
                        <p>{userItem.firstName}  {userItem.lastName}</p>
                    </li> ) : <h1>no user found try again</h1>

               }
            </ul>
        </div>
    )
}
export default Users