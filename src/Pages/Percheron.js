import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Percheron(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Percheron</h1>

            <div class="perch" style={{
                margin: "10px"
            }}>
                <p>
                Percherons are well muscled, and known for their 
                intelligence and willingness to work. They are considered 
                easy keepers and adapt well to many conditions and climates.
                This breed can ride both Western and English. You will find
                the Percheron doing work such as:
              </p>
            
            </div>
        
            <div class="percheron_list">
                <ul class="percheron">
                    <li>pulling carriages</li>
                    <li>farm work</li>
                    <li>dressage</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/percheron_dressage.jpg')}/>
                <img className ="image_transformation" src = {require('../images/percheron_english.gif')}/>
            </div>

        </div>
        )

}


