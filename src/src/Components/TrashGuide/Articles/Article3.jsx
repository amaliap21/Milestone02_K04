import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router';
import Header from '../.././Header';
import Footer from '../.././Footer';
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

type Props = {}

const article3 = (props: Props) => {
  return (
    <div>
      <Header page = {1}/>
      <div id="overviewArticle3" style = {{paddingTop: '100px'}}>
          <div id="headerfill">
          </div>

          <div id="fixedwidth">
            <div id="header32">  
              <h1 id = "desctitle">
              Dampak Sampah terhadap Lingkungan Alam dan Kesehatan Kita
              </h1>
            </div>

           <div id="header32">
              <p id="descib2">
              Manusia menghasilkan banyak sampah, baik organik maupun anorganik. 
              Sampah organik dapat terurai dengan sendirinya di alam melalui proses alamiah. 
              Sedangkan, sampah anorganik tidak dapat terurai sendiri dan memerlukan campur tangan manusia dalam mengelolanya.
              Sampah anorganik yang tidak diolah dengan baik dapat memenuhi lautan dan tempat pembuangan sampah. Pada faktanya, sampah anorganik tidak ditangani dengan baik.
              <br />
              <br />
              Sebuah studi menemukan hanya 9% dari 6,3 miliar metrik ton sampah plastik yang telah didaur ulang. Tentu saja hal itu dapat merusak lingkungan alam dan merugikan manusia.
              <br />
              <br />
              Dilansir dari DataIndonesia.id, Indonesia menempati posisi kelima sebagai negara penyumbang sampah plastik ke lautan terbesar di dunia setelah Filipina, India, Malaysia, dan China. 
              Tercatat jumlah sampah plastik dari Indonesia ke lautan mencapai 56.333 metrik ton setiap tahun.
              Bank Dunia memperkirakan bahwa pada 2050, seluruh manusia di bumi akan menghasilkan 3,88 miliar ton sampah setiap tahun, meningkat 73% dari tahun 2020.
              Hal ini berhubungan erat dengan pertumbuhan populasi penduduk bumi dan pembangunan ekonomi. Peningkatan terbesar diperkirakan terjadi di sub-Sahara Afrika dan Asia Selatan.
              <br />
              <br />
              Sampah yang dihasilkan mencemari tanah, udara, air, berdampak negatif bagi hewan, dan berbahaya bagi kesehatan.
              <br />
              <br />
              1. Pencemaran terhadap Tanah
              <br />
              <br />
              Sampah mencemari tanah. Setiap kali sampah dibuang ke TPA, racun keluar dari sampah dan masuk melalui tanah.
              Hal ini dapat mencemari tanah di sekitar TPA yang dapat membahayakan habitat di sekitarnya. Tumbuhan dan hewan menderita akibat paparan bahan beracun dan bahan kimia.
              <br />
              <br />
              2. Pencemaran terhadap Udara
              <br />
              <br />
              Efek negatif lain dari pembuangan sampah yang tidak terorganisir terhadap lingkungan adalah terciptanya polusi udara. Sampah mengeluarkan bau tidak sedap, yang menandakan bahwa sampah mengeluarkan gas-gas kimia ke udara di sekitarnya. Polusi udara biasa terjadi di sekitar tempat pembuangan sampah dan juga di dekat insinerator.
              Sampah dapat melepaskan gas metana ke udara. Gas metana merupakan salah satu Gas Rumah Kaca (GRK) yang menyebabkan efek rumah kaca, penyebab terjadinya pemanasan global. Hal ini menyebabkan suhu atmosfer bumi meningkat, menimbulkan efek yang mengancam nyawa manusia.
              <br />
              <br />
              3. Pencemaran terhadap Air
              <br />
              <br />
              Selain mencemari udara, sampah juga menyebabkan polusi air. Ketika bahan kimia dan zat beracun berbahaya menumpuk di sekitar pabrik pembuangan limbah, bahan ini akan mengalir ke sumber air terdekat.
              Kemudian, meresap ke dalam tanah dan mempengaruhi kualitas air. Hal ini dapat berdampak negatif pada kehidupan akuatik yang hidup di sungai dan danau terdekat.
              Selain itu, sampah menimbulkan masalah bagi masyarakat yang bertempat tinggal di sekitar tempat pembuangan limbah yang mengandalkan air sumur atau air tanah untuk memenuhi kebutuhan sehari-hari.
              <br />
              <br />
              4. Berdampak Negatif bagi Hewan di Alam
              <br />
              <br />
              Sampah mengganggu kehidupan hewan laut. Mereka tidak dapat membedakan antara makanan asli atau bukan. Hewan laut bisa saja mengonsumsi sampah.
              Sampah mengendap di dalam tubuh hewan yang memakannya. Lalu terjadilah bahaya kronis, seperti kelaparan. Hal ini terjadi karena beberapa spesies tidak memiliki kadar asam yang tinggi di perutnya untuk memecah benda yang mereka telan.
              Karena kekurangan makanan, hewan tersebut kehilangan energi untuk melakukan berbagai hal seperti reproduksi, mencari mangsa, dan migrasi. Sampah plastik juga mengganggu habitat burung-burung laut dan air, misalnya burung albatros. Anak burung ini mati karena induknya memberinya makan sampah plastik.
              <br />
              <br />
              5. Berpengaruh terhadap Kesehatan Manusia
              <br />
              <br />
              Seseorang bisa menderita berbagai penyakit yang disebabkan oleh sampah, seperti asma, kanker, penyakit kardiovaskular, kanker anak, COPD, BBLR, cacat lahir, dan kelahiran prematur. Sampah juga menyebabkan penyakit oleh bakteri dan virus, seperti diare, disentri, tifus, kolera, jamur dan berbagai macam penyakit kulit.
              <br />
              <br />
              <BoxLink to="/article">Back</BoxLink>
              </p>
            </div>  
          </div>

          <Footer/>
      </div>
    </div>
  )
}

export default article3