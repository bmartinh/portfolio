import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Skills = () => {
   return (
      <ScrollableAnchor id={"skills"}>
         <div className='container'>
            <section>
               <h5
                  style={{ padding: "0.5rem" }}
                  className='center-align header-bg white-text z-depth-1'
               >
                  Skills
               </h5>
               <div className='row'>
                  <div className='col s12 m4'>
                     <div className='card bg-gradient-light skill-card'>
                        <div className='card-content center-align'>
                           <i className='large material-icons fas fa-desktop mb-10'></i>
                           <span className='card-title title-font'>
                              Front-End
                           </span>
                           <ul
                              className='collection'
                              style={{ border: "none" }}
                           >
                              <li className='collection-item transparent skill-item'>
                                 8+ years of experience
                              </li>
                              <li className='collection-item transparent skill-item'>
                                 React JS v16.8
                              </li>
                              <li className='collection-item transparent skill-item'>
                                 ASP.NET MVC
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className='col s12 m4'>
                     <div className='card bg-gradient-dark skill-card'>
                        <div className='card-content center-align white-text'>
                           <i className='large material-icons fas fa-database mb-10'></i>
                           <span className='card-title'>Back-End</span>
                           <ul
                              className='collection'
                              style={{ border: "none" }}
                           >
                              <li className='collection-item transparent skill-item'>
                                 C#
                              </li>
                              <li className='collection-item transparent skill-item'>
                                 Node JS, Express
                              </li>
                              <li className='collection-item transparent skill-item'>
                                 Mongo DB, SQL Server
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className='col s12 m4'>
                     <div className='card bg-gradient-light skill-card'>
                        <div className='card-content center-align'>
                           <i className='large material-icons fas fa-people-carry mb-10'></i>
                           <span className='card-title'>Team Player</span>
                           <ul
                              className='collection'
                              style={{ border: "none" }}
                           >
                              <li className='collection-item transparent skill-item'>
                                 <i className='tiny material-icons fas fa-heart'></i>
                                 {"  "}
                                 working with others
                              </li>
                              <li className='collection-item transparent skill-item'>
                                 Dedicated
                              </li>
                              <li className='collection-item transparent skill-item'>
                                 Competitive
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </ScrollableAnchor>
   );
};

export default Skills;
