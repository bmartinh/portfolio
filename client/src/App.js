import React, { Fragment } from "react";
import "./App.css";

import "./scss/App.scss";

import Navbar from "./components/layout/Navbar";
import Heroarea from "./components/layout/Heroarea";
import Skills from "./components/layout/Skills";
import Portfolio from "./components/layout/Portfolio";
import CV from "./components/layout/CV";
import Education from "./components/layout/Education";
import Footer from "./components/layout/Footer";

const App = () => {
   return (
      <Fragment>
         <Navbar />
         <div style={{ marginTop: "50px" }}></div>
         <Heroarea />
         <div style={{ marginTop: "100px" }}></div>
         <Skills />
         <div style={{ marginTop: "50px" }}></div>
         <Portfolio />
         <div style={{ marginTop: "50px" }}></div>
         <CV />
         <div style={{ marginTop: "50px" }}></div>
         <Education />
         <Footer />
      </Fragment>
   );
};

export default App;
