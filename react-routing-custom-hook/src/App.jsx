import { useState } from "react";

import "./App.css";
import RecipeList from "./pages/recepies";
import CommentsList from "./pages/comments";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import { useRoutes } from "react-router-dom";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";
import Hooks from "./pages/hooks";
import UseMemoExample from "./pages/use-memo-example";
import UseCallbackExample from "./pages/use-callback-example";

// ONE MORE WAY TO CREATE ROUTES

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
    },
    {
      path:'/react-hook-form' , element:<ReactHookFormExamplePage/>
    },
    {
      path:'/hooks', element:<Hooks/>
    },
    {
      path:"/memo" , element:<UseMemoExample/>
    },
    {
      path:"/callback" , element:<UseCallbackExample/>
    }
  ])
  return element
}










function App() {
  // navigate is used to navigate from one page to another page component
  const navigate = useNavigate()

  return (
    <div className="text-4xl flex flex-col">
      {/* <h1>react routing ,custom hooks and more</h1> */}



    {/* another  method to navigate to different pages */}
  {/* <div>
   <Link to={'/home/recipe-list'} className="border-4 bg-red-800 text-red-100 text-base">ALTERNATIVE WAY OF NAVIGATING PAGES TO RECIPE LIST PAGE</Link>
  </div> */}
















{/* here when we click on the button the navigate function go invoked
 and in navigate function parameter we define that on which component page
 we wanto navigated*/}
{/* <button  onClick={()=> navigate('/home/recipe-list')} className="text-xl border-2 bg-slate-500 text-white ">navigate to recipe list page</button>
<button  onClick={()=> navigate('/home/comments-list')} className="text-xl border-2 bg-slate-500 text-white " >navigate to comments list page</button> */}



      {/* <Routes> */}
{/* routes components helps to switch between the different components pages 
 
 the routes contain multiple route having its unique path name on which 
 a specific page which is defined in the elements propert will be rendered and by changing the route path we can 
 travel from one page to another page
 */}

        {/* now here we want that we want to be on one page either on
      recipe or commonlist and we can surf on both the pages by just chanding the page
      route name */}
{/* <Route path="/recipe-list" element={<RecipeList/>} />
<Route path="/comments-list" element={   <CommentsList />} /> */}



{/* here (:) this means that after the recipe list we added
and routes to dynamic a dynamic path so that we can go to dynamic page 

so when ever we give this colon means we are routing a dynamic
page having a unique id 

so no matter how much value you put in the dynamic path it will still
leads to the poage we put into the element property*/}
{/* <Route path="/recipe-list/:id" element={<RecipeDetailsPage/>} /> */}
 

 {/* CREATING NOT FOUND PAGE */}
 {/* here the "*" means if we put anyother path name apart 
 from the defined on go the page we defined in the element property */}
 {/* <Route path="*" element={<NotFoundPage/>} /> */}
     
      {/* </Routes> */}







{/* USE OF OUTLET COMPONENT AS A COMMON COMPONENT FOR 
ALL THE OTHER PAGES THAT ARE CHILD OF THAT COMMON COMPONENT */}
{/* NOW HERE WHAT WE DO IT CREATE A ROUUTE COMPONENT IN THE ROUTES AND THE 
WE PUT THE ALL THE OTHER ROUTE COMPONENT LIKE RECIPE AND COMMMET COMPONENT
IN THAT ROUTE THAT WE USING TO CREATE A COMMON COMPONENT  */}


{/* <Routes> */}
  {/* here we put other component in the layout component
  which is common component for all its childs component
  and these child component will come after /home path */}
  {/* <Route path="/home" element={<Layout/>} >
<Route path="recipe-list" element={<RecipeList/>} />
<Route path="comments-list" element={<CommentsList />} />
<Route path="recipe-list/:id" element={<RecipeDetailsPage/>} /> */}
  {/* </Route> */}
 {/* <Route path="*" element={<NotFoundPage/>} /> */}
 {/* </Routes> */}









{/* HERE WE CALL THE COMPONENT CUSTOMrOUTES */}
<CustomRoutes/>

    </div>
  );
}

export default App;
