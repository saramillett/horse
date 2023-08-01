import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Holsteiner(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Holsteiner</h1>

            <div class="holst" style={{
                margin: "10px"
            }}>
                <p>
                    The Holsteiner is used primarily as
                    a show horse. It is one of the most popular 
                    breeds in the world. These breeds are primarily
                    ridden in the English saddle. The Holsteiner is a 
                    very competitive horse, used in:
                </p>
            
            </div>
        
            <div class="holsteiner_list">
                <ul class="holsteiner">
                    <li>dressage</li>
                    <li>show jumping</li>
                    <li>hunter/jumpers</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/eventing.jpg')}/>
                <img className ="image_transformation" src = {require('../images/stallion.gif')}/>
            </div>

        </div>
        )

}


