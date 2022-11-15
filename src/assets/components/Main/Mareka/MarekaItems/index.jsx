import React from "react"
import "../style.css"

const index = (props) =>{
    return (
      <>
        <div className="MareakItem">
          <p className="MarekaItemDesc">{props.itemDesc}</p>
          <div className="MarekaItemMain">
            <img src={props.img} alt="" />
            <div className="MarekaItemMainData">
              <strong className="Name">{props.name}</strong>
              <p className="address">{props.address}</p>
            </div>
          </div>
        </div>
      </>
    );
}
export default index