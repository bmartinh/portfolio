import React from "react";

import {
   VerticalTimeline,
   VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import ScrollableAnchor from "react-scrollable-anchor";

const CV = () => {
   return (
      <ScrollableAnchor id={"cv"}>
         <div className='container'>
            <section>
               <h5
                  style={{ padding: "0.5rem" }}
                  className='center-align header-bg white-text z-depth-1'
               >
                  Currículum Vitae
               </h5>

               <VerticalTimeline>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--work'
                     contentStyle={{
                        // background: "rgb(33, 150, 243)",
                        background:
                           "linear-gradient(#034f8d, #4fc0ec) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid #034f8d"
                     }}
                     date='Jan 2020 - present'
                     iconStyle={{
                        background: "#034f8d",
                        color: "#fff"
                     }}
                     icon={<WorkIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        React Developer
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        Freelance
                     </h6>
                     <p>
                        Web Applications development, UI Design, Courses &
                        Formation
                     </p>
                     <br />
                     <div className='chip'>React</div>
                     <div className='chip'>Redux</div>
                     <div className='chip'>Node JS</div>
                     <div className='chip'>Javascript ES6</div>
                     <div className='chip'>Express</div>
                     <div className='chip'>Mongo DB</div>
                     <div className='chip'>Materialize CSS</div>
                     <div className='chip'>Sass</div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--work'
                     contentStyle={{
                        background:
                           "linear-gradient(#034f8d, #4fc0ec) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid  #034f8d"
                     }}
                     date='Jan 2017 - Dec 2019'
                     iconStyle={{
                        background: "#034f8d",
                        color: "#fff"
                     }}
                     icon={<WorkIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        Programming Teacher
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        URJC, Madrid(Spain)
                     </h6>
                     <p>
                        Taught programming and databases at URJC University as
                        an associate teacher
                     </p>
                     <br />
                     <div className='chip'>Java</div>
                     <div className='chip'>Oracle DB</div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--work'
                     contentStyle={{
                        background:
                           "linear-gradient(#034f8d, #4fc0ec) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid  #034f8d"
                     }}
                     date='Aug 2014 - Dec 2016'
                     iconStyle={{
                        background: "#034f8d",
                        color: "#fff"
                     }}
                     icon={<WorkIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        ASP.NET MVC 4/C# Developer
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        ERS, Dublin(Ireland)
                     </h6>
                     <p>
                        Web developer in front-end side of application. Design
                        of new modules, mobile adaptation using JQuery Mobile
                     </p>
                     <br />
                     <div className='chip'>ASP.NET MVC 4</div>
                     <div className='chip'>C#</div>
                     <div className='chip'>HTML5/CSS3</div>
                     <div className='chip'>JQuery</div>
                     <div className='chip'>JQuery Mobile</div>
                     <div className='chip'>Visual Studio 2013</div>
                     <div className='chip'>SQL Server 2008</div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--work'
                     contentStyle={{
                        background:
                           "linear-gradient(#034f8d, #4fc0ec) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid  #034f8d"
                     }}
                     date='Jan 2014 - Jun 2014'
                     iconStyle={{
                        background: "#034f8d",
                        color: "#fff"
                     }}
                     icon={<WorkIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        ASP.NET Web Forms/C# Developer
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        AXA, Madrid(Spain)
                     </h6>
                     <p>
                        Graphic components design for web application using .NET
                        technologies and Javascript components such as JQGrid.
                        Responsive design
                     </p>
                     <br />
                     <div className='chip'>ASP.NET WebForms</div>
                     <div className='chip'>C#</div>
                     <div className='chip'>HTML5/CSS3</div>
                     <div className='chip'>JQuery</div>
                     <div className='chip'>Bootstrap</div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--education'
                     contentStyle={{
                        //#df1900 - #eb4b4b
                        background:
                           "linear-gradient(#df1900, #eb904b) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid  #df1900"
                     }}
                     date='Feb 2013 - Dec 2013'
                     iconStyle={{
                        background: "#df1900",
                        color: "#fff"
                     }}
                     icon={<SchoolIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        Computer Science Bachelors Degree Final Project
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        URJC, Madrid(Spain)
                     </h6>
                     <p>
                        Web responsive application to study learning styles in
                        university classrooms.
                     </p>
                     <br />
                     <div className='chip'>ASP.NET WebForms</div>
                     <div className='chip'>C#</div>
                     <div className='chip'>HTML5/CSS3</div>
                     <div className='chip'>JQuery Mobile</div>
                     <div className='chip'>LINQ</div>
                     <div className='chip'>Visual Studio 2010</div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--work'
                     contentStyle={{
                        background:
                           "linear-gradient(#034f8d, #4fc0ec) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid  #034f8d"
                     }}
                     date='April 2011 - Jan 2013'
                     iconStyle={{
                        background: "#034f8d",
                        color: "#fff"
                     }}
                     icon={<WorkIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        ASP.NET Web Forms/C# Developer
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        Accenture, Madrid(Spain)
                     </h6>
                     <p>
                        Improvements, adjustments and maintenance duties for web
                        application. Mobile version using Jquery Mobile. New web
                        components and graphics design. Backend and Frontend
                        work
                     </p>
                     <br />
                     <div className='chip'>ASP.NET WebForms</div>
                     <div className='chip'>C#</div>
                     <div className='chip'>HTML5/CSS3</div>
                     <div className='chip'>Web Services</div>
                     <div className='chip'>JQuery/ JQuery Mobile</div>
                     <div className='chip'>WCF</div>
                     <div className='chip'>LINQ</div>
                     <div className='chip'>Visual Studio 2008-2010</div>
                     <div className='chip'>SQL Server 2008</div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--work'
                     contentStyle={{
                        background:
                           "linear-gradient(#034f8d, #4fc0ec) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid  #034f8d"
                     }}
                     date='Dec 2007 - March 2011'
                     iconStyle={{
                        background: "#034f8d",
                        color: "#fff"
                     }}
                     icon={<WorkIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        C# Windows Forms/ ASP.NET Developer
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        Indra, Madrid(Spain)
                     </h6>
                     <p>
                        Windows forms controls design, code optimization and
                        maintenance duties. ASP.NET web development short
                        project.
                     </p>
                     <br />
                     <div className='chip'>C# Windows Forms</div>
                     <div className='chip'>ASP.NET WebForms</div>
                     <div className='chip'>Web Services</div>
                     <div className='chip'>Javascript</div>
                     <div className='chip'>HTML</div>
                     <div className='chip'>AJAX</div>
                     <div className='chip'>Visual Studio 2005</div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                     className='vertical-timeline-element--education'
                     contentStyle={{
                        background:
                           "linear-gradient(#df1900, #eb904b) no-repeat center center",
                        color: "#fff"
                     }}
                     contentArrowStyle={{
                        borderRight: "7px solid  #df1900"
                     }}
                     date='Sep 2007 - Nov 2007'
                     iconStyle={{
                        background: "#df1900",
                        color: "#fff"
                     }}
                     icon={<SchoolIcon />}
                  >
                     <h5 className='vertical-timeline-element-title'>
                        ASP.NET & C# course
                     </h5>
                     <br />
                     <h6 className='vertical-timeline-element-subtitle'>
                        Indra, Madrid(Spain)
                     </h6>
                     <p>ASP.NET & C# Windows Forms formation</p>
                     <br />
                     <div className='chip'>ASP.NET WebForms</div>
                     <div className='chip'>C# Windows Forms</div>
                  </VerticalTimelineElement>
               </VerticalTimeline>
               <div className='row center-align' style={{ marginTop: "20px" }}>
                  <div className='col s12 m6'>
                     <a
                        href='http://localhost:5000/api/files/CV_ES'
                        download='CV_ES.pdf'
                        className='waves-effect waves-light btn blue darken-4 m-10 glowing'
                     >
                        <i className='material-icons left mb-10'>
                           file_download
                        </i>
                        Download CV(ES)
                     </a>
                  </div>
                  <div className='col s12 m6'>
                     <a
                        href='http://localhost:5000/api/files/CV_EN'
                        download='CV_EN.pdf'
                        className='waves-effect waves-light btn blue darken-4 m-10 glowing'
                     >
                        <i className='material-icons left mb-10'>
                           file_download
                        </i>
                        Download CV(EN)
                     </a>
                  </div>
               </div>
            </section>
         </div>
      </ScrollableAnchor>
   );
};

export default CV;
