import { useEffect, useState } from "react";



/*so here we created a custom hook of fetching data 
that contain url and options as null and in that we are creating a 
usestate hook of data , loading, error and we use useeffect hook if the url 
is present then this useeffect hook will be invoked */
function useFetch(url,options={}){
const[data,setData] = useState(null)
const[loading,SetLoading] = useState(false);
const[error,setError] = useState(null);


async function fetchData(){
    SetLoading(true);
    try{
        const response = await fetch(url,{...options});
/*if here the response is not present then it will throw the error */
         if(!response.ok) throw new Error(response.statusText);
         const result = await response.json();
         if(result){

             setData(result)
             setError(null)
             SetLoading(false)
         }

    } catch(error){
        console.log(error);
        SetLoading(false);
        setError(error)
    }
}


/*if there is url in the usefetch function then in useeffect the fetchdata function
will be invoked */
useEffect(()=>{
    fetchData()
},[url]);

return{
    data, loading , error
}
}

export default useFetch;