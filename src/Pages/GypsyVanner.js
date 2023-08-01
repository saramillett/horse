import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function GypsyVanner(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Gypsy Vanner</h1>

            <div class="gypsy" style={{
                margin: "10px"
            }}>
                <p>
                    The Gypsy Vanner is another popular
                    breed. They are often referred to as a 
                    “people-sized” draft horse. The Gypsy
                    Vanner can ride both Western and English.
                    This breed is known for:
                </p>
            
            </div>
        
            <div class="hgypsy_list">
                <ul class="gypsy">
                    <li>dressage</li>
                    <li>therapy riding</li>
                    <li>Western pleasure</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/gypsy_dressage.jpg')}/>
                <img className ="image_transformation" src = {require('../images/gypsy_jumping.gif')}/>
            </div>

        </div>
        )

}


