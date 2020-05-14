import React, { useEffect, useRef } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import M from "materialize-css/dist/js/materialize.min.js";
import app1 from "../../img/accomplish2.png";
import app2 from "../../img/unsplash.png";
import app3 from "../../img/portfolio.png";

const Portfolio = () => {
   const carousel = useRef();

   useEffect(() => {
      M.Carousel.init(carousel.current, { indicators: true });
   });

   return (
      <ScrollableAnchor id={"portfolio"}>
         <div className='container'>
            <section>
               <h5
                  style={{ padding: "0.5rem" }}
                  className='center-align header-bg white-text z-depth-1'
               >
                  Portfolio
               </h5>

               <div
                  className='carousel carousel-slider center'
                  data-indicators='true'
                  ref={carousel}
               >
                  <div
                     className='carousel-item blue-grey darken-4 white-text'
                     href='#one!'
                  >
                     <h2>Accomplish</h2>
                     <p>MERN Stack Productivity App</p>
                     <img src={app1} alt='app1' className='carousel-img' />
                     <div className='carousel-fixed-item center'>
                        <a
                           href='https://github.com/bmartinh/todolist'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='waves-effect waves-light btn black mx-10 glowing'
                        >
                           <i className='material-icons left fab fa-github mb-10'></i>
                           Github
                        </a>
                        <a
                           href='https://enigmatic-coast-09722.herokuapp.com/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='waves-effect waves-light btn black mx-10 glowing'
                        >
                           <i className='material-icons left fas fa-globe-europe mb-10'></i>
                           Demo
                        </a>
                     </div>
                  </div>
                  <div
                     className='carousel-item amber darken-4 white-text'
                     href='#two!'
                  >
                     <h2>Image Search</h2>
                     <p>
                        React App that connects to Unsplash API and performs a
                        search
                     </p>
                     <img src={app2} alt='app2' className='carousel-img' />
                     <div className='carousel-fixed-item center'>
                        <a
                           href='https://github.com/bmartinh/imagesearch'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='waves-effect waves-light btn black mx-10 glowing'
                        >
                           <i className='material-icons left fab fa-github mb-10'></i>
                           Github
                        </a>
                        <a
                           href='https://unsplashimagesearch.herokuapp.com/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='waves-effect waves-light btn black mx-10 glowing'
                        >
                           <i className='material-icons left fas fa-globe-europe mb-10'></i>
                           Demo
                        </a>
                     </div>
                  </div>
                  <div
                     className='carousel-item green darken-4 white-text'
                     href='#three!'
                  >
                     <h2>Portfolio</h2>
                     <p>Personal portfolio website made with React</p>
                     <img src={app3} alt='app3' className='carousel-img' />
                     <div className='carousel-fixed-item center'>
                        <a
                           href='https://github.com/bmartinh/portfolio'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='waves-effect waves-light btn black mx-10 glowing'
                        >
                           <i className='material-icons left fab fa-github mb-10'></i>
                           Github
                        </a>
                        <a
                           href='https://borjamartinportfolio.herokuapp.com/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='waves-effect waves-light btn black mx-10 glowing'
                        >
                           <i className='material-icons left fas fa-globe-europe mb-10'></i>
                           Demo
                        </a>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </ScrollableAnchor>
   );
};

export default Portfolio;
