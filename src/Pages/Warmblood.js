import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Warmblood(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Warmblood</h1>

            <div class="warmblood" style={{
                margin: "10px"
            }}>
                <p>
                    The Warmblood is a breed with stamina
                    and strength. This breed is considered
                    gentle and willing to please. The Warmblood
                    is ridden English and performs in:
                </p>
            
            </div>
        
            <div class="warmblood_list">
                <ul class="warmblood_unordered">
                    <li>dressage</li>
                    <li>show jumping</li>
                    <li>hunter/jumpers</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/warmblood_jumping.jpg')}/>
                <img className = "image_transformation" src = {require('../images/dance.gif')}></img>
            </div>

        </div>
        )

}


