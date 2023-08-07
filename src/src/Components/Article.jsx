import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import "../css/styles.css";

type Props = {};
const BoxLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover {
    background-color: #ddd;
  }
`;

const TrashGuide = (props: Props) => {
  return (
    <div>
      
      <Header page={1} />
      <section id="headerImgPaint">
        <article>
          <div id="fixedWidth"></div>
        </article>

        <div className="parallax" data-velocity="-.3"></div>
        <div className="parallax" data-velocity="-.2" data-fit="525">
          <div id="fixedWidth">
            <div id="window">
              <div id="textWindow">
                <h1> Article</h1>
                <h1> </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="overviewGuide" style={{ paddingTop: "100px" }}>

        <div id="fixedWidth">
          <div id="desclongtrashguide" style={{ textAlign: "left" }}>
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>Artikel Tentang Pengelolaan Sampah</b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Sampah merupakan salah satu masalah yang pastinya dialami oleh
                setiap negara di seluruh dunia, salah satunya Indonesia.
                Indonesia belum dapat menemukan cara yang efektif untuk
                mengurangi penumpukan sampah. Penyebab utama dari penumpukan
                sampah adalah jumlah penduduk yang semakin padat tetapi tempat
                untuk menampung sampah kurang. Masyarakatnya juga kurang sadar
                bahwa masalah tentang sampah ini cukup mengkhawatirkan karena
                kurangnya edukasi tentang bagaimana cara untuk memilah sampah
                dengan baik. Maka dari itu, melalui program ini kami akan
                menjelaskan tentang apa saja macam-macam dari sampah sehingga
                masyarakat bisa lebih sadar dan harapannya permasalahan tentang
                sampah ini bisa menjadi lebih baik kedepannya.
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div
            id="articlepreview"
            style={{ textAlign: "left", marginTop: "20px" }}
          >
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>
                  Tingkat Daur Ulang Sampah Plastik di Indonesia Masih Rendah
                </b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Saat ini, industri daur ulang belum memperoleh bahan baku jenis
                plastik PET yang dibutuhkan dari dalam negeri. Akibatnya,
                industri daur ulang harus mengimpor bahan baku sampah plastik
                hingga 750 ribu ton per tahun. Bahkan, permintaan industri
                plastik nasional diprediksi akan terus meningkat hingga menjadi
                delapan juta ton pada 2025. "Tingkat daur ulang (recycle rate)
                sampah plastik di Indonesia baru menyentuh angka tujuh persen,
                dengan jenis plastik jenis PET (yang lazim digunakan untuk
                kemasan AMDK botol dan galon) mencapai 75 persen tingkat daur
                ulang," tulis paparan laporan lembaga Sustainable Waste
                Indonesia (SWI) belum lama ini.
                <br />
                <br />
                <BoxLink to="/Article1">Read More</BoxLink>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div
            id="articlepreview"
            style={{ textAlign: "left", marginTop: "20px" }}
          >
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>
                  Zero Waste Lifestyle Menantang Kamu Untuk Menerapkan Gaya
                  Hidup Bebas Sampah. Bisa?
                </b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Gaya hidup modern mendorong manusia untuk terus menerus
                membutuhkan banyak barang. Kita nggak sadar kalau membeli barang
                sama saja menghasilkan sampah, apalagi barang sekali pakai.
                Aktivitas manusia semakin beragam setiap harinya, dan semakin
                banyak pula barang dan produk yang dibeli sehingga sampah yang
                dihasilkan sudah melebihi dari kemampuan alam untuk menyerapnya.
                Kita lupa bahwa lautan dan sungai sudah tercemar, serta miliaran
                ton tumpukan sampah yang dihasilkan manusia tidak bisa terurai
                atau didaur ulang.
                <br />
                <br />
                <BoxLink to="/Article2">Read More</BoxLink>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div
            id="articlepreview"
            style={{ textAlign: "left", marginTop: "20px" }}
          >
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>Dampak Sampah terhadap Lingkungan Alam dan Kesehatan Kita</b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Manusia menghasilkan banyak sampah, baik organik maupun anorganik. 
                Sampah organik dapat terurai dengan sendirinya di alam melalui proses alamiah. 
                Sedangkan, sampah anorganik tidak dapat terurai sendiri dan memerlukan campur tangan manusia dalam mengelolanya.
                Sampah anorganik yang tidak diolah dengan baik dapat memenuhi lautan dan tempat pembuangan sampah. Pada faktanya, sampah anorganik tidak ditangani dengan baik.
                <br />
                <br />
                <BoxLink to="/Article3">Read More</BoxLink>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div
            id="articlepreview"
            style={{ textAlign: "left", marginTop: "20px" }}
          >
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>Lorem, ipsum dolor4.</b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione possimus cum, quasi delectus fugiat aliquid at ipsum
                magnam temporibus officiis. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Culpa, debitis. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Quaerat, enim. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quasi, eum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                deleniti maiores veniam nihil, harum minus dicta minima
                perferendis consequuntur necessitatibus!
                <br />
                <br />
                <BoxLink to="/Article4">Read More</BoxLink>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div
            id="articlepreview"
            style={{ textAlign: "left", marginTop: "20px" }}
          >
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>Jenis-jenis Sampah berdasarkan Klasifikasinya</b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Sampah bisa berasal dari mana saja selama terdapat aktivitas kehidupan di daerah tersebut. 
                Sampah bisa berasal dari rumah tangga, pasar, jalanan, fasilitas umum (terminal, stasiun, bandara), dan lain sebagainya. 
                Sampah dapat diklasifikasikan atau dikelompokkan menjadi beberapa jenis, yaitu sampah berdasarkan jenisnya, sampah berdasarkan sumbernya, sampah berdasarkan bentuknya, dan sampah berdasarkan sifat-sifat biologis.
                <br />
                <br />
                <BoxLink to="/Article5">Read More</BoxLink>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div
            id="articlepreview"
            style={{ textAlign: "left", marginTop: "20px" }}
          >
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>Lorem, ipsum dolor6.</b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione possimus cum, quasi delectus fugiat aliquid at ipsum
                magnam temporibus officiis. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Culpa, debitis. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Quaerat, enim. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quasi, eum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                deleniti maiores veniam nihil, harum minus dicta minima
                perferendis consequuntur necessitatibus!
                <br />
                <br />
                <BoxLink to="/Article6">Read More</BoxLink>
                <br />
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TrashGuide;
