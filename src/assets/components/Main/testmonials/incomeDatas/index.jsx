import React from "react"
import "../style.css"


const index = (props)=>{
    return (
      <>
        <li className="incomeData">
          <img src={props.img} alt="sms" />
          <div className="incomeDataMain">
            <strong className="counter">{props.count}</strong>
            <span className="DataType">{props.name}</span>
          </div>
        </li>
      </>
    );
}

export default index