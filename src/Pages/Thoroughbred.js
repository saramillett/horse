import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Thoroughbred(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Thoroughbred</h1>

            <div class="thorough" style={{
                margin: "10px"
            }}>
                <p>
                    The Throughbred is used in many
                    sports. They are known for their
                    speed and agility. This breed can
                    ride both English and Western, but
                    is mainly found to be riding English.
                     You will find the Throughbred performing in many
                    competitions such as:
                </p>
            
            </div>
        
            <div class="thorughbred_list">
                <ul class="thorougbred_unordered">
                    <li>three day eventing</li>
                    <li>racing</li>
                    <li>hunter/jumpers</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/jumping.jpg')}/>
                <img className ="image_transformation" src = {require('../images/race.gif')}/>
            </div>

        </div>
        )

}


