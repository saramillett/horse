import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function ShetlandPony(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Shetland Pony</h1>

            <div class="shetland" style={{
                margin: "10px"
            }}>
                <p>
                    The Shetland pony stands 107cm at the withers.
                    It has a heavy coat and short legs. This breed
                    rides both English and Western. These ponies are 
                    known for:

                </p>
            
            </div>
        
            <div class="shetland_list">
                <ul class="shetland">
                    <li>riding</li>
                    <li>driving</li>
                    <li>harness work</li>
                    </ul>
            </div>

            
            <div id = "centered_image">
                <img class = "image" img className ="image_transformation" src = {require('../images/shetland_driving.jpg')}/>
                <img className ="image_transformation" src = {require('../images/shetland.gif')}/>
            </div>

        </div>
        )

}


