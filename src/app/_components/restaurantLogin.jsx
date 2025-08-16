'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
const RestaurantLogin = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [error, seterror] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        // Validation
        if (!email || !password) {
            seterror(true);
            return; // stop here if missing fields
        } else {
            seterror(false);
        }


        try {
            let response = await fetch('/api/restaurants', { // ✅ Correct API path
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, login: true }),
            });

            response = await response.json();

            if (response.success) {
                const {restaurant} = response;
                delete restaurant.password
                // You can also store the user in localStorage
                localStorage.setItem("restaurantUser", JSON.stringify(restaurant));
                router.push('/restaurant/dashboard');
            } else {
                alert(response.error || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Something went wrong");
        }
    };


    return <>
        <>Login page</>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter the email" className="input-field"
                    onChange={(e) => setemail(e.target.value)}></input>
                {
                    error && !email && <span className="input-error">email is required</span>
                }

            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="password" className="input-field"
                    onChange={(e) => setpassword(e.target.value)}></input>
                {
                    error && !password && <span className="input-error">password is required</span>
                }
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </>
}


export default RestaurantLogin;