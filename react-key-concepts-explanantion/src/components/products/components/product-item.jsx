import style from "./product-item.module.css"
function ButtonComponent(){
    return(
        <button className={style.buttonstyle}>click</button>
    )
    // this component will be passed to the compoenent below
}

function  ProductItem ({single_data,id}){
    return(
        <div className={style.productTitle} key={id}>
            <p> {single_data}</p>
            <ButtonComponent/>

        </div>
    )
}
export default ProductItem;

/*here what happening is that we are creatting a product item 
which is sent to product list and then that will be exported to 
app.jsx this is called nested components  */

// app.jsx <-  productlist <- productitem <- button