import React from "react";
import "./style.css";
import buttonIMage from  "../../../images/Group.svg"
import imgCollection1 from "../../../images/imgCollection1.svg"
import imgCollection2 from "../../../images/imgCollection2.svg"
import imgCollection3 from "../../../images/imgCollection3.svg"
import imgCollection4 from "../../../images/imgCollection4.svg"
import imgCollection5 from "../../../images/imgCollection5.svg"
import imgCollection6 from "../../../images/imgCollection6.svg"
import imgCollection7 from "../../../images/imgCollection7.svg"

const index = ()=>{
    return (
      <>
        <section className="hero">
          <div className="container wrapper">
            <p className="heroTopText">
              <span className="heroTopTextInline">Pojok Baca</span> Probolinggo
            </p>
            <h1 className="heading">
              Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat
            </h1>
            <div className="inputWrapper">
              <input type="search" placeholder="Cari Judul Buku" id="search" />
              <button className="heroButton">
                Donasi dengan Kami <img src={buttonIMage} alt="btn" />
              </button>
            </div>
            <div className="CollectionsWrapper">
              <ul className="Collection">
                <li className="Collection-item">
                  <p className="Collection-item-title">
                    Sedang Tuhan pun Cemburu
                  </p>
                  <p className="Collection-item-name">Emha Ainun Nadjib</p>
                  <img
                    src={imgCollection1}
                    alt="Comix photo"
                    width="60"
                    height="86"
                  />
                </li>
                <li className="Collection-item">
                  <p className="Collection-item-title">Laut Bercerita</p>
                  <p className="Collection-item-name">Leila S. Chudori</p>
                  <img
                    src={imgCollection3}
                    alt="Comix photo"
                    width="105"
                    height="155"
                  />
                </li>
                <li className="Collection-item">
                  <p className="Collection-item-title">
                    Perempuan di Titik Nol
                  </p>
                  <p className="Collection-item-name">Nawal eEl Saadawi</p>
                  <img
                    src={imgCollection2}
                    alt="Comix photo"
                    width="105"
                    height="155"
                  />
                </li>
              </ul>
              <div className="centerPhoto">
                <p className="Collection-item-title">
                  Toto-chan : The Little Girl At The Window
                </p>
                <p className="Collection-item-name">Testuko Kuroyanagi</p>
                <img
                  src={imgCollection4}
                  alt="comix photo"
                  width="172"
                  height="289"
                />
                <i class="bi bi-caret-right arrow-right"></i>
                <i class="bi bi-caret-left arrow-left"></i>
              </div>

              <ul className="Collection">
                <li className="Collection-item">
                  <p className="Collection-item-title">
                    Hati-Hati dengan Sampah
                  </p>
                  <p className="Collection-item-name">Ukjae Lee</p>
                  <img
                    src={imgCollection7}
                    alt="Comix photo"
                    width="60"
                    height="86"
                  />
                </li>
                <li className="Collection-item">
                  <p className="Collection-item-title">
                    Berjalan di Atas Cahaya
                  </p>
                  <p className="Collection-item-name">Hanum Salsabiela Rais</p>
                  <img
                    src={imgCollection5}
                    alt="Comix photo"
                    width="105"
                    height="155"
                  />
                </li>
                <li className="Collection-item">
                  <p className="Collection-item-title">Anatomi Rasa</p>
                  <p className="Collection-item-name">Ayu Utami</p>
                  <img
                    src={imgCollection6}
                    alt="Comix photo"
                    width="105"
                    height="155"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
}

export default index