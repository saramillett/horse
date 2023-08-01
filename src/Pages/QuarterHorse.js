import React from "react";
import {Outlet, Link} from "react-router-dom";



 function QuarterHorse(){
    return(
        <div style={{
            backgroundColor: "green"
        }}>
        
            <h1>Quarter Horse</h1>

            <div class="quarter" style={{
                margin: "10px"
            }}>
                <p>
                The quarter horse is known for its stockiness and 
                ability to outrun other horse breeds in races of a quarter mile.
                The quarter horse can ride both English and Western.
                The quarter horse is used for:
                </p>
            </div>
            
            <div class="quarter_list">
                <ul class="quarter_unordered">
                    <li>barrel racing</li>
                    <li>calf roping</li>
                    <li>trail riding</li>
                </ul>
            </div>
            
            <div id = "centered_image">
                <img className ="image_transformation" src = {require('../images/barrel.jpg')}/>
                
                <img className ="image_transformation" src = {require('../images/calf.gif')}/>
            </div>
        
        </div>
    )

}

export default QuarterHorse;