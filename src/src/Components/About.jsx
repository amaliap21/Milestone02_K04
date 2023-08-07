import React, { useState } from "react";
import ReactModal from "react-modal";

import Header from "./Header";
import Footer from "./Footer";
import Logo from "../Images/Recycle_Ontario.png";

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
      <Header page={4} />
      <section id="headerImgUs">
        <article>
          <div id="fixedWidth"></div>
        </article>

        <div className="parallax" data-velocity="-.3"></div>
        <div className="parallax" data-velocity="-.2" data-fit="525">
          <div id="fixedWidthUs">
            <div id="window">
              <div id="textWindow">
                <h1> About Us</h1>
                <h1> </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="overviewAbout" style={{ paddingTop: "50px" }}>
        <div id="headerFill2"></div>

        <div id="fixedWidth">
          <div id="desclong5" style={{ textAlign: "left" }}>
            <div id="header33">
              <h1 style={{ textAlign: "left" }}>
                <b>Kelompok Milestone 4</b>
              </h1>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Kami adalah kelompok Milestone 04. Kami membuat website tentang
                pengelolaan sampah. Penyebabnya diantaranya
                <ul>
                  <li>
                    Pengelolaan sampah menjadi tantangan yang semakin besar dan
                    terus membesar, karena populasi terus bertambah, konsumsi
                    meningkat, dan kesadaran lingkungan kurang.
                  </li>
                  <li>
                    Sistem pengelolaan sampah saat ini seringkali tidak efisien
                    dan tidak ramah lingkungan, karena sampah tidak dipisahkan
                    dan diklasifikasikan dengan benar.
                  </li>
                  <li>
                    Hal ini menyebabkan banyak sampah yang bisa didaur ulang
                    atau dikompos menjadi terbuang sia-sia, merugikan lingkungan
                    dan ekonomi.
                  </li>
                  <li>
                    Laporan Bank Dunia menunjukkan bahwa hanya sekitar 13.5%
                    dari sampah di seluruh dunia yang didaur ulang, sementara
                    Indonesia berada di peringkat 5 sebagai negara penghasil
                    sampah plastik terbesar.
                  </li>
                  <li>
                    Ini menunjukkan perlunya meningkatkan tingkat efisiensi dan
                    efektivitas dalam pengelolaan sampah untuk mengatasi masalah
                    ini, baik dalam skala nasional maupun internasional.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div id="Drawing2Loc">
            <div id="leftFill"></div>
          </div>
        </div>

        <div id="fixedWidth">
          <div
            id="desclongAbout"
            style={{ textAlign: "left", marginTop: "20px" }}
          >
            <div id="header33">
              <div class="trashguide-title">
                <h1>
                  <b>Anggota Kelompok</b>
                </h1>
              </div>
              <div class="trashguide-container">
                <div class="trashguide-list">
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Amalia Putri</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Indraswara Galih</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Ignatius Jhon </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle"> Nurul Hakim</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>

                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Timothy Haposan</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Andhita Naura </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Nyoman Ganadipa </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Wisyendra Lunarmalam </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>

                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Mohamad Maulana</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Ibrahim Ihsan</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle"> Hanief Fatkhan</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Naomi Pricilla </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png"
                      alt=""
                    />
                    <h1 class="trashguide-subtitle">Nicolas Jeremy </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, ex. Lorem ipsum, dolor sit Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fixedWidth">
          <div id="Drawing2Loc">
            <div id="leftFill"></div>
          </div>
        </div>

        <div id="fixedWidth">
          <div id="leftFill2"></div>

          <div id="desclong7">
            <div id="header32">
              <h1>
                <b>Kontak Kami</b>{" "}
              </h1>
              <p>
                Follow us on{" "}
                <a href="https://github.com/amaliap21/Milestone02_K04">
                  GitHub!
                </a>
                <br />
                Site created by Kelompok 04.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
