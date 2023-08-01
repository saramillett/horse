
import React from "react";
import {Outlet, Link} from "react-router-dom";


export default function Movies(){
    return(
        <div style = {{
            backgroundColor: "green"
        }}>
            <h1>Movies</h1>
            <div class = "movies">
               <p>Some of the best movies have horses. 
                These include:
                </p> 
            </div>

            <div class = "movies_list">
                <ul class = "movie">
                    <h2><li>Secretariat</li></h2>
                    <p>Based on a true story, this movie is based
                        on the famous racehorse, Secretariat. Against
                        all odds, Secretariat wins the 1973 BelmontS Stakes, by
                        31 lengths ahead of his nearest challenger and in a world 
                        record time for the 1 1/2 miles distance.
                    </p>
                    <img className = "secretariat" src = {require('../images/secretariat.jpg')}/>
                    
                    <h2><li>Seabiscuit</li></h2>
                    <p>This movie is about the famous racehorse Seabiscuit.
                        Seabiscuit was a small horse, at 15.2 hands high.
                        This movie stars Toby Maguire, who had to get into  
                        the lightweight shape needed to play champion jockey, Red Pollard.
                        Seabiscuit was considered too small and untrainable, but went down
                        in history as a legend of great racehorses.
                        </p>    
                    <img className = "seabiscuit" src = {require('../images/seabiscuit.jpg')}/>



                    <h2><li>The Black Stallion</li></h2>
                    <p>The Black Stallion is a 1979 American adventure film based 
                        on the 1941 classic children's novel of the same name by 
                        Walter Farleyainable. It tells the tale of a lost boy 
                        shipwrecked on a deserted island with a wild Arabian stallion.
                         They are rescued and enter a race against two champion horses.
                        </p>    
                    <img className = "black_stallion" src = {require('../images/black_stallion.jpg')}/>
                    
                    <h2><li>War Horse</li></h2>
                    <p>Set before and during World War I, it tells of the journey of Joey, a bay Irish Hunter horse
                     raised by British teenager Albert as he is bought by the British Army, leading him to encounter 
                     various people throughout Europe, in the midst of the war and its tragedies. The film's ensemble 
                     cast also includes Peter Mullan, Emily Watson, Niels Arestrup, David Thewlis, Tom Hiddleston and
                      Benedict Cumberbatch. 
                      </p>
                      <img className = "war_horse" src = {require('../images/war_horse.jpg')}/>

                      <h2><li>Hildago</li></h2>
                    <p>Hildago tells the story of the biographical western film based on the legend of the American distance 
                        rider Frank Hopkins and his mustang Hidalgo. It recounts Hopkins' racing his horse in Arabia in 1891
                        against Bedouins riding pure-blooded Arabian horses.
                      </p>
                      <img className = "hildago" src = {require('../images/hildago.jpg')}/>
                      
                      <h2><li>The Never Ending Story</li></h2>
                    <p>This movie stars Bastian Bux, an outcast who steals a book
                        from a library called "The Never Ending Story". The movie
                        takes him on the adventure of a lifetime. Along the way he
                        meets Atreyu and his horse Artax. The reason he is a beloved horse is 
                        because of one specific scene, when the hero Atreyu enters the Swamp of Sadness
                         with his beloved horse, Artax. Sadly, Artax drowns in the swamp, leaving a devastated
                         Atreyu.
                      </p>
                      <img className = "artax" src = {require('../images/artax.jpg')}/>

                      <h2><li>Spirit: Stallion of the Cimarron</li></h2>
                    <p>This animated movie stars the mustang stallion, Spirit, who was born in
                        the wild. One day, he curiously approaches a group of soldiers,
                        who capture him and bring him into their camp where they attempt
                        to break him. In the camp, Spirit meets the Lakota, Little Creek.
                        Together, they escape the camp and fight their way to freedom. This
                        movie stars Matt Damon voicing Spirit.
                      </p>
                      <img className = "spirit" src = {require('../images/spirit.jpg')}/>

                      <h2><li>The Last Unicorn</li></h2>
                      <p>Although not technically a horse, this movie 
                        is nonetheless fun to watch. The Last Unicorn tells 
                        the story of a lone unicorn who sets off to find more
                        of her kind after being told by a butterfly she is the
                        last one after the Red Bull drove them into the sea. Along
                        the way she meets a clumsy sorcerer and together they
                        embark towards the castle where the unicorns and Red Bull
                        are said to dwell. </p>
                        <img className = "unicorn" src = {require('../images/unicorn.jpg')}/>


                   </ul>
                

            </div>
        </div>

    )
}