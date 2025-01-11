
import './App.css'
import ClassBasedComponent from './components/class-based-component';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FunctionalComponent from './components/function-based-component';
import Practice from './components/practice/practice';
import ProductList from './components/products';
import UseReducerExample from './components/use-reducer-example';
import Users from './components/user';


const dummyPorductData = ['product-1 ' ,'product-2','product-3'];

function App() {
  




  return (
    <>
     <h1 className='font-extrabold text-2xl'>hello react create react app</h1>
     <h1>REACT JS COMPONENTS</h1>
     {/* here we imported that class base component  */}
     {/* <ClassBasedComponent/> */}

     {/* here we have imported the functional-component */}
     {/* <FunctionalComponent/> */}


         {/*this is key-name and value and this whole is prop */}
     {/* <ProductList name="sandeep kashyap" city="barnala" listOfdummyPorductData = {dummyPorductData} /> */}
     {/* so here we want to pass this prop named name to the
     productList component */}
     {/* its like function paramerter */}

     <Practice/>

     {/* <Users/> */}

{/* <ContextButtonComponent/>
<ContextTextComponent/> */}

{/* <UseReducerExample/> */}
    </>
  )
}

export default App;
