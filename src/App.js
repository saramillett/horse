import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
 
        <header className="App-header">
      <div id = "horses" class = "riding">
        <h1>Horses</h1>
        <img className ="horse" src = {require('./images/horse_pics.jpg')} height = {500} width = {1000}/>
      </div>
      
        <p>
          Horses are one of the most beloved animals 
          in the world. There are different
          breeds and riding styles. This website
          describes the different breeds,
          the different riding styles,
          and how to care for your horse.
        </p>
       
      </header>
    
    </div>
    
  );

}


export default App;
