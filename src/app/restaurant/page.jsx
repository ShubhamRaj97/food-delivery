'use client'
import {useState} from "react";

import RestaurantSignup from "../_components/restaurantSignup";

import RestaurantLogin from "../_components/restaurantLogin"

const Restaurant = ()=>{

    const [login, setLogin] = useState(true)
    return(
        <>
        <h1>Restaurant sign up and login pages</h1>
        {
            login? <RestaurantLogin />:<RestaurantSignup/>
        }
        <div>
            <button onClick={()=>setLogin(!login)}>
                {login ? "Don't have an account? Signup":"Already have an account? login"}
            </button> 
        </div>  
       </>
    )
}

export default Restaurant;