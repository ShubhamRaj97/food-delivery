const RestaurantSignup = ()=> {
    return <>
        <>SignUp page</>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter the email" className = "input-field"></input>
            </div>
             <div className="input-wrapper">
                <input type="password" placeholder="password" className = "input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="confirm password" placeholder="password" className = "input-field"></input>
            </div>
             <div className="input-wrapper">
                <input type="password" placeholder="restaurant name" className = "input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="city" className = "input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="address" className = "input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="enter the code" className = "input-field"></input>
            </div>
             <div className="input-wrapper">
                <input type="password" placeholder="enter contact number" className = "input-field"></input>
            </div>

             <div className="input-wrapper">
               <button className="button">Sign Up</button>
            </div>
        </div>
    </>
}

export default RestaurantSignup;