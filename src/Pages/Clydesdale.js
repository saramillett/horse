import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Clydesdale(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Clydesdale</h1>

            <div class="clyde">
                <p>
                The Clydesdale horse is a native breed of Scotland originating from the 
                Lanarkshire area. It was originally bred for heavy farm and industrial work 
                and can be seen working as draught horses, in logging, driving and agriculture. 
                Clydesdales can also be ridden and are often seen this way at shows. This horse
                can be found doing:
                </p>
            
            </div>
        
            <div class="clydesdale_list">
                <ul class="clydesdale">
                    <li>draught horse</li>
                    <li>logging</li>
                    <li>carriage pulling</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/clydesdale_western.jpg')}/>
                <img className ="image_transformation" src = {require('../images/clydesdale_carriage.gif')}/>
            </div>

        </div>
        )

}


