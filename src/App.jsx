
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Service from './Service';


import Navbar from "./Navbar";
import Footer from "./Footer";
import web from "../src/images/maindinner.png";
import icon1 from "../src/images/swiggythumbsup.png";
import icon2 from "../src/images/swiggytrackingicon.png";
import icon3 from "../src/images/swiggybikeguy.png";
import {Switch , Route, Redirect } from "react-router-dom";
import google1 from "../src/images/swiggyappstore.png";
import google2 from "../src/images/swiggygoogleplay.png";

import mobile1 from "../src/images/swiggymobile1.png";
import mobile2 from "../src/images/swiggymobile2.png";
const App = () => {
    return (
        <>
        <Navbar/>
       
       <service/>

      
        <switch>
           
           
            <Route path ="/" component = {Service}/> 
             
            <route path = "/" component = {Footer}/>
            <Footer/>



       







<Redirect to = "/" />

        </switch>
        </>

    );
};

export default App;


















