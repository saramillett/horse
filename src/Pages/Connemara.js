import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Connemara(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Connemara</h1>

            <div class="clyde">
                <p>
                The Connemara pony is known for its athleticism,
                 versatility and good disposition. You will find
                 this breed riding primarily English. The
                 Connemara is known to perform in:
                </p>
            </div>
        
            <div class="connemara_list">
                <ul class="connemara">
                    <li>hunter/jumpers</li>
                    <li>dressage</li>
                    <li>ednurance riding</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/connemara_jumping.jpg')}/>
                <img className ="image_transformation" src = {require('../images/connemara.gif')}/>
            </div>

        </div>
        )

}


