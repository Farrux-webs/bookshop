import React from "react";
import "../style.css";

const index = (props)=>{
    return (
      <>
        <li className="CardItem">
          <span className="Year">{props.year}</span>
          <h3 className="cardHeading">{props.heading}</h3>
          <p className="cardDesc">{props.desc}</p>
        </li>
      </>
    );
}
export default index
