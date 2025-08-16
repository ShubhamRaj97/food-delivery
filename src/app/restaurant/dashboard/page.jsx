'use client'
import RestaurantHeader from "../../_components/restaurantHeader";
import './../style.css'
import AddFoodItems from "../../_components/AddFoodItem";
import { useState } from "react";
import FooditemList from "../../_components/FoodItemList";

const restaurantDashboard =()=>{
    const [addItem, setAddItem] = useState(false)
    return ( 
        <div> 
            <RestaurantHeader/>
            <button onClick={()=> setAddItem(true)}>Add food</button>
            <button onClick={()=> setAddItem(false)}>Dashboard</button>
            {
                addItem ? <AddFoodItems/> : <FooditemList/>
            }
        </div>
    )
}

export default restaurantDashboard;