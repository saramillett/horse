import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Hanoverian(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Hanoverian</h1>

            <div class="hanoverian" style={{
                margin: "10px"
            }}>
                <p>
                    The Hanoverian is a very athletic
                    horse. Their friendly and approachable 
                    nature also makes them very popular among riders.
                    Their well-balanced nature developed in times when 
                    horses were still deployed in the military service.
                    This horse is built for the English saddle and rides in:
                </p>
            
            </div>
        
            <div class="hanoverian_list">
                <ul class="whanoverian_unordered">
                    <li>dressage</li>
                    <li>show jumping</li>
                    <li>eventing</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className = "image_transformation" src = {require('../images/hanoverian.jpg')}></img>
                <img className ="image_transformation" src = {require('../images/hanoverian_jumping.gif')}/>

            </div>

        </div>
        )

}


