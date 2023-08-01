import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Arabian(){
    return(
        <div style={{
            backgroundColor: 'green'
        }}>
            <h1>Arabian</h1>

            <div class="Appy" style={{
                margin: "10px"
            }}>
                <p>
                The Arabian is known for its speed
                and stamina. This horse is known for its
                high carried tail. Arabians can ride both
                Western and English. This breed can be found:
                </p>
            </div>

            <div class="arabian_list">
                <ul class="arabian_unordered">
                    <li>endurance riding</li>
                    <li>jumping</li>
                    <li>racing shows</li>
                </ul>
            </div>

            <div id = "centered_image">
                <img className = "image_transformation" src = {require('../images/arabian_endurance.jpg')}/>
                <img className = "image_transformation"src = {require('../images/arabian_running.gif')}/>
            </div>
        </div>
    )

}