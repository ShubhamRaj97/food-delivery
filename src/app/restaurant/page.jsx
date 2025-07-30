'use client'
import {useState} from "react";

import RestaurantSignup from "../_components/restaurantSignup";

import RestaurantLogin from "../_components/restaurantLogin"
import RestaurantHeader from "../_components/restaurantHeader";
import RestaurantFooter from "../_components/restaurantFooter";
import './style.css'

const Restaurant = ()=>{

    const [login, setLogin] = useState(true)
    return(
        <>
        <div className="container">
        <RestaurantHeader/>
        <h1>Restaurant sign up and login pages</h1>
        {
            login? <RestaurantLogin />:<RestaurantSignup/>
        }
        <div>
            <button onClick={()=>setLogin(!login)} className="button-link">
                {login ? "Don't have an account? Signup":"Already have an account? login"}
            </button> 
        </div> 
        </div> 
        <RestaurantFooter/>
       </>
    )
}

export default Restaurant;