'use client'
import RestaurantHeader from "../../_components/restaurantHeader";
import './../style.css'
import AddFoodItems from "../../_components/AddFoodItem";
import { useState } from "react";

const restaurantDashboard =()=>{
    const [addItems, setAddItems] = useState(false)
    return ( 
        <div> 
            <RestaurantHeader/>
            <button>Add food</button>
            <button>Dashboard</button>
            <AddFoodItems/>
            <h1>Welcome to dashboard</h1>
        </div>
    )
}

export default restaurantDashboard;