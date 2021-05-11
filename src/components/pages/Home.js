import React from "react";
import "./style.css";
// this is my about me page
const Home = () => (
  <div className="wrapper">
  <div className="boxed" id="boxed">
            <main>
                <div className="row">
                    <div className="col-sm-12">
                        <h1>
                            about me.
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <img id="myFace" alt="me" src="https://media-exp1.licdn.com/dms/image/C4D03AQFHe7-y4AAmkg/profile-displayphoto-shrink_400_400/0/1602219508047?e=1612396800&v=beta&t=xH6MCSgiGWmTE7VJKYS3c8J63t0G_xPkQopJbQ4MIhI" /> 
                        <p>
                            I am a bag of meat and bone. 
                        </p>
                        <p>
                            I enjoy learning, I enjoy reading, and I enjoy doing nothing, too.
                            I'm learning to code at the Coding BootCamp at UT Austin.
                            I look forward to continuing my learning to become a Full Stack Web Developer.
                            I'm nearly there, only a few days left in the boot camp.
                        </p>
                        <a target="_blank" href="https://drive.google.com/file/d/1Xvio1fshe1eeOOO_t_OzbLIjFcUB7QQP/view?usp=sharing">My resume</a>
                    </div>
                </div>
            </main>
        </div>
        </div>
);

export default Home;
