import React from "react"


function Card(props){

    return(
        <div className="card-container">
            <h4>{props.name.fName[0]}. {props.name.lName} #{props.number}</h4>
            <div className="card">
                <img src={props.imgSrc} alt="" />
                <div className="player-att-grid">
                    <strong>Position: {props.position}</strong>
                    <p>Height: {props.height}</p>
                    <p>Age: {props.age}</p>
                </div>
            </div>
        </div>
)}

export default Card;