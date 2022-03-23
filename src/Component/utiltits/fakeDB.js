const addToDB=id=>{
    let shopingCart ;

    const storeCart= localStorage.getItem('shoping-cart');
    if(storeCart){
        shopingCart= JSON.parse(storeCart)
    }
    else{
        shopingCart ={}
    }
    const quanty = shopingCart[id]
    if(quanty){
        const newQuanty = quanty+1;
    
        shopingCart[id]=newQuanty
    }
    else{
        shopingCart[id]=1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
}
const removeCart= id =>{
    const storeCart =localStorage.getItem('shoping-cart');
    if(storeCart){
        const shopingCart = JSON.parse(storeCart)
        if(id in shopingCart){
            delete shopingCart[id]
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))

        }
    }
}
const deleteRemoveItem=()=>{
    localStorage.removeItem('shoping-cart')
}
export{addToDB,
removeCart,
deleteRemoveItem}