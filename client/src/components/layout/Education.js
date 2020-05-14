import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Education = () => {
   return (
      <ScrollableAnchor id={"education"}>
         <div className='container'>
            <section>
               <h5
                  style={{ padding: "0.5rem" }}
                  className='center-align header-bg white-text z-depth-1'
               >
                  Education
               </h5>
               <div className='row'>
                  <div className='col s12 m6'>
                     <div className='card blue-grey darken-1 education-item'>
                        <div className='card-content white-text'>
                           <span className='card-title'>
                              Bachelor in Computer Science
                           </span>
                           <p className='grey-text'>2013</p>
                           <p>URJC, Madrid (Spain)</p>
                        </div>
                        {/* <div className='card-action'>
                           <a href='#!'>This is a link</a>
                           <a href='#!'>This is a link</a>
                        </div> */}
                     </div>
                  </div>
                  <div className='col s12 m6'>
                     <div className='card blue-grey darken-1 education-item'>
                        <div className='card-content white-text'>
                           <span className='card-title'>
                              C2 Cambridge Proficiency
                           </span>
                           <p className='grey-text'>2016</p>
                           <p>The English Academy, Dublin (Ireland)</p>
                        </div>
                        {/* <div className='card-action'>
                           <a href='#!'>This is a link</a>
                           <a href='#!'>This is a link</a>
                        </div> */}
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </ScrollableAnchor>
   );
};

export default Education;
