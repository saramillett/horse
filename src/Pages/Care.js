import React from "react";
import {Outlet, Link} from "react-router-dom";
import YouTube from 'react-youtube';

export default function Care(){
   const videoId = 'Plb64MqF0Ks';
   const options = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1
    }
   };
    return(
       <div style =  {{
        backgroundColor: "green"
       }}>
        <h1>Horse Care</h1>

            <div class = "care">
                
                <p>
                    There are a lot of things that come 
                    to caring for a horse. Grooming, feeding,
                    cleaning the stall, getting shoes if your
                    horse needs them, and vet checkups are 
                    just some of the things your horse will need.
                </p>
            </div>
                
                <h2>Grooming</h2>
            <div class = "brushing">
                <p>
                    To groom a horse, you will need to:
                    <ul class="grooming">
                    <li>use the curry comb and brush in circular motions
                    to get the dirt to come off the horse's body.</li>
                
                <div id = "groom">
                         <img className ="brushes" src = {require('../images/curry.jpg')}/>
                   <li> use
                    the hard brush by doing flicking motions with your wrist down
                    their body.</li>
                        <img className ="brushes" src = {require('../images/hard_brush.jpg')}/>
                   <li>use the body brush in long strokes all 
                    down the horse's body, including face and legs.</li>
                        <img className ="brushes" src = {require('../images/body_brush.jpg')}/>
                   <li> Use the mane comb by taking the horse's tail, and brush starting from the bottom.
                    This helps get tangles and anything caught in their tail out.</li>
                        <img className ="brushes" src = {require('../images/mane.jpg')}/>
                   <li>use the hoof pick to pick the hooves. Do this by rubbing
                    your hand down the horse's leg and push into them as you ask the 
                    horse to lift their foot. Taking the pick, pick out the dirt
                    and any rocks embedded in the hoof. Gently put the foot down
                    and ask for the next leg until you have finished all four. Picking hooves
                    prevents the horse from getting a stone bruise or an abscess. If
                    flies are bothering your horse, spray down with fly spray. </li>
                        <img className ="brushes" src = {require('../images/hoofpick.jpg')}/>
                </div>  
                    </ul>
                     
                  
                </p>
                <YouTube videoId={
                    videoId
                }
                opts = {
                    options
                }/>
                
            </div>

                <h2>Cleaning the Stall</h2>
            <div class = "stall_cleaning">
                <p>It is very important to keep your horse's stall clean.
                   Not only does is it important for their health, it protects
                   their feet from developing thrush. To start off, pick the manure
                   piles out and then get out the wet spots. Rake through
                   the shavings to find any manure you may have missed.
                   Afterwards, pull all the shavings to the center 
                   and smooth over with your pitchfork, picking out any
                   manure that rolls out from the shavings. Below are pictures
                   of a clean stall versus a dirty stall. 
                </p>

                <div className = "stalls">
                <div>
                <h3>Dirty Stall</h3>
                    <img className = "image_adjustment"  width = "300" height = "300" src = {require('../images/dirty_stall.jpg')}/>
                    </div>
                    <div>
                <h3>Clean Stall</h3>
                    <img className = "image_adjustment" width = "300" height = "300" src = {require('../images/clean_stall.jpg')}/>
                    </div>
                    </div>
            </div>

                
                <h3>Parts of the Hoof</h3>
                <h4>Farriers put on shoes depending on the horse's needs.</h4>
                    <img className = "hoof" height = "400" width = "400" src = {require('../images/frog.jpg')}/>
                <div className="hooves">

               <div> <h3>Healhty hoof vs unhealthy hoof</h3>
                <h4>Healthy Hoof</h4>
                    <img className = "image_adjustment"  src = {require('../images/healthy_hoof.jpg')}></img>
                </div>
               <div> <h4>Unhealthy Hoof</h4>
                <img className = "image_adjustment"  src = {require('../images/unhealthy_hoof.jpg')}></img>
                </div>
                </div>

                


       </div>
    )
}