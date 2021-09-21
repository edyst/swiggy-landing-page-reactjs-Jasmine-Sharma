import React from 'react'
import web from "../src/images/maindinner.png";
import icon1 from "../src/images/swiggythumbsup.png";
import icon2 from "../src/images/swiggytrackingicon.png";
import icon3 from "../src/images/swiggybikeguy.png";
import {Switch , Route, Redirect } from "react-router-dom";
import google1 from "../src/images/swiggyappstore.png";
import google2 from "../src/images/swiggygoogleplay.png";

import mobile1 from "../src/images/swiggymobile1.png";
import mobile2 from "../src/images/swiggymobile2.png";
const Services= () => {
    return (
        <>
     
<section>
    <div class = "icons">
       
        <a><img src = {icon1}  className = "icons"  alt = "home"/> </a> 
        
        <a><img src = {icon2} className = "icons"  alt = "home" />   </a>
        <a><img src = {icon3} className = "icons"  alt = "home" /> </a>

    </div>
    <div className= "second">
        <div>
    <h1 className = "iconheading">No Minimum Order</h1> <p className ="paraicon">Order for yourself or for the group,<br/> with no restrictions on order value</p>
    </div>
   <div>
    <h1 className = "iconheading">Live Order Tracking </h1> <p className ="paraicon">Know where your order is at all times,<br/> from the restaurant to your doorsteps</p>
   
    </div>
    <div>
    <h1 className = "iconheading">Lightning-Fast-Delivery</h1><p className ="paraicon">Experience Swiggy's superfast delivery for food delivered fresh & on time </p>
    </div>

</div>
</section>


<section id = "header2" class = "d-flex align-items-center-1" >


            <div className = "container_fluid nav_bg">

               

                
                    

                    <div classname = "row">

<h1 class = "center"> Restaurants in your pocket</h1>
        <h2 className = "order-order" id = "googleorder"> Order from your favourite restraunts & track <br/> on the go, with the all-new Swiggy app.</h2> 
        <div class = "googleclass">
        <a class="googleplay" href="#"><img  src = {google2} className = "googleplay2"  alt = "home"/></a>
        

    
    <a class="googleplay" href="#"><img  src = {google1} className = "googleplay1"  alt = "home"/>
    </a>
    </div>
    
        <div className = "mt-3">
           
            
            
            

           
            


                
              
              
              </div>
             
            </div>
                
            </div>
        
        <div>
        <a class="mob1" href="#"><img  src = {mobile1} className = "mob1"  alt = "home"/>  </a> </div>
        
        <div>
   
    <a class="mob2" href="#"><img  src = {mobile2} className = "mob2"  alt = "home"/>
    </a> </div>
 </section>






 
        </>

    );
};
export default Services;