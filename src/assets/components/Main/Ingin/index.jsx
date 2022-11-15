import React from "react";
import "./style.css"
import buttonIMage from "../../../images/Group.svg";
import tel from "../../../images/telUs.svg"

const index = () =>{
    return (
      <>
        <section className="Ingin">
          <div className="container">
            <h3 className="InginHeading">
              Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak
              Sekitar Kita?
            </h3>
            <p className="InginDesc">Percayakan melalui kegiatan kita</p>
            <button className="InginButton">
              Donasi dengan Kami <img src={buttonIMage} alt="btn" />
            </button>
            <span className="Atau">Atau</span>
            <button className="TelUs">
              Hubungi Kami <img src={tel} alt="" />
            </button>
          </div>
        </section>
      </>
    );
}

export default index