'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';


const RestaurantHeader =()=>{
    const [details, setDetails] = useState({});
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        let data = localStorage.getItem('restaurantUser');
        if (!data && pathname == '/restaurant/dashboard') {
          router.push('/restaurant');
        }else if(data && pathname == '/restaurant/dasboard'){
            router.push('/restaurant'); 
        } else
          setDetails(JSON.parse(data));
        
      }, []); // ✅ run only once

      const logout=()=>{
        localStorage.removeItem('restaurantUser');
        router.push('/restaurant');
      }
      
    return <>
        <div className="header-wrapper">
            <div>
                <img style={{width:100}} src="/images/5526265.jpg" alt="chef logo" />
            </div>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                {details && details.name ? (
                   <>
                    <li>
                        <Link href="/restaurant/dashboard">Profile</Link>
                   </li>

                   <li>
                       <button onClick={logout}>Logout</button>
                   </li>

                   
                   </>
                ) : (
                    <li>
                    <Link href="/">Login/Signup</Link>
                    </li>
                )}
                </ul>

        </div>

    
    </>
}

export default RestaurantHeader;