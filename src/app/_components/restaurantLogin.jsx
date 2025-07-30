const RestaurantLogin = ()=> {
    return <>
        <>Login page</>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter the email" className = "input-field"></input>
            </div>
             <div className="input-wrapper">
                <input type="password" placeholder="password" className = "input-field"></input>
            </div>
             <div className="input-wrapper">
               <button className="button">Login</button>
            </div>
        </div>
     </>
}


export default RestaurantLogin;