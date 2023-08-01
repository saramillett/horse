import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Appaloosa(){
    return(
        <div style={{
            backgroundColor: 'green'
        }}>
            <h1>Appaloosa</h1>

            <div class="Appy" style={{
                margin: "10px"
            }}>
                <p>
                The Appaloosa is one of 
                the most colorful horse breeds
                in the world. This breed, along
                with the quarter horse, can ride
                both English and Western. You will find this 
               breed in many competitions such as:
                </p>
            </div>

            <div class="app_list">
                <ul class="app_unordered">
                    <li>Western pleasure</li>
                    <li>show jumping</li>
                    <li>fox hunting</li>
                </ul>
            </div>

            <div id = "centered_image">
                <img className = "image_transformation" src = {require('../images/app.jpg')}/>
                <img className = "image_transformation"src = {require('../images/dressage.gif')}/>
            </div>
        </div>
    )

}