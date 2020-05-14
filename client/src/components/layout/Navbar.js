import React, { useRef, useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { goToTop } from "react-scrollable-anchor";

const Navbar = () => {
   const sideNav = useRef();

   useEffect(() => {
      M.Sidenav.init(sideNav.current, {});
   });

   return (
      <Fragment>
         <div className='navbar-fixed'>
            {/* <nav className='transparent'> */}
            <nav className='bg-gradient-dark'>
               <div className='container'>
                  <div className='nav-wrapper'>
                     <a href='#!' className='brand-logo'>
                        BORJA MARTIN
                     </a>
                     <a
                        href='#!'
                        data-target='mobile-demo'
                        className='sidenav-trigger'
                     >
                        <i className='material-icons'>menu</i>
                     </a>
                     <ul className='right hide-on-med-and-down'>
                        <li>
                           <a href='#home' onClick={goToTop}>
                              Home
                           </a>
                        </li>
                        <li>
                           <a href='#skills'>Skills</a>
                        </li>
                        <li>
                           <a href='#portfolio'>Portfolio</a>
                        </li>

                        <li>
                           <a href='#cv'>CV</a>
                        </li>
                        <li>
                           <a href='#education'>Education</a>
                        </li>
                        <li>
                           <a href='#contact'>Contact</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>

         <ul ref={sideNav} className='sidenav' id='mobile-demo'>
            <li>
               <a href='#home' onClick={goToTop}>
                  Home
               </a>
            </li>
            <li>
               <a href='#skills'>Skills</a>
            </li>
            <li>
               <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
               <a href='#cv'>CV</a>
            </li>
            <li>
               <a href='#education'>Education</a>
            </li>
            <li>
               <a href='#contact'>Contact</a>
            </li>
         </ul>
      </Fragment>
   );
};

export default Navbar;
