import React from "react";
import "./style.css";
// this is my portfolio page
const About = () => (
  <div className="wrapper">
  <div className="boxed">
            <main id="portMain">       
                <div className="row">
                    <div className="col-sm-12">
                        <h1>
                            portfolio.
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        project 1: cocktails and reviews game search engine
                        <br/>
                        <img alt="project-1-cocktails-reviews-screenshot" src="./assets/cAndR-Reviews.png"/>
                        <br/>
                        <a href="https://github.com/umutamac/Game-Search-Engine" target="_blank">link to repo</a> |
                        <a href="https://umutamac.github.io/Game-Search-Engine/" target="_blank">link to deployed app</a>
                    </div>
                    <div className="col-sm-6">
                        project 2: EarBud
                        <br/>
                        <img alt="project-2-EarBud-review-search-music" src="./assets/EarBudScreenCap.png"/> 
                        <br/>
                        <a href="https://github.com/julianriverajr/EarBud" target="_blank">link to repo</a> |
                        <a href="https://earbudteam8.herokuapp.com/" target="_blank">link to deployed app</a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        refactor homework
                        <br/>
                        <img alt="Homework-1-refactor-screenshot" src="https://raw.githubusercontent.com/julianriverajr/Homework1/master/assets/horiseon-screenshot.png"/>
                        <br/>
                        <a href="https://github.com/julianriverajr/Homework1" target="_blank">link to repo</a> |
                        <a href="https://julianriverajr.github.io/Homework1/" target="_blank">link to deployed app</a>
                         
                    </div>
                    <div className="col-sm-6">
                        portfolio homework screenshot
                        <br/>
                        <img alt="portfolio-about-me-screenshot" src="./assets/portfolioScreenShota.png"/>
                        <br/>
                        <a href="https://github.com/julianriverajr/Homework-2-Responsive-Portfolio" target="_blank">link to repo</a> |
                        <a href="https://julianriverajr.github.io/Homework-2-Responsive-Portfolio/index.html" target="_blank">link to deployed app</a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6 bottom">
                        random password generator
                        <br/>
                        <img alt="password-Generator-Screenshot" src="./assets/passwordGeneratorScreenshot.png"/> 
                        <br/>
                        <a href="https://github.com/julianriverajr/Password-Generator" target="_blank">link to repo</a> |
                        <a href="https://julianriverajr.github.io/Password-Generator/" target="_blank">link to deployed app</a>
                    </div>
                    <div className="col-sm-6 bottom2">
                        read me generator (CLI app)
                        <br/>
                        <img alt="readme-generator" src="./assets/generatedReadMe.png"/> 
                        <br/>
                        <a href="https://github.com/julianriverajr/README-Generator" target="_blank">link to repo</a>
                    </div>
                </div>
            </main>
        </div>
        </div>
);

export default About;
