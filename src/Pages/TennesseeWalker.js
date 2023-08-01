import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function TennesseeWalker(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Tennessee Walker</h1>

            <div class="tennessee" style={{
                margin: "10px"
            }}> 
                <p>
                Tennessee Walkers are known for their smooth gaits 
                including the Flat Walk, the Running Walk, and Canter.
                This horse rides both Western and English
                 and is used for:  
                </p>
            
            </div>
        
            <div class="tennessee_list">
                <ul class="tennessee">
                    <li>therapeutic riding</li>
                    <li>trail riding</li>
                    <li>Western pleasure</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/therapy.jpg')}/>
                <img className ="image_transformation" src = {require('../images/tennessee_gait.gif')}/>
            </div>

        </div>
        )

}


