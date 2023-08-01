import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function English(){
    return(
        <div style = {{
            backgroundColor: "green"
        }}>
       
   
            <h1>English Riding</h1>
            <div class = "english" style =  {{
                margin: "10px",
                
            }}>
                <p>
                    The English saddle, unlike the Western saddle
                    with its horn, is smaller and lightweight. There
                    are different types of saddles for different
                    English riding styles. Some of these saddles are:
                </p>
            </div>

            <div class = "english_list">
                <ul class = "english_riding">
                    <li>Eventing Saddle</li>
                        <img className = "saddle" src = {require('../images/eventing_saddle.jpg')}/>
                        <img className = "saddle" src = {require('../images/eventing_riding.jpg')}></img>


                    <li>Hunter/Jumper Saddle</li>
                        <img className = "saddle" src = {require('../images/hunter_jumper.jpg')}/>
                    
                        <img className = "saddle" src = {require('../images/hunter_jumpers.jpg')}/>

                    <li>Dressage Saddle</li>
                        <img className = "saddle" src = {require('../images/dressage_saddle.jpg')}></img>

                        <img className = "saddle" src = {require('../images/dressage_riding.jpg')}></img>
                </ul>

            </div>
        </div>
    )}