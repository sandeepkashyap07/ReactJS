const productList = [
    {
        title:'product1',
        id:1
    },
    {
        title:'product2',
        id:2
    },
    {
        title:'product3',
        id:3
    },
    {
        title:'product4',
        id:4
    },
    {
        title:'product5',
        id:5
    },
]

export const fetchListOfProducts = async()=>{
    await new Promise((resolve)=> setTimeout(resolve,1000))
    return productList
}

export const addNewProduct = async(productName)=>{
    await new Promise((resolve)=> setTimeout(resolve,1000))
    const newlyCreatedProduct = {
        id:productList.length+1,
        title : productName,

    }
    productList.push(newlyCreatedProduct)
    return newlyCreatedProduct;
}