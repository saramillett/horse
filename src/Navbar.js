import React, { useState } from "react";
import {Outlet, Link} from "react-router-dom";
import './Navbar.css'
import  { ReorderThree } from 'react-ionicons'

export default function Navbar(){
    const [Show, setshow] = useState(false);
    const HandleMenu = () => {
        setshow(!Show);
    }
    return (
        <div style = {{
            

            backgroundColor: 'green',
        }}>
            <div id = 'MainNavBar'>
                <div>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/'>Home</Link>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/Western'>Western</Link>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/English'>English</Link>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/Therapeutic'>Therapeutic</Link>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/Care'>Care</Link>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/Colors'>Colors</Link>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/Diseases'>Diseases</Link>
                <Link id = 'NavBarLogo' className = 'NavLinks'to = '/Movies'>Movies</Link>





                



                    
                    

                </div>
                
                <div className = "things">
                    <div className = "hay" onClick={HandleMenu}
>
                        <p>Breeds</p>
                        <ReorderThree
                        color={'#00000'} 
                        height="40px"
                        width="40px"
                        />    
                    </div>

                    <div className = 'Horse_List'>
                        <Link className = 'NavLinks' id = 'NavBarLinks' to = 'Thoroughbred/'>Thoroughbred</Link>
                        <Link className = 'NavLinks' id = 'NavBarLinks' to = 'QuarterHorse/'>Quarter Horse</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Appaloosa/'>Appaloosa</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Warmblood/'>Warmblood</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Holsteiner/'>Holsteiner</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'WelshPony/'>Welsh Pony</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'TennesseeWalker/'>Tennesee Walker</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Paint/'>Paint</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Arabian/'>Arabian</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'BelgianDraft/'>Belgian Draft</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'GypsyVanner/'>Gypsy Vanner</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'RackingHorse/'>Racking Horse</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'ShetlandPony/'>Shetland Pony</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Clydesdale/'>Clydesdale</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Shire/'>Shire</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Hanoverian/'>Hanoverian</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Trakehner/'>Trakehner</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Percheron/'>Percheron</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Morgan/'>Morgan</Link>
                        <Link  className = 'NavLinks'id = 'NavBarLinks'to = 'Connemara/'>Connemara</Link>













                    </div>
                </div>
            </div>

           <div style = {{
            paddingTop: '7.5em'



           }}>
                <Outlet/>
            </div>
            <style jsx>{`
          .hamburger:hover{
            cursor: pointer;
          }
            .Horse_List{
                margin-right: 5em;
            }
            #NavBarLinks{
                display: ${Show?'flex': 'none'};
            }

            `}

            </style>
        </div>
      
    )
}
