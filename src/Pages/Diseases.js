
import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Diseases(){
    return(
        <div style = {{
            backgroundColor: "green"
        }}>
            <h1>Diseases</h1>
            <div class = "disease">
               <p>THere are numberous equine diseases,
                eac affecting the horse differently.
                Below are some of the most common:
                </p> 
            </div>

            <div class = "disease_list">
                <ul class = "diseases">
                    <h2><li>Abscess</li></h2>
                    <p>An abcess is caused by a stone bruise
                        or something embedded in the hoof.
                        It happens when bacteria get trapped
                        inside the hoof. Nails, glass, and screws
                        can get caught inside the hoof and leave bacteria.
                        Routine hoof care and keeping your horse’s 
                        area clean can prevent abscesses. 
                    </p>
                    <img className = "abcess" src = {require('../images/abcess.jpg')}/>
                    
                    <h2><li>Equine Encephalomyelitis ( Sleeping Sickness)</li></h2>
                    <p>Equine Encephalomyelitis is caused by mosquitoes and 
                        affects the brain. The reservoir of the disease in birds, reptiles,
                         and rodents, the mosquito acts as vectors. The disease transmitted by 
                         the bite of infected animals by a mosquito and then the subsequent bite 
                         to other healthy animals. You must control the 
                         mosquito population in a stable area. The disease is manifested by:
                        <ul class = "Encephalomyelitis">
                            <li>High fever</li>
                            <li>Diarrhea</li>
                            <li>Central nervous system disorder</li>
                            <li>Paralysis</li>
                            <li>Death</li>
                        </ul>
                          high fever, diarrhea, 
                         loss of appetite, central nervous system disorder, paralysis, circling, 
                         hyperexcitability, and death. To prevent the spread of further healthy animals
                          you must control the mosquito in a stable area.
                    </p>
                    <img className = "EE" src = {require('../images/EE.jpg')}/>

                    <h2><li>Colic</li></h2>
                    <p>Colic causes abdominal pain in horses cuased by nutritional,
                        parasitic, managemental fault, and other causes.Your vet will
                        decide the treatment procedure for your horse. Signs 
                        include:
                        <ul class = "Encephalomyelitis">
                            <li>Rolling</li>
                            <li>Looking towards the abdomen</li>
                            <li>Central nervous system disorder</li>
                            <li>Refusal to eat</li>
                            <li>Constipation</li>
                        </ul>he diagnosis of colic mainly 
                        
                    </p>
                    <img className = "colic" src = {require('../images/colic.jpg')}/>

                    <h2><li>Strangles</li></h2>
                    <p>Strangles are the most common bacterial infected horse disease which
                        is caused by the Streptococcus Equi.Signs of this disease include:
                        <ul class = "strangles">
                            <li>Thick yellow discharge from the eyes and nostrils</li>
                            <li>fever up to 106 Fahrenheit</li>
                            <li>Difficulty in swallowing</li>
                            <li>Decreased appetite</li>
                            <li>Coughing</li>
                            <li>Death</li>


                        </ul>
                    </p>
                    <img className = "strangles" src = {require('../images/strangles.jpg')}/>

                    <h2><li>Equine Tetanus</li></h2>
                    <p>This disease enters the body by the deep puncture injury. The injuries 
                        found in the dead skin ( such as burns, frostbites, gangrene or crush injuries)
                         are common causes of tetanus. The main clinical symptoms are:
                         <ul class= "tetanus">
                            <li>Stiffness of the neck</li>
                            <li>Lock Jaw</li>
                            <li>Difficulty walking, turning, and backing</li>
                         </ul>
                    </p>
                    <img className = "tetanus_horse" src = {require('../images/tetanus.jpg')}/>

                    <h2><li>Equine Influenza</li></h2>
                    <p>This disease is an acute respiratory disease. It is caused by
                    caused by Equine Influenza virus A serotype 1 and Equine Influenza
                     Virus A Serotype 2 or Miami Strain. Sings of this disease are: 
                         <ul class= "influenza">
                            <li>Stiffness of the neck</li>
                            <li>Lock Jaw</li>
                            <li>High fever</li>
                         </ul>
                    </p>
                    <img className = "equine_influenza" src = {require('../images/influenza.jpg')}/>


                    
                    <h2><li>Rain Rot</li></h2>
                    <p>Rain rot is caused by a bacteria, which usually thrive in wet, moist 
                    surroundings. ain rot can be painful in certain stages, so always err
                    on the side of caution and only ride when you are certain the infection is healed. 
                    To get rid of rain rot, wash your horse in an antifungal shampoo and keep skin dry as
                    much as possible. Signs of rain rot include:
                         <ul class= "rain_rot">
                            <li>Crusty scabs on the horse's skin</li>
                            <li>Lesions.</li>
                            <li>Loss of hair</li>
                         </ul>
                    </p>
                    <img className = "rainrot" src = {require('../images/rainrot.jpg')}/>

                </ul>
            </div>
        </div>

    )
}