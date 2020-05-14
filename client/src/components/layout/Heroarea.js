import React, { useEffect, useRef } from "react";
import image from "../../img/portrait2.png";
import M from "materialize-css/dist/js/materialize.min.js";

const Heroarea = () => {
   const parallax = useRef();

   useEffect(() => {
      M.Parallax.init(parallax.current, {});
   });

   return (
      <div className='container'>
         <section id='#hero' className='dark-bg'>
            <div className='row'>
               <div className='col s12 m7 left-align pl-25'>
                  <p className='main-text'>
                     Quality Code<span className='blinking'>.</span>
                  </p>
                  <p className='secondary-text flow-text'>
                     I deliver the perfect website for your needs using the
                     latest technologies
                  </p>
               </div>
               <div
                  className='col m5 center-align hide-on-small-and-down img-container'
                  style={{ paddingTop: "30px" }}
               >
                  <img className='responsive-img' src={image} alt='portrait' />
               </div>
            </div>
         </section>
      </div>
   );
};

export default Heroarea;
