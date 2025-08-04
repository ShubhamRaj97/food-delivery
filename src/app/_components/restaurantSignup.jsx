'use client';
import {useState} from "react";
import { useRouter } from 'next/navigation'; // for App Router

const RestaurantSignup = ()=> {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setc_password] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const router = useRouter();
    const [error, setError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


   const handleSignup = async () => {
    // Check for password mismatch first
        if (password !== c_password) {
            setPasswordError(true);
            return; // exit early if mismatch
        } else {
            setPasswordError(false);
        }

        // Check for empty fields
        if (!email || !password || !c_password || !name || !city || !address || !contact) {
            setError(true);
            return; // exit early if missing
        } else {
            setError(false);
        }

    try {
        const response = await fetch('/api/restaurants', {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, name, city, address, contact })
        });

       const data = await response.json();
       console.log(data);
       if (data.success) {
        const { restaurant } = data;
        delete restaurant.password;
        localStorage.setItem('restaurantUser', JSON.stringify(restaurant));
        router.push('/restaurant/dashboard');
      }
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
                {
                    error && !email && <span className="input-error">Please set the valid email</span>
                }
            </div>
             <div className="input-wrapper">
                <input type="password" placeholder="password" className = "input-field"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}></input>

                {
                    passwordError && !password && <span className="input-error">password and confirm password should be same</span>
                }
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="confirm password" className = "input-field"
                value={c_password}
                onChange={(event)=>setc_password(event.target.value)}></input>
                {
                    passwordError && !c_password && <span className="input-error">password and confirm password should be same</span>
                }
            </div>
             <div className="input-wrapper">
                <input type="text" placeholder="restaurant name" className = "input-field"
                value={name}
                onChange={(event)=>setName(event.target.value)}></input>
                {
                    error && !name && <span className="input-error">Please set the valid name</span>
                }
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="city" className = "input-field"
                value={city}
                onChange={(event)=>setCity(event.target.value)}></input>
                {
                    error && !city && <span className="input-error">Please set the valid city</span>
                }
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="address" className = "input-field"
                value={address}
                onChange={(event)=>setAddress(event.target.value)}></input>
                {
                    error && !address && <span className="input-error">Please set the valid address</span>
                }
            </div>
             <div className="input-wrapper">
                <input type="text" placeholder="enter contact number" className = "input-field"
                value={contact}
                onChange={(event)=>setContact(event.target.value)}></input>
                {
                    error && !contact && <span className="input-error">Please set the valid contact number</span> 
                }
            </div>

             <div className="input-wrapper">
               <button className="button" onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    </>
}

export default RestaurantSignup;