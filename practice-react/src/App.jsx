import { useState } from 'react'

import './App.css'
import RecipeLists from './pages/recipe'
import CommentLists from './pages/comments'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import NotFound from './pages/not-found'
import RecipeDetails from './pages/recipe-details'
import Layout from './components/layout'

function App() {
  // usenavigate helps to navigate  from one page another page
const navigate = useNavigate()

  return (
    <div className='flex flex-col'>

<h1 className='text-6xl'>react router practice</h1>

{/* another way to navugate from one page to another page */}
<Link to={'/recipe-list'} className='bg-red-600  text-white mx-10 ' >use to go to recipe list</Link>
<Link to={'/comment-list'} className='bg-red-600  text-white ' >use to go to recipe list</Link>


{/* a way to route from on component page to another page */}
<button onClick={()=>navigate('/recipe-list')  } className='border-4' >click here to go recipe list</button>
<button onClick={()=>navigate('/comment-list')  } className='border-4' >click here to go comment list</button>


{/* simple routing */}
{/* <Routes>
  <Route path='/recipe-list' element={<RecipeLists/>} />
<Route path='/comment-list' element={<CommentLists/>} />
<Route path='/recipe-list/:id' element={<RecipeDetails/>}/>
<Route path='*' element={<NotFound/>}/>
</Routes> */}




<Routes>
  {/* when we want a compoenent common in multiple compoenent
  we create that compoenent as a parent and put remaining as a child compoennt */}
<Route path='/home' element={<Layout/>}>

  <Route path='recipe-list' element={<RecipeLists/>} />
<Route path='comment-list' element={<CommentLists/>} />
<Route path='recipe-list/:id' element={<RecipeDetails/>}/>

</Route>
<Route path='*' element={<NotFound/>}/>


</Routes>

    </div>
  )
}

export default App
