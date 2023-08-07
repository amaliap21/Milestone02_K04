import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router";
import Header from "../.././Header";
import Footer from "../.././Footer";
import styled from "styled-components";

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
type Props = {};

const article2 = (props: Props) => {
  return (
    <div>
      <Header page={1} />
      <div id="overviewArticle2" style={{ paddingTop: "100px" }}>
        <div id="headerfill"></div>

        <div id="fixedwidth">
          <div id="header32">
            <h1 id="desctitle">
              Zero Waste Lifestyle Menantang Kamu Untuk Menerapkan Gaya Hidup
              Bebas Sampah. Bisa?
            </h1>
          </div>

          <div id="header32">
            <p id="descib">
              Gaya hidup modern mendorong manusia untuk terus menerus
              membutuhkan banyak barang. Kita nggak sadar kalau membeli barang
              sama saja menghasilkan sampah, apalagi barang sekali pakai.
              Aktivitas manusia semakin beragam setiap harinya, dan semakin
              banyak pula barang dan produk yang dibeli sehingga sampah yang
              dihasilkan sudah melebihi dari kemampuan alam untuk menyerapnya.
              <br />
              <br />
              Kita lupa bahwa lautan dan sungai sudah tercemar, serta miliaran
              ton tumpukan sampah yang dihasilkan manusia tidak bisa terurai
              atau didaur ulang. Tempat Pembuangan Akhir (TPA) sudah meluap dan
              tidak lagi bisa menampung timbunan sampah. Longsor sampah pernah
              terjadi di TPA Leuwigajah, Cimahi, Jawa Barat, pada tahun 2005.
              Sebanyak 143 orang terkubur dalam longsor sampah dan tidak kurang
              dari 86 rumah lenyap ditelan sampah.
              <br />
              <br />
              Studi dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK)
              menyatakan bahwa hanya 7% sampah di Indonesia yang dapat dikompos
              dan didaur ulang, dan 69% produksi sampah hanya ditimbun di TPA
              dan produksi sampah harian bisa mencapai ratusan ribu ton!
              <br />
              <br />
              Menyadari sistem pengolahan sampah di Indonesia yang belum
              maksimal dan gaya hidup modern dan konsumtif yang destruktif
              terhadap alam, pada akhirnya kita sudah tiba dalam kondisi dimana
              zero waste sangat diperlukan, demi kejar mimpi menyelamatkan bumi
              dan generasi manusia selanjutnya.
              <br />
              <br />
              <b>Mengapa gaya hidup zero waste dibutuhkan?</b>
              <br />
              <br />
              Saat ini masyarakat dunia sedang hidup dalam ekonomi linear,
              dimana sumber daya alam diambil untuk dikelola menjadi produk, dan
              limbahnya tidak didaur ulang atau digunakan kembali. Timbunan
              limbah pun melonjak.
              <br />
              <br />
              Ekonomi linear juga berdampak besar Indonesia telah mengalami
              urbanisasi dan pembangunan ekonomi yang berhasil mengangkat jutaan
              orang dari kemiskinan. Daya beli dan pola konsumsi meningkat,
              tingkat produksi setiap tahunnya bertambah karena permintaan
              pasar, sehingga berdampak kepada kualitas udara, kesehatan manusia
              dan jumlah produksi sampah yang dihasilkan.
              <br />
              <br />
              Riset dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK)
              menyimpulkan bahwa produksi sampah nasional di Indonesia mencapai
              175.000 ton per hari. Rata-rata satu orang penduduk Indonesia
              menyumbang sampah sebanyak 0.7kg per hari. Jika dikalkulasi dalam
              skala tahunan, Indonesia menghasilkan sampah sebanyak 64juta ton!
              <br />
              <br />
              Indonesia termasuk ke dalam 10 negara dengan jumlah penduduk
              terbanyak di dunia. Banyaknya penduduk yang tinggal di sebuah
              negara tentunya akan menumpulkan sejumlah persoalan, diantaranya
              adalah produksi sampah dan pengolahannya. Oleh karena itu, zero
              waste sangat dibutuhkan untuk menjadi solusi terhadap permasalahan
              sampah.
              <br />
              <br />
              Apa itu zero waste?
              <br />
              <br />
              Zero waste atau bebas sampah adalah sebuah konsep yang mengajak
              kita untuk menggunakan produk sekali pakai dengan lebih bijak
              untuk mengurangi jumlah dan dampak buruk dari sampah. Tujuannya
              adalah agar sampah tidak berakhir di TPA, menjaga sumber daya dan
              melestarikan alam.
              <br />
              <br />
              Metode zero waste adalah 5R, yaitu Refuse (menolak), Reduce
              (mengurangi), Reuse (menggunakan kembali), Recycle (mendaur ulang)
              dan Rot (membusukkan sampah). 5R ini menjadi pegangan untuk
              membentuk gaya hidup tanpa sampah dan menggunakan sumber daya alam
              secara bijaksana.
              <br />
              <br />
              Tidak sedikit yang pesimis dan sarkastik dengan istilah nol sampah
              dan menganggap bahwa itu tidak mungkin dilakukan. Mana mungkin
              manusia hidup di zaman modern seperti ini tidak menghasilkan
              sampah? Tidak mudah untuk mengaplikasikan gaya hidup nol sampah di
              tengah infrastruktur dan masyarakat yang belum mendukung. Masih
              banyak kita temukan makanan dan minuman dengan plastik di pasar
              atau supermarket.
              <br />
              <br />
              Perlu kamu ketahui bahwa gaya hidup zero waste bukan berarti
              mengkriminalkan barang-barang plastik, barang sekali pakai dan
              sejenisnya. Konsep zero waste lebih kepada pengendalian diri kita
              untuk tidak lagi konsumtif dan bertanggung jawab terhadap
              lingkungan. Kita menjadi lebih sadar terhadap apa yang kita beli
              dan konsumsi, dan bagaimana dampaknya terhadap lingkungan.
              <br />
              <br />
              Karena zero waste adalah gaya hidup, tentunya butuh proses untuk
              menjalaninya. Lakukan perlahan, tapi pasti dan konsisten. Hal yang
              bisa kamu lakukan di awal adalah perbanyak literasi, update dengan
              informasi terkait kondisi lingkungan kita. Kesadaran terhadap
              dampak untuk lingkungan yang akan didapat dengan kita
              mengaplikasikan gaya hidup zero waste di kehidupan sehari-hari
              akan menjadi motivasi untuk menerapkan gaya hidup bebas sampah
              ini.
              <br />
              <br />
              Apa saja manfaat zero waste?
              <br />
              <br />
              1. Minim sampah
              <br />
              <br />
              Karena tujuan utama zero waste adalah mengurangi dan mengeliminasi
              sampah, tentunya manfaat utama yang paling dirasakan adalah
              produksi sampah menjadi berkurang.
              <br />
              <br />
              2. Kamu jadi sehat
              <br />
              <br />
              Menerapkan gaya hidup zero waste akan membuat kamu jadi lebih
              sehat. Kamu tidak lagi mengonsumsi makanan instant dalam kemasan
              dan beralih ke makanan non kemasan seperti sayuran dan buah. Kamu
              akan lebih memprioritaskan makanan yang kamu konsumsi dan tidak
              membeli jajanan makanan ringan dalam kemasan yang tidak perlu.
              <br />
              <br />
              3. Hemat
              <br />
              <br />
              Karena kamu tidak lagi mengonsumsi makanan instant dalam kemasan
              yang menghasilkan sampah plastik, kamu akan beralih ke belanja
              sayuran dan buah di pasar. Gaya belanja kamu akan lebih banyak
              perhitungan karena sebisa mungkin kamu akan membeli makanan tanpa
              kemasan, yang lebih banyak didapatkan di pasar tradisional dengan
              harga yang murah.
              <br />
              <br />
              Bagaimana langkah sederhana memulai gaya hidup zero waste?
              <br />
              <br />
              Karena tujuan utama gaya hidup zero waste adalah untuk membuat
              sampah tidak terkirim atau berakhir di TPA, maka langkah utama
              untuk memulai gaya hidup bebas sampah adalah dengan meminimalisir
              dan memanfaatkan kembali sampah yang kamu hasilkan agar siklus
              hidupnya lebih panjang.
              <br />
              <br />
              Berikut adalah langkah sederhana untuk menerapkan gaya hidup zero
              waste:
              <br />
              <br />
              1. Memanfaatkan Barang yang Tidak Dipakai
              <br />
              <br />
              Beberapa dari kita mungkin berpikir untuk membeli barang baru demi
              gaya hidup zero waste. Sebenarnya kamu bisa memanfaatkan
              barang-barang yang kamu miliki dan masih bisa dipakai berulang
              kali. Misal kamu sulap baju bekas menjadi tas belanja sendiri.
              Dengan begitu kamu tidak perlu menambah jumlah barang di rumah.
              <br />
              <br />
              2. Membeli makanan secukupnya
              <br />
              <br />
              Percaya atau tidak, Indonesia ternyata negara yang memproduksi
              sampah makanan terbesar kedua di dunia, lho! Beli makanan sesuai
              porsimu dan jangan berlebihan. Selalu bawa wadah makanan saat kamu
              sedang makan di luar rumah untuk menampung makanan yang tersisa
              untuk kamu konsumsi lagi nanti.
              <br />
              <br />
              3. Think Before You Buy It
              <br />
              <br />
              Kita pasti selalu mencari atau membeli barang yang praktis dan
              kadang tergoda dengan keinginan impulsive kita. Akhirnya kita
              tidak berpikir panjang, apakah ini kebutuhan atau keinginan dan
              kemana perginya barang ini setelah dikonsumsi. Coba deh mulai
              menjadi smart consumer dengan hanya membeli barang yang kamu
              butuhkan saja dan menolak bungkusan atau kantung plastik.
              <br />
              <br />
              Selain lebih hemat, kamu juga mengurangi jejak karbon. Bonusnya,
              kamu jadi lebih bahagia karena hidup kamu lebih sederhana tanpa
              banyak barang di sekeliling kamu.
              <br />
              <br />
              4. Mulai memisahkan Sampah Organik dan Anorganik
              <br />
              <br />
              Meskipun kita masih menghasilkan sampah, tapi setidaknya kita bisa
              membantu mengurangi dan mengolah sampah dengan memisahkan tempat
              sampah organik dan anorganik.
              <br />
              <br />
              Sampah organik adalah sampah yang bisa diuraikan seperti sayuran,
              sisa makanan, dan buah-buahan. Sedangkan sampah anorganik itu
              sampah kering seperti kertas, botol, kaca, atau bekas kemasan
              plastik sabun cuci, yang bisa didaur ulang. Setelah dikumpulkan,
              cari bank sampah di kotamu seperti waste4change, banksampah.id
              atau lainnya yang menerima sampah kering ataupun organik untuk
              diolah lagi.
              <br />
              <br />
              Gaya hidup zero waste membantu kita untuk mengevaluasi gaya hidup
              dan melihat bagaimana sesuatu yang kita konsumsi bisa berdampak
              terhadap lingkungan. Bumi, tempat satu-satunya manusia tinggal,
              saat ini sedang dalam kondisi kritis. Yuk kita saling mengingatkan
              dan belajar untuk lebih peduli dan berbuat sesuatu terhadap
              kelangsungan bumi kita. Menerapkan gaya hidup zero waste adalah
              salah satunya.
              <br />
              <br />
              <BoxLink to="/article">Back</BoxLink>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default article2;
