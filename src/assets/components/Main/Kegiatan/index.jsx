import React from "react"
import "./style.css"
import KegiatanItem from "./KegiatanItem"
// import poverty from "../../../images/Poverty.png"
// import Library from "../../../images/Library.png"
// import Foods from "../../../images/foods.png"

const index = () =>{
    return (
      <>
        <section className="Kegiatan">
          <div className="container">
            <div className="headingWr">
              <h2 className="KegiatanHeading">
                Kegiatan Pojok Baca Probolinggo
              </h2>
              <span className="KegiatanSpan">Selengkapnya</span>
            </div>
            <p className="KegiatanDesc">
              Intip kegiatan yang telah kami selenggarakan
            </p>
            <ul className="KegiatanCards">
              <KegiatanItem
                year="2021"
                heading="Mewarnai Bersama Anak Pesisir"
                desc="Kegiatan yang kami adakan pada tahun 2021"
              />
              <KegiatanItem
                year="Rutin"
                heading="Ngelapak Tiap Malam Minggu"
                desc="Kegiatan rutin yang dilakukan setiap malam minngu"
              />
              <KegiatanItem
                year="2021"
                heading="Donasi untuk Korban Erupsi Semeru"
                desc="Erupsi Gunung Semeru menggugah kita untuk"
              />
            </ul>
          </div>
        </section>
      </>
    );
}
export default index