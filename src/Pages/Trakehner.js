import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Trakehner(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Trakehner</h1>

            <div class="trakehner" style={{
                margin: "10px"
            }}>
                <p>
                Trakehner is a light warmblood breed of horse, originally developed
                 at the East Prussian state stud farm in the town of Trakehnen from 
                 which the breed takes its name. These sport horses have a bouncy trot
                 and are calm by nature. This breed does:
                </p>
            
            </div>
        
            <div class="trakehner_list">
                <ul class="trakehner">
                    <li>eventing</li>
                    <li>show jumping</li>
                    <li>dressage</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/trakehner_jumping.jpg')}/>
                <img className ="image_transformation" src = {require('../images/trakehner_jump.gif')}/>

            </div>

        </div>
        )

}


