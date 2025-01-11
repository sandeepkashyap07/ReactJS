import { useMemo, useState } from "react";
import useFetch from "../../hooks/use-fetch";

function UseMemoExample() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const[flag,setFlag] = useState(false)



  function filterProductByPrice(getProducts) {
    console.log("this function is getting rendered");
    
    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  }


/**here in the memo hook the filter function is passed and it will
  filter the product acc to conditino we defined in the function and we
  aslso defined the dependency list this is list on which when ever their
  is changes in the dependency list only on that moment the data will we rerednered
  again other wise it will memorize the fetched filter data
 */
const memorizedVersion = useMemo(()=> filterProductByPrice(data?.products),[data?.products])



  if (loading) return <h1>loading the data</h1>;
  console.log(data);

  return (
    <div>
      <h1 style={{color: flag?"red":"blue"}} >Use memo</h1>
      <button onClick={()=>setFlag(!flag)} >toggle Flag</button>
      <ul>
        {
            // when we use this it the fetched data will we rerendered again anad again when we toggle the button
            // filterProductByPrice(data?.products).map(item => 
            // <li key={item.id}>{item.title}</li> )

            // here it will not be rerendered again and again whenever the toggle button is clicked
            // it will not be the same value again and again until the values got changed
           memorizedVersion.map(item => 
            <li key={item.id}>{item.title}</li> )
        }
      </ul>
    </div>
  );
}
export default UseMemoExample;
