import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Colors(){
    return(
        <div style = {{
            backgroundColor: "green"
        }}>
       
   
            <h1>Horse Colors</h1>
            <div class = "colors" style =  {{
                margin: "10px",
                
            }}>
                <p>
                    Horses come in many different colors, each
                    unique. Some of those colors are:
                </p>
            </div>

            <div class = "horse_color">
                <ul class = "color">
                    <li>Bay</li>
                        <img className = "saddle" src = {require('../images/bay.jpg')}/>
                    <li>Black</li>
                        <img className = "saddle" src = {require('../images/black.jpg')}></img>
                    <li>Chestnut</li>
                        <img className = "saddle" src = {require('../images/chestnut.jpg')}></img>
                    <li>Dappled Grey</li>
                        <img className = "saddle" src = {require('../images/dappled_grey.jpg')}></img>
                    <li>Palomino</li>
                        <img className = "saddle" src = {require('../images/palomino.jpg')}></img>
                    <li>Pinto</li>
                        <img className = "saddle" src = {require('../images/pinto.jpg')}></img>
                    <li>White</li>
                        <img className = "saddle" src = {require('../images/white.jpg')}></img>
                    <li>Red Roan</li>
                        <img className = "saddle" src ={require('../images/red_roan.jpg')}></img>
                    <li>Blue Roan</li>
                        <img className = "saddle" src = {require('../images/blue_roan.jpg')}></img>
             </ul>

            </div>
            
        </div>
        
    )}