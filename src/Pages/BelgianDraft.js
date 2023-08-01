import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function BelgianDraft(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Belgian Draft</h1>

            <div class="belgian" style={{
                margin: "10px"
            }}>
                <p>
                    The Belgian Draft is one of the larger breeds,
                    ranging from 16 hands to 17 hands. This breed is 
                    known for their strength and calm demeanor. This
                    breed rides Western and English and is commonly used for:
                </p>
            
            </div>
        
            <div class="belgian_list">
                <ul class="belgian">
                    <li>pulling carriages</li>
                    <li>dressage</li>
                    <li>farm labor</li>
                    </ul>
            </div>

            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/draft_pulling.jpg')}/>
                <img className ="image_transformation" src = {require('../images/draft.gif')}/>
            </div>

        </div>
        )

}


