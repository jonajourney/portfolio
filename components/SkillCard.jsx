import React from 'react'

export default function SkillCard(props) {

    //something like this works too
    // let resArr = [];
    // props.skillSet.forEach((skill, key) => {
    //     resArr.push(<p key={key}>{skill}</p>)
    // })
    return (
        <div className='skillCard--panel'>
            <p>
                {props.skillSection}
            </p>
            <p>
                {props.skillSet.map((skill, index) => {
                   return (
                   <span className="skill--item" key={index}>
                        {skill}
                    </span>)
                })}
            </p>
        </div>
    )
}