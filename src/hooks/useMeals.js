import { useEffect, useState } from "react";


const useMeals = (searchtext)=>{
    const [meals,setMeals] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/${searchtext}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data?.meals))
        console.log(url)
    },[searchtext])
    return [meals,setMeals]
}
export default useMeals;