import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Therapeutic(){
    return(
        <div style = {{
            backgroundColor: "green"
        }}>
       
   
            <h1>Therapeutic Riding</h1>
            <div class = "west" style =  {{
                margin: "10px",
                
            }}>
                <p>
                    Therapeutic riding involves activities on horseback
                    for people with disabilities to improve their 
                    muscle tone, cognitive, emotional. and social goals. 
                    The individuals can  have a wide range of disabilities,
                    including muscular dystrophy, cerebal palsy, deafness, blindness,
                    and individuals with mental illness. 
                    To be a therapy horse, the horse must be calm, used to
                    loud noises and crowds, and used to sudden movements.
                    
                </p>
            </div>

            <div class = "therapy">
                <ul class = "therapetuic_riding">
                    <h2>Therapeutic Riding Involves:</h2>
                        <li>Someone leading the horse</li>
                        <li>Two side walkers for body support</li>
                      <img className = "image_adjustment" src = {require('../images/therapeutic.jpg')}/>
                </ul>
            </div>
            <div class = "activities">
                <ul class = "therapy_activities">
                <h2>Some of the activities the rider can do are:</h2>
                    <li>Grooming and tacking</li>
                    <li>Stretching activities</li>
                    <li>Learning a riding skill</li>
                    <li>Cooldown Activities</li>
                </ul>
                        <img className = "image_adjustment" src = {require('../images/poles.jpg')}></img>
            </div>
        </div>
    )}