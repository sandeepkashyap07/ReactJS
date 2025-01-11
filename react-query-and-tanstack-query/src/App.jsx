



import { useRoutes } from 'react-router-dom'
import ReactQueryDemo from './react-query-demo'
import './App.css'


function CustomRoutes(){
  const element = useRoutes([
    {
      path:'/react-query-demo' , element:<ReactQueryDemo/>
    }
  ])
  return element
}

function App() {

  return (
   <div className='text-4xl' >
    <CustomRoutes/>
   </div>
  )
}

export default App
