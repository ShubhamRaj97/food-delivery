import {useState} from "react";

const RestaurantSignup = ()=> {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setc_password] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')


   const handleSignup = async () => {
    try {
        const response = await fetch('http://192.168.1.79:3001/api/restaurants', {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, name, city, address, contact })
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Signup failed:", error);
    }
    };



    return <>
        <>SignUp page</>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter the email" className = "input-field" value={email}
                onChange={(event)=>setEmail(event.target.value)}></input>
            </div>
             <div className="input-wrapper">
                <input type="password" placeholder="password" className = "input-field"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="confirm password" className = "input-field"
                value={c_password}
                onChange={(event)=>setc_password(event.target.value)}></input>
            </div>
             <div className="input-wrapper">
                <input type="text" placeholder="restaurant name" className = "input-field"
                value={name}
                onChange={(event)=>setName(event.target.value)}></input>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="city" className = "input-field"
                value={city}
                onChange={(event)=>setCity(event.target.value)}></input>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="address" className = "input-field"
                value={address}
                onChange={(event)=>setAddress(event.target.value)}></input>
            </div>
             <div className="input-wrapper">
                <input type="text" placeholder="enter contact number" className = "input-field"
                value={contact}
                onChange={(event)=>setContact(event.target.value)}></input>
            </div>

             <div className="input-wrapper">
               <button className="button" onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    </>
}

export default RestaurantSignup;