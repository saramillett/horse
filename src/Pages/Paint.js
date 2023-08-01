import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Paint(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Paint</h1>

            <div class="paint" style={{
                margin: "10px"
            }}>
                <p>
                    The paint is a very friendly breed
                    with a calm demeanor. Due to their strength, 
                    speed, agility, and stamina, they were traditionally 
                    used for transportation and work. These horses are ridden
                    both Western and English. Paints  are easy
                    to train and are  used for:
                </p>
            
            </div>
        
            <div class="paint_list">
                <ul class="paint_unordered">
                    <li>reigning</li>
                    <li>ranch work</li>
                    <li>hunter/jumpers</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/paint_western.gif')}/>
                <img className ="image_transformation" src = {require('../images/paint_jumping.gif')}/>
            </div>

        </div>
        )   

}


