import React from "react"
import "./style.css"
import testmonial1 from "../../../images/MohammadHatta.png"
import testmonial2 from "../../../images/Hajwa.png"
import icomeImg from "../../../images/JudulBuku.svg";
import IncomeDatas from "./incomeDatas"
import TestmonialCard from "./testmonial"


const index = ()=>{
    return (
      <>
        <section className="testmonials">
          <div className="container">
            <h2 className="SectionHeading">
              Kenapa Kita <span>Harus</span> Membaca Buku?
            </h2>
            <div className="testmonialsWrapper">
              <TestmonialCard
                img={testmonial1}
                h3=" “Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”"
                strong="Mohammad Hatta"
                p="Wakil Presiden Indonesia Pertama"/>
              <TestmonialCard
                img={testmonial2}
                h3=" “Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!"
                strong="Najwa Shihab"
                p="Duta Membaca"/>
            </div>
            <ul className="incomeDataWrapper">
              <IncomeDatas img={icomeImg} count="500+" name="Judul Buku" />
              <IncomeDatas img={icomeImg} count="$0+" name="Gratis Peminjaman"/>
              <IncomeDatas img={icomeImg} count="5" name="Kegiatan Rutin" />
            </ul>
          </div>
        </section>
      </>
    );
}
export default index