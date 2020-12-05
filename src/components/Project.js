import React from "react";

function Project({title, imageURL, githubURL, deployedLink, alt}){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={imageURL} alt={alt} />
                <h5>
                    {title}
                </h5>
                <a href={githubURL} target="_blank">link to repo</a> |
                <a href={deployedLink} target="_blank">link to deployed app</a>
            </div>
        </div>
    )
}

export default Project;