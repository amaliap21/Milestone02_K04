import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router";
import Header from "../.././Header";
import Footer from "../.././Footer";
import tutupbotol from "../../../Images/sampahtutupbotol.svg";

const article1 = (props) => {
  return (
    <div>
      <Header page={1} />
      <div id="overviewArticle" style={{ paddingTop: "100px" }}>
        <div id="headerfill"></div>

        <div id="fixedwidth">
          <div id="header32">
            <h1 id="desctitle">
              Tingkat Daur Ulang Sampah Plastik di Indonesia Masih Rendah
            </h1>
          </div>
        </div>

        <div className="fixedwidth">
          <div id="headernj">
            <p id="descnj">
              Sebagian kalangan menuding, kemasan botol dan galon plastik
              polyethylene terephthalate (PET) sekali pakai, sebagai sampah tak
              berguna. Padahal, sampah plastik jenis PET adalah bahan baku
              penting dalam industri daur ulang. Sampah plastik jenis PET
              berperan besar dalam ekonomi sirkular di Indonesia.<br></br>
              <img src={tutupbotol}></img>
              <br></br>
              <br></br>
              Saat ini, industri daur ulang belum memperoleh bahan baku jenis
              plastik PET yang dibutuhkan dari dalam negeri. Akibatnya, industri
              daur ulang harus mengimpor bahan baku sampah plastik hingga 750
              ribu ton per tahun. Bahkan, permintaan industri plastik nasional
              diprediksi akan terus meningkat hingga menjadi delapan juta ton
              pada 2025.
              <br></br>
              <br></br>
              "Tingkat daur ulang (recycle rate) sampah plastik di Indonesia
              baru menyentuh angka tujuh persen, dengan jenis plastik jenis PET
              (yang lazim digunakan untuk kemasan AMDK botol dan galon) mencapai
              75 persen tingkat daur ulang," tulis paparan laporan lembaga
              Sustainable Waste Indonesia (SWI) belum lama ini.
              <br></br>
              <br></br>
              Kondisi itu pastinya mengganggu Kementerian Lingkungan Hidup dan
              Kehutanan (KLHK) yang berkomitmen untuk menggencarkan ekonomi
              sirkular dan mencapai target zero waste pada 2050. Sepanjang 2022,
              KLHK menorehkan catatan sebanyak 64 persen timbulan sampah yang
              telah berhasil dikelola dari total 68,5 juta ton sampah nasional.
              <br></br>
              <br></br>
              Dirjen Pengelolaan Limbah, Sampah, dan Bahan Beracun Berbahaya
              (PSLB3) KLHK, Rosa Vivien Ratnawati, mengatakan, strategi
              peningkatan pengelolaan sampah, dilakukan dengan menggencarkan
              penerapan ekonomi sirkular dan mendorong sampah menjadi
              industrialisasi.
              <br></br>
              <br></br>
              "Kuncinya adalah ekonomi sirkular yang terkait dengan bagaimana
              agar sampah tidak terbuang ke tempat pembuangan akhir. Ujungnya
              nanti menjadi zero waste dan zero emission," katanya di Jakarta,
              belum lama ini.
              <br></br>
              <br></br>
              Berdasarkan data Ditjen PSLB3 KLHK, dari total 68,5 juta ton
              sampah nasional, tercatat komposisi sampah yang paling dominan
              adalah sisa makanan, plastik, dan kertas.
              <br></br>
              <br></br>
              Data itu mirip dengan laporan pasca perayaan malam Tahun Baru 2023
              di Jakarta yang mencatat sampah terbanyak adalah botol air
              kemasan, wadah makanan, plastik, dan kertas.
              <br></br>
              <br></br>
              Sebelumnya, KLHK melalui Permen LHK Nomor 75 Tahun 2019
              mencetuskan Peta Jalan pengurangan sampah oleh produsen dengan
              menargetkan pengurangan sampah hingga sebesar 30 persen pada 2030.
              Target pengurangan tersebut dilakukan dengan, antara lain
              mendorong produsen AMDK mengubah desain produk berbentuk mini
              menjadi lebih besar (size up) hingga ke ukuran satu liter.
              <br></br>
              <br></br>
              "Permen LHK Nomor 75 Tahun 2019 ini merupakan upaya pemerintah
              menekan volume sampah di Indonesia," kata Rosa. Menurut dia, KLHK
              terus mendorong para pelaku usaha agar mempermudah pengelolaan
              sampah plastik dengan memperbesar ukuran produk, sehingga mudah
              dikumpulkan dan dimanfaatkan kembali melalui proses daur ulang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default article1;
