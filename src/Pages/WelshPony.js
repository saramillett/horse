import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function WelshPony(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Welsh Pony</h1>

            <div class="welsh" style={{
                margin: "10px"
            }}>
                <p>
                    This pony is a popular breed. They 
                    are used in many competitive disciplines and
                    can ride both Western and English. This pony
                    can be found doing:
                </p>
            </div>
        
            <div class="welsh_list">
                <ul class="welsh">
                    <li>jumping</li>
                    <li>trail riding</li>
                    <li>driving</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/welsh_driving.jpg')}/>
                <img className ="image_transformation" src = {require('../images/welsh_jumping.gif')}/>
            </div>

        </div>
        )

}


