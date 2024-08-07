import React from "react";

export default function Project(props) {

    return (
        <div className="project-cards">
            <img></img>
            <div>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.intro}
                </p>
                <p>
                    {props.acheivements}
                </p>
                <p>
                    {props.skills}
                </p>
            </div>
        </div>
    )
}