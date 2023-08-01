import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function RackingHorse(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Racking Horse</h1>

            <div class="racking" style={{
                margin: "10px"
            }}>
                <p>
                The Racking Horse is a horse breed derived from the
                Tennessee Walking Horse, recognized by the USDA in
                1971. It is known for a distinctive singlefoot gait.
                Racking horses ride both English and Western and
                are used for:
                </p>
            
            </div>
        
            <div class="racking_list">
                <ul class="racking_unordered">
                    <li>racking shows</li>
                    <li>trail riding</li>
                    <li>endurance</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/racking_english.jpg')}/>
                <img className ="image_transformation" src = {require('../images/racking.gif')}/>
            </div>

        </div>
        )

}


