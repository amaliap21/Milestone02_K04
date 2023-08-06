import React, { useState } from 'react';
import ReactModal from 'react-modal';

import Header from './Header';
import Footer from './Footer';
import Logo from '../Images/Recycle_Ontario.png'

function About() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Header page = {4}/>
      <div id="overviewAbout" style = {{paddingTop: '100px'}}>

        <div id="headerFill2">
        </div>

        <div id="fixedWidth">
          <div id="desclong4">
            <div id="header32">
              <h1 style = {{paddingTop:'25px'}}>Who Are We?</h1>
            </div>
          </div>

          <div id="leftFill">
          </div>

          <div id="logodivBig">
            <a style = {{textDecoration:'none'}} href="index.html"> <img src={Logo} alt="Image Not Found" width="100%" height="100%" /> </a>
          </div>

          <div id="rightFill">
          </div>
        </div>


        <div id="fixedWidth">
          <div id="desclong5" style = {{textAlign:'left', }}>
            <div id="header33" >
              <h1 style = {{textAlign:'left', }}>
                <b>Kelompok Milestone 4</b>
              </h1>
              <p style = {{textAlign:'left',paddingLeft:'60px' , paddingRight:'60px'}}>
                Kami adalah kelompok Milestone 04. Kami membuat website tentang pengelolaan sampah. Penyebabnya diantaranya
                <ul>
                  <li>
                    Pengelolaan sampah menjadi tantangan yang semakin besar dan terus membesar, karena populasi terus bertambah, konsumsi meningkat, dan kesadaran lingkungan kurang. 
                  </li>
                  <li>
                    Sistem pengelolaan sampah saat ini seringkali tidak efisien dan tidak ramah lingkungan, karena sampah tidak dipisahkan dan diklasifikasikan dengan benar.
                  </li>
                  <li>
                    Hal ini menyebabkan banyak sampah yang bisa didaur ulang atau dikompos menjadi terbuang sia-sia, merugikan lingkungan dan ekonomi.
                  </li>
                  <li>
                    Laporan Bank Dunia menunjukkan bahwa hanya sekitar 13.5% dari sampah di seluruh dunia yang didaur ulang, 
                    sementara Indonesia berada di peringkat 5 sebagai negara penghasil sampah plastik terbesar.
                  </li>
                  <li>
                    Ini menunjukkan perlunya meningkatkan tingkat efisiensi dan efektivitas dalam pengelolaan sampah untuk mengatasi masalah ini, baik dalam skala nasional maupun internasional.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div id="Drawing2Loc">
            <div id="leftFill">

            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div id="desclongAbout" style = {{textAlign:'left', marginTop: '20px'}}>
            <div id="header33" >

              <h1 style = {{textAlign:'left'}}>
                <b>Anggota kelompok</b>
              </h1>
             

              
            </div>
          </div>
        </div>


        <div id="fixedWidth">
          <div id="Drawing2Loc">
            <div id="leftFill">
            </div>
          </div>
        </div>
        


        <div id="fixedWidth">
          <div id="desclong7">
            <div id="header32">
              <h1><b>Contact Us</b>  </h1><p style = {{marginTop:'-15px'}}>Email: info@recyclecan.ca<br/>Phone: (613)-325-6257 </p>
            </div>
          </div>
        </div>



        <div id="fixedWidth">

          <div id="leftFill2">
          </div>

          <div id="desclong7">
            <div id="header32">
              <p style = {{paddingTop:'30px'}}><br /> Follow us on <a href='https://github.com/EdwaRen/Recycle_Can_Website'>GitHub!</a><br />Site created by Edward Ren.</p>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
