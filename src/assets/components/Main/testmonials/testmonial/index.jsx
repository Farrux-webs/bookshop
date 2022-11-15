import React from "react";
import "../style.css";


const index = (props) =>{
    return (
      <>
        <div className="testmonial">
          <h3 className="TestmonialHeading">
           {props.h3}
          </h3>
          <div className="testmonialMain">
            <img src={props.img} alt="" />
            <div className="accountData">
              <strong className="name">{props.strong}</strong>
              <p className="Job">{props.p}</p>
            </div>
          </div>
        </div>
      </>
    );
}
export default index