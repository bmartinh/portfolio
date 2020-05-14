import React, { useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Footer = () => {
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");

   return (
      <ScrollableAnchor id={"contact"}>
         <footer className='page-footer transparent'>
            <div className='container'>
               <div className='row'>
                  <div className='col s12'>
                     <h5 className='white-text'>Contact</h5>
                     <form>
                        <div className='input-field'>
                           <input
                              className='white-text'
                              id='subject'
                              type='text'
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                           />
                           <label className='white-text' htmlFor='subject'>
                              Subject
                           </label>
                        </div>
                        <div className='input-field'>
                           <textarea
                              id='message'
                              className='materialize-textarea white-text'
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                           ></textarea>
                           <label className='white-text' htmlFor='message'>
                              Message
                           </label>
                        </div>
                        <br />
                        <div>
                           <a
                              className='btn'
                              href={`mailto:borj01ster@gmail.com?subject=${encodeURI(
                                 subject
                              )}&body=${encodeURI(message)}`}
                           >
                              Send
                           </a>
                        </div>
                     </form>
                  </div>
               </div>
               <div className='row'>
                  <div className='col s12 center-align'>
                     <a href='#!' className='btn-flat phone-btn'>
                        <i className='material-icons left'>phone</i>+34 685 277
                        840
                     </a>
                     {/* <label className='white-text'>
                     <i className='material-icons'>phone</i>+34685277840
                  </label> */}
                     <a
                        href='https://www.linkedin.com/in/borjamartinhernandez'
                        className=' white-text btn-flat'
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        <i className='medium material-icons fab fa-linkedin mb-10'></i>
                     </a>
                  </div>
               </div>
            </div>
            <div className='footer-copyright'>
               <div className='container center-align'>
                  © 2020 Borja Martín Hernández
               </div>
            </div>
         </footer>
      </ScrollableAnchor>
   );
};

export default Footer;
