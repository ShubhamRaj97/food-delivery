const RestaurantSignup = ()=> {
    return <>
        <>SignUp page</>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter the email"></input>
            </div>
             <div className="input-wrapper">
                <input type="password" placeholder="password"></input>
            </div>
            <div className="input-wrapper">
                <input type="confirm password" placeholder="password"></input>
            </div>
            <div className="input-wrapper">
                <input type="city" placeholder="city"></input>
            </div>
            <div className="input-wrapper">
                <input type="address" placeholder="address"></input>
            </div>
             <div className="input-wrapper">
               <button className="button">SignUp</button>
            </div>
        </div>
    </>
}

export default RestaurantSignup;