import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Thoroughbred from './Pages/Thoroughbred';
import QuarterHorse from './Pages/QuarterHorse';
import Appaloosa from './Pages/Appaloosa';
import Warmblood from './Pages/Warmblood';
import Holsteiner from './Pages/Holsteiner';
import WelshPony from './Pages/WelshPony';
import TennesseeWalker from './Pages/TennesseeWalker';
import BelgianDraft from './Pages/BelgianDraft';
import Paint from './Pages/Paint';
import Arabian from './Pages/Arabian';
import GypsyVanner from './Pages/GypsyVanner';
import RackingHorse from './Pages/RackingHorse';
import ShetlandPony from './Pages/ShetlandPony';
import Clydesdale from './Pages/Clydesdale';
import Shire from './Pages/Shire';
import Hanoverian from './Pages/Hanoverian';
import Trakehner from './Pages/Trakehner';
import Percheron from './Pages/Percheron';
import Morgan from './Pages/Morgan';
import Connemara from './Pages/Connemara';
import Western from './Pages/Western';
import English from './Pages/English';
import Therapeutic from './Pages/Therapeutic';
import Care from './Pages/Care';
import Colors from './Pages/Colors';
import Diseases from './Pages/Diseases';
import Movies from './Pages/Movies';









import Navbar from './Navbar';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Navbar/>, 
    children: [
      {
        path: "/", 
        element: <App/>
      },
      {
        path: "/Western", 
        element: <Western/>
       },
       {
        path: "/Care", 
        element: <Care/>
       },
       {
        path: "/English", 
        element: <English/>
       },
       {
        path: "/Colors", 
        element: <Colors/>
       },
       {
        path: "/Diseases",
        element: <Diseases/>
       },
       {
        path: "/Movies",
        element: <Movies/>
       },
       {
        path: "/Therapeutic",
        element: <Therapeutic/>
       },

      {
        path: "/Thoroughbred",
        element: <Thoroughbred/>
      },
      {
        path: "/QuarterHorse",
        element: <QuarterHorse/>
      },
      {
        path: "/Appaloosa",
        element: <Appaloosa/>
      },
    
      {
        path: "/Warmblood",
        element: <Warmblood/>
      },
      {
        path: "/Holsteiner",
        element: <Holsteiner/>
      },
      {
        path: "/WelshPony",
        element: <WelshPony/>
      },
      {
        path: "/TennesseeWalker",
        element: <TennesseeWalker/>
      },
      {
        path: "/BelgianDraft",
        element: <BelgianDraft/>
      },
      {
        path: "/Paint",
        element: <Paint/>
      },
      {
        path: "/Arabian",
        element: <Arabian/>
      },
      {
        path: "/GypsyVanner",
        element: <GypsyVanner/>
      },
      {
        path: "/RackingHorse",
        element: <RackingHorse/>
      },
      {
        path: "/ShetlandPony",
        element: <ShetlandPony/>
      },
      {
        path: "/Clydesdale",
        element: <Clydesdale/>
      },
      {
        path: "/Shire",
        element: <Shire/>
      },
      {
        path: "/Hanoverian",
        element: <Hanoverian/>
      },
      {
        path: "/Trakehner",
        element: <Trakehner/>
      },
      {
        path: "/Percheron",
        element: <Percheron/>
      },
      {
        path: "/Morgan",
        element: <Morgan/>
      },
      {
        path: "/Connemara",
        element: <Connemara/>
      },
    ]

  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router = {router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
