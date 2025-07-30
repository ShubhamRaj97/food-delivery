
import Link from 'next/link'


const RestaurantHeader =()=>{
    return <>
        <div className="header-wrapper">
            <div>
                <img style={{width:100}} src="/images/5526265.jpg" alt="chef logo" />
            </div>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/Signup</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                
            </ul>
        </div>

    
    </>
}

export default RestaurantHeader;