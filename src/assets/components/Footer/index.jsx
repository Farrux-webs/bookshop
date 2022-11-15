import React from "react"
import "./style.css"
import logo from "../../images/logo.svg"
import C from "../../images/C.svg"

const index = () =>{
    return (
      <footer>
        <div className="container Footerwrapper">
          <div className="footerRightWrapper">
            <div className="headingWrapper">
              <a href="link">
                <img src={logo} width="52" height="42" alt="" />
              </a>
              <h2 className="Heading">Pojok Baca Probolinggo</h2>
            </div>
            <ul className="medias">
              <li className="bi bi-instagram socials"></li>
              <li className="bi bi-facebook socials"></li>
              <li className="bi bi-youtube socials"></li>
            </ul>
          </div>
          <ul className="FooterWrapperLeft">
            <li className="FooterListItem">
              <h4 className="FooterListItemHeading">Kontak</h4>
              <a href="link" className="FooterLinks">
                Email
              </a>
              <a href="link" className="FooterLinks">
                Alamat
              </a>
              <a href="link" className="FooterLinks">
                No. Rekening
              </a>
            </li>
            <li className="FooterListItem">
              <h4 className="FooterListItemHeading">Tentang Kami</h4>
              <a href="link" className="FooterLinks">
                Umum
              </a>
            </li>
            <li className="FooterListItem">
              <h4 className="FooterListItemHeading">Galery</h4>
              <a href="link" className="FooterLinks">
                Kegiatan 2018
              </a>
              <a href="link" className="FooterLinks">
                Kegiatan 2019
              </a>
              <a href="link" className="FooterLinks">
                Kegiatan 2020
              </a>
              <a href="link" className="FooterLinks">
                Kegiatan 2021
              </a>
            </li>
          </ul>
        </div>
        <div className="Bottom">
          <p className="BottomText"> <img src={C} alt="" /> Pojok Baca Probolinggo 2022</p>
        </div>
      </footer>
    );
}
export default index