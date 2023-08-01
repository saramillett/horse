import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Shire(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Shire</h1>

            <div class="shire" style={{
                margin: "10px"
            }}>
                <p>
                The Shire is a British breed of draught horse. It is
                the biggest breed in the world, measuring up 18
                hands high. Despite its size, this is a gentle
                breed. The Shire rides both English and Western.
                This horse is used for:

                </p>
            
            </div>
        
            <div class="shire_list">
                <ul class="shire_horse">
                    <li>therapy riding</li>
                    <li>driving</li>
                    <li>harness work</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/shire_carriage.jpg')}/>
                <img className ="image_transformation" src = {require('../images/shire.gif')}/>
            </div>

        </div>
        )

}


