import React, { Component } from "react";
import { Link } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

import ComputerArt from "../Images/computer_Art.jpg";
import Ewaste3 from "../Images/E-waste3.jpg";
import MapLocate from "../Images/mapLocate.png";

class Home extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const mainDivStyle = {
      width: "800px",
      backgroundColor: "white",
    };

    return (
      <div>
        <Header page={0} />
        <section id="headerImgIndex">
          <article>
            <div id="fixedWidth"></div>
          </article>

          <div class="parallax" data-velocity="-.3"></div>

          <div class="parallax" data-velocity="-.2" data-fit="525">
            <div id="fixedWidth">
              <div id="window">
                <div id="textWindow">
                  <h1>
                    {" "}
                    Olah Sampahmu, Olah Lingkunganmu, Lindungi Bumi Kita{" "}
                  </h1>
                  <h1> </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="overviewI">
          <div id="fixedWidth">
            <div id="Drawing3">
              <img src={ComputerArt} width="100%" height="100%" />
            </div>
            <div id="desc">
              <div id="header3">
                <h1>
                  <b>
                    Pentingnya Mendaur Ulang Elektronik, Baterai, dan Bahan
                    Berbahaya Rumah Tangga
                  </b>
                </h1>
                <h1>
                  <p>
                    Di abad ke-21, banyak elektronik, baterai, dan cat
                    mengandung bahan beracun seperti timah, merkuri, atau yang
                    paling umum adalah gas beracun, yang dapat terlepas ke
                    lingkungan ketika dibuang secara tidak benar. Sifat beracun
                    ini membuat bahan-bahan tersebut tidak layak untuk dibuang
                    di tempat pembuangan sampah konvensional. Dengan Recycle
                    Can, kami menyediakan alat nasional yang memberikan lokasi
                    terdekat untuk mendaur ulang bahan-bahan berbahaya dari
                    rumah Anda di tempat pengumpulan yang aman dan disetujui
                    oleh pemerintah.
                  </p>
                </h1>
              </div>
            </div>
          </div>

          <div id="fixedWidth">
            <div id="Drawing2Loc">
              <div id="leftFill"></div>
              <div id="rightFill"></div>
            </div>
          </div>

          <div id="fixedWidth">
            <div id="Drawing">
              <img src={Ewaste3} width="100%" height="100%" />
            </div>
            <div id="desc3">
              <div id="header3">
                <h1>
                  <b>Bagaimana sampah memengaruhi dunia.</b>
                </h1>
                <h1>
                  <p>
                    Bahan berbahaya rumah tangga yang tumbuh dengan cepat adalah
                    limbah elektronik, yang dikenal sebagai e-waste. Dengan
                    konsumen yang tampaknya mengganti elektronik lama mereka,
                    seperti ponsel, setiap dua tahun sekali, terdapat tumpukan
                    e-waste yang semakin bertambah yang perlu dibuang. Dalam
                    banyak kasus, limbah tersebut dipilah-pilah oleh pekerja di
                    negara-negara dunia ketiga untuk mendapatkan logam langka,
                    tetapi hal ini membuat mereka terpapar elemen berbahaya
                    seperti gas beracun, timah, merkuri, atau bahkan arsenik.
                  </p>
                </h1>
              </div>
            </div>
          </div>

          <div id="fixedWidth">
            <div id="Drawing2">
              <Link to="/About">
                <div id="Gallery">
                  <h1>About</h1>
                </div>
              </Link>
            </div>

            <div id="desc2">
              <div id="header4">
                <h1>See who we are and contact us for any questions</h1>
              </div>
            </div>
          </div>

          <div id="fixedWidth">
            <div id="Drawing">
              <img src={MapLocate} width="100%" height="100%" />
            </div>
            <div id="desc">
              <div id="header3">
                <h1>
                  <b>Use Our Locator To Find A Nearby Collection Site.</b>
                </h1>
                <h1>
                  <Link to="/LocateUs">
                    <div>
                      <h5 id="Locate">Locate Us</h5>
                    </div>
                  </Link>
                </h1>
              </div>
            </div>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
