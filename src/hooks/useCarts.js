import { useEffect, useState } from "react"
import { getCart } from "../components/FakeDb/FakeDb"

const useCarts = (meals) =>{
    const [carts,setCarts] = useState([])
    useEffect (()=>{
        const storedCart = getCart()
        let savedCart=[];
        for (let id in storedCart){
            const addedProduct = meals.find(meal =>meal.idMeal === id)
            if(addedProduct){
                addedProduct.quantity = storedCart[id]
                savedCart.push(addedProduct)
                
            }
        }
        setCarts(savedCart)
    },[meals])
    return [carts,setCarts];
   
}
export default useCarts;