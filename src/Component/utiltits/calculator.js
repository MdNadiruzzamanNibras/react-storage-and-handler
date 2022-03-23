const add =(first, second)=>{
    return first+second
}
const mutiply =(first, second)=>{
    return first*second
}
const getTotalItem =products=>{
    const reducer=(previous, current)=>previous + current.price
    const total = products.reduce(reducer,0)
    return total
}
export  {
    add, 
    mutiply,
getTotalItem as getTotal};