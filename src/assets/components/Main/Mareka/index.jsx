import React from "react"
import "./style.css"
import Guy from "../../../images/Guy.png"
import Brooklyn from "../../../images/Brooklyn.png"
import MarekaItems from "./MarekaItems"

const index = ()=>{
    return (
      <>
        <section className="Mareka">
          <div className="container">
            <h2 className="MarekaHeading">Apa Kata Mereka?</h2>
            <p className="MarekaDesc">
              Mereka yang telah menjadi pengunjung tetap kami
            </p>
            <div className="MarekaItemWrapper">
              <MarekaItems
                itemDesc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                          sint. Velit officia consequat duis enim velit mollit. Exercitation
                          veniam consequat sunt nostrud amet."
                img={Guy}
                name="Guy Hawkins"
                address="32 Tahun, Karyawan"
              />
              <MarekaItems
                itemDesc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                          sint. Velit officia consequat duis enim velit mollit. Exercitation
                          veniam consequat sunt nostrud amet."
                img={Brooklyn}
                name="Brooklyn Simmons"
                address="20 Tahun, Mahasiswa"
              />
            </div>
            <ul className="Slider">
              <li className="SliderItems"></li>
              <li className="SliderItems"></li>
              <li className="SliderItems"></li>
            </ul>
          </div>
        </section>
      </>
    );
}
export default index