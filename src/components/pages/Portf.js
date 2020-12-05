import React from "react";
import "./style.css";
import Project from "../Project";

// this is my portfolio page
const Portf = () => (
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
                        <Project
                        title="project 1: cocktails and reviews game search engine"
                        imageURL="https://i.imgur.com/egrCoQC.png"
                        githubURL="https://github.com/umutamac/Game-Search-Engine"
                        deployedLink="https://umutamac.github.io/Game-Search-Engine/"
                        alt="project-1-cocktails-and-game-reviews"/>
                    </div>
                    <div className="col-sm-6">
                        <Project
                        title="project 2: EarBud"
                        imageURL="https://i.imgur.com/MauKkxA.png"
                        githubURL="https://github.com/julianriverajr/EarBud"
                        deployedLink="https://earbudteam8.herokuapp.com/"
                        alt="project-2-EarBud-review-search-music"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <Project
                        title="refactor homework"
                        imageURL="https://raw.githubusercontent.com/julianriverajr/Homework1/master/assets/horiseon-screenshot.png"
                        githubURL="https://github.com/julianriverajr/Homework1"
                        deployedLink="https://julianriverajr.github.io/Homework1/"
                        alt="Homework-1-refactor-screenshot"/>
                    </div>
                    <div className="col-sm-6">
                        <Project
                        title="portfolio homework screenshot"
                        imageURL="https://i.imgur.com/hqRPVYx.png"
                        githubURL="https://github.com/julianriverajr/Homework-2-Responsive-Portfolio"
                        deployedLink="https://julianriverajr.github.io/Homework-2-Responsive-Portfolio/index.html"
                        alt="portfolio-about-me-screenshot"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6 bottom2">
                        <Project
                        title="random password generator"
                        imageURL="https://i.imgur.com/03oNNBJ.png"
                        githubURL="https://github.com/julianriverajr/Password-Generator"
                        deployedLink="https://julianriverajr.github.io/Password-Generator/"
                        alt="password-Generator-Screenshot"/>
                    </div>
                    <div className="col-sm-6 bottom2">
                        <Project
                        title="read me generator (CLI app)"
                        imageURL="https://i.imgur.com/TgT1326.png"
                        githubURL="https://github.com/julianriverajr/README-Generator"
                        deployedLink="https://github.com/julianriverajr/README-Generator"
                        alt="readme-generator"/>
                    </div>
                </div>
            </main>
        </div>
        </div>
);

export default Portf;
