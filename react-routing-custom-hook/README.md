DIFFERENCE BTW USEEFFECT AND USELAYOUT HOOK IS
-- useEffect will run when once all the DOM element will be rendered in the browser

--useLayout will run before all the DOM elements are rendered




--> react routingh --react is a single page application so routing means 
when ever we want to go to another page of the react we change the path(route) of the page so that we can go to that page this is done (by using react router dom) 
like localhost:5173/A so we are on A page
now we change the path
localhost:5173/B so we are on B page



and to do routing we need to wrap the app component 
to BrowserRouter component in the main.jsx


--create pages then call those pages in app jsx 
in app.jsx we use routes component in that routes compponent we call route component where we defined the path name for the component we want to rendered 
and that component is being present in the element propoerty section
for example

<Routes>
<Route path="/comments-list" element={   <CommentsList />} />
<Routes>

then we create a button so that we can jump from one page component to another
so we use the useNavigate hook to navigaet between two or multple pages

the create a button where we use onclick and by clicking the navigate function got invoked and in the parameter of the navigate we put the path name of the component page we want to be destined

<button  onClick={()=> navigate('/comments-list')} className="text-xl border-2 bg-slate-500 text-white " >navigate to comments list page</button>


--- we can also use <Link><Link> method to navigate to different page component
like :-    <Link to={'/recipe-list'} className="border-4 bg-red-800 text-red-100">ALTERNATIVE WAY OF NAVIGATING PAGES TO RECIPE LIST PAGE</Link>


--DYNAMIC ROUTING OF PAGE



{/* here (:) this means that after the recipe list we added
and routes to dynamic a dynamic path so that we can go to dynamic page 

so when ever we give this colon means we are routing a dynamic
page having a unique id 

so no matter how much value you put in the dynamic path it will still
leads to the poage we put into the element property*/}
<Route path="/recipe-list/:id" element={<RecipeDetailsPage/>} />



 {/* CREATING NOT FOUND PAGE */}
 {/* here the "*" means if we put anyother path name apart 
 from the defined on go the page we defined in the element property */}
 <Route path="*" element={<NotFoundPage/>} />



--- COMMON LAYOUT(<Outlet/>) component the common layout 
component is used to make a common component like header that will be rendered in every page without importing the that header page in every page component

-- firslty create a header component and send it to 
layout component where we use a <Outlet/> component to make it as common component for its child component
then import that layout component into app.jsx where 
we create a route in which we put all other componnet
inside it and the parent component will be layout component and its functionality will be passed to all its child components


<Routes>
  {/* here we put other component in the layout component
  which is common component for all its childs component
  and these child component will come after /home path */}
  <Route path="/home" element={<Layout/>} >
<Route path="recipe-list" element={<RecipeList/>} />
<Route path="comments-list" element={   <CommentsList />} />
<Route path="recipe-list/:id" element={<RecipeDetailsPage/>} />
  </Route>
 <Route path="*" element={<NotFoundPage/>} />
 </Routes>


 ----ONE MORE WAY TO CREATE ROUTES
 
function CustomRoutes(){
  const element = useRoutes([
    {
      path:'/home' ,element:<Layout/>,
      children:[
        
          {path:'recipe-list', element:<RecipeList/>},
          {path:'comments-list' , element:<CommentsList/>},
          {path:'recipe-list/:id' , element:<RecipeDetailsPage/>}
        ,
      ],
    },
    {
      path:'*' ,element:<NotFoundPage/>
    }
  ])
  return element
}


-- what we are doing here so we create a component toroute all the other components by using useRoute hooks and here each and every route is a array of object having its own path and element and it contain a children array of object to route child route to its parent route

function CustomRoutes(){
  const element = useRoutes([
    {
      path:'/home' ,element:<Layout/>,
      children:[
        
          {path:'recipe-list', element:<RecipeList/>},
          {path:'comments-list' , element:<CommentsList/>},
          {path:'recipe-list/:id' , element:<RecipeDetailsPage/>}
        ,
      ],
    },
    {
      path:'*' ,element:<NotFoundPage/>
    }
  ])
  return element
}





--CUSTOM HOOK -> ITS A custom reusable hook where we write logic at one place for a specific task performance so that we dont need to create write again and again the same thing


// first custom hook
-- usefetch() -> we create a custom useFatch hook
which fetch data from a url its like a create a function for donig specific task for a certain
parameter once created we can all it again and again with our rewriting everything here we created a data fetching hook and once created we can simply put any url link conataining data and bt calling this hook with any url we can fetch data 

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


// SECOND CUSTOM HOOK
useWindowResize() -> this hook is used to get the deminsions of the window when we resize the window 
import { useLayoutEffect, useState } from "react";

function useWindowRezise(){
    const[windowSize,setWindowSize] = useState({
        width:0,
        height:0
})


function handleResize(){
    setWindowSize({
        width:innerWidth,
        height:innerHeight
    })
}
useLayoutEffect(()=>{
    handleResize();
window.addEventListener('resize',handleResize)
return ()=>{
    window.removeEventListener('resize',handleResize)
}
},[])

return windowSize;
}
export default useWindowRezise;







//REACT-HOOK-FORM
we will create a custom hook to create a form
and before that we will install npm i react-hook-form
import { useForm } from "react-hook-form";

function ReactHookFormExamplePage() {
  // the useform contain all the required method functions to create a form
  // here the error is nested property of formstate so we extract it like this
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(FormData) {
    // the onsubmitform will provide the form data
    // here the register data will be consoled
    console.log(FormData);
    reset()
  }

  return (
    <div>
      <h1>React Hook Form</h1>

      {/* so here the handle submit will conatin the register value and pass it in the
onsubmitform */}
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          {/* registering each input we can also put optional fields alos */}
          <input
            {...register("email", {
              required: true,
            })}
            className="border-2"
            name="email"
            type="email"
            placeholder="enter your email"
            />
            {/* to check errors */}
          {
              errors.email && errors.email.type === 'required'?
              <p className="text-red-700">Email is required</p> : null
          }
        </div>
        <div>
          <label htmlFor="">passwrod</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            className="border-2"
            name="password"
            type="password"
            placeholder="enter you password"
            />
            {
                errors.password && errors.password.type === 'required'?
                <p className="text-red-700">password is required</p> : null
            }
            {
                errors.password && errors.password.type === 'minLength'?
                <p className="text-red-700">password must be atleast 8 characters</p> : null
            }

        </div>
        <button
          className="border-4 border-black bg-cyan-700 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReactHookFormExamplePage;



//useRef hook
-- useref is used to reference a value that is not needed to rendering
useref is helpful to access the DOM elements to manuplating your DOm elements and return a mutable property and it must have a initial state


//useMemo hook is used to stop the rerendering of a data or element when ever their is some changes in other elements
fro example if we are fetching some data it will take some time to fetch on the other hand we have a simple toggle button on when we toggle the button whole page is getting rerendered also the fetching data process also so to stop the data fetching rerendered again and again we put the fetching data function in usememo function 

what ever inside the useMemo hook comes it will remembers the value and when ever the page is refreshed or changed it simply throw the remembered value reather than fetching the data again and again
and only the fetch data function will be rendered again when the data is chenged then it will be renderde


// useCallback hook usecallback  Returns a memoized callback function and usememo Returns a memoized value


callback make the function freeze from rerendereing even if the state changes just like the countone ferezes when the counttwo is called
callback memoise a whole function 