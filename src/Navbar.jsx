import React from 'react'
import logo from "../src/images/swiggynavbar.png";
import web from "../src/images/maindinner.png";
const Navbar = () => {
    return (
        <>
<section>
 <section className = "child">
 <div class = "navicons">
<a class="navbar-brand" id = "straight" href="#"><img  src = {logo} className = "logologo"  alt = "home"/>  
 </a>

 <a class="nav-link active" id = "right"aria-current="page" href="#"><strong>Login</strong></a>
 <form>
<button class="signup" type="submit">Sign up</button>
</form>

</div>


          <section id = "header" className = "d-flex align-items-center">
            <div className = "container_fluid nav_bg">

               

                
                    
                    <div className = "col-10 mx-right"></div>
                    <div classname = "row">




<section >
      <div className = "hero-section">
    <div class = "wrapper">
<h1><span></span></h1>
    </div>
        <h2 className = "order" id = "orderfood"> Order food from favourite restraunts near you.</h2> 
        <div className = "mt-3">
            <input type="text"  class = "inputbutton" placeholder ="Enter your delivery location  locate me "/> <button className = "findfood"> FIND FOOD

            </button>
            
            
            

            <h4 class = "cities">
                POPULAR CITIES IN INDIA</h4>
               
            
 <div className = "citysection">
< h4 class= "dark"> Ahmedabad</h4> <h4 class = "light"> Bangalore</h4><h4 class= "dark">Chennai</h4> <h4 class = "light">Delhi</h4> <h4 class= "dark">Gurgaon</h4> <h4 class= "light">Hyderabad</h4> <h4 class= "dark">Kolkata</h4>
 <h4 class= "light">Mumbai</h4><br/><h4 class = "dark">Pune</h4><h4 class= "light">& more.</h4>
</div>

                

              </div>
      </div>
</section>
       <section >
     

       </section>

   </div>
            </div>
                
          
   
       
 </section>











       
       </section>

       <section className = "child" >
<div> 
<a class="navbar-brand" href="#"><img  src = {web} className = "main"  alt = "home"/>
    </a>
</div>
       </section>

       </section>
      
</>
    );
};

export default Navbar;







