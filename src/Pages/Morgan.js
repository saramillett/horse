import React from "react";
import {Outlet, Link} from "react-router-dom";


 function Morgan(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Morgan</h1>

            <div class="welsh" style={{
                margin: "10px"
            }}>
                <p>
                Morgan horses are bold and intelligent horses. They have a keen
                sense about their surroundings and are very alert.
                This breed's calm disposition makes it perfect for children
                as well as the inexperienced rider. This breed rides both
                English and Western and can be found doing:
                 
                </p>
            
            </div>
        
            <div class="morgan_list">
                <ul class="morgan">
                    <li>dressage</li>
                    <li>show jumping</li>
                    <li>cutting</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/morgan_jumping.jpg')}/>
                <img className ="image_transformation" src = {require('../images/morgan_horse.gif')}/>
            </div>

        </div>
        )

}


export default Morgan;