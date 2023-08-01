import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Western(){
    return(
        <div style = {{
            backgroundColor: "green"
        }}>
       
   
            <h1>Western Riding</h1>
            <div class = "west" style =  {{
                margin: "10px",
                
            }}>
                <p>
                    Western riding uses a bigger saddle than the
                    English saddle and has a horn. Western saddless have
                    bigger trees than the English saddle too. There are
                    different types of Western saddles for the different
                    types of riding that Western offers. Some are:

                </p>
            </div>

            <div class = "western_list">
                <ul class = "western_riding">
                    <li>Roping Saddle</li>
                      <img className = "saddle" src = {require('../images/roping_saddle.jpg')}/>
                      <img className = "saddle" src = {require('../images/roping.jpg')}/>
                    <li>Cutting Saddle</li>
                        <img className = "saddle" src = {require('../images/cutting_saddle.jpg')}></img>
                        <img className = "saddle" src = {require('../images/cutting_horse.jpg')}></img>
                    <li>Barrel Racing Saddle</li>
                        <img className = "saddle" src = {require('../images/barrel_racing.jpg')}></img>
                        <img className = "saddle" src = {require('../images/barrel_racing_horse.jpg')}></img>

                </ul>

            </div>
            
        </div>
    )}