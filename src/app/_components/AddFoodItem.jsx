'use client';
import {useState} from "react";
import { useRouter } from 'next/navigation';
const AddFoodItems = () => {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [path, setImagePath] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);

    const handleAddFoodItems= async()=>{
        const newFoodItem = {name, price,path,description}

        if(!name || !price || !path || !description){
            setError(true);
            return
        }else{
            setError(false)
        }
        let resto_id;
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        if (restaurantData){
            resto_id = restaurantData.id
        }
        let response = await fetch("http://localhost:3000/api/restaurants/foods",{
            method: "POST",
            body: JSON.stringify({name, price,path,description, resto_id}),
        });
        response = await response.json();
        if (response.success){
            alert("Food item added successfully")
        }
    }
    return (<div className="container">
        <h1>Food Items</h1>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Food Item" 
            value={name} onChange={(e) => setName(e.target.value)} />
            {
                error && !name && <span className="input-error">Please enter class name</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Price" 
            value={price} onChange={(e) => setPrice(e.target.value)} />
            {
                error && !price && <span className="input-error">Please enter price</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Path" 
            value={path} onChange={(e) => setImagePath(e.target.value)} />
            {
                error && !path && <span className="input-error">Please enter image</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Description" 
            value={description} onChange={(e) => setDescription(e.target.value)} />
            {
                error && !description && <span className="input-error">Please enter valid description</span>
            }
        </div>

        <div className="input-wrapper">
            <button onClick={(handleAddFoodItems)} className="button">Add Food Item</button>
        </div>
    </div>)

}

export default AddFoodItems;