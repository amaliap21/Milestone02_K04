import React, { useState } from "react";

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
      <div id="overviewAbout" style={{ paddingTop: "100px" }}>
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
                      src="https://drive.google.com/uc?export=view&id=1CQKqxZ644rq2FGiLbBajdXEzrCGFeFTJ"
                      alt="Picture of Amalia Putri"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Amalia Putri</h1>
                    <p>
                      Hi, I'm Amel. A sophomore informatics engineering student
                      at ITB. My Hobby is playing table tennis. Feel free to
                      contact me at amaliaputriii2104@gmail.com
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
                      src="https://drive.google.com/uc?export=view&id=1LpSAZwWiQu5NM_8e7RMKXqJd2yTAbiLo"
                      alt="Picture of Nyoman Ganadipa Narayana"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Nyoman Ganadipa N. </h1>
                    <p>
                      Hi, I'm Gana. A sophomore informatics engineering student
                      at ITB. My Hobby is playing football but i also play
                      tennis. Feel free to contact me at
                      nyomanganadipa@gmail.com
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1DQwWUireL55XWge17dLScp4SgJaeWLMM"
                      alt="Pic of Wisyendra Lunarmalam"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Wisyendra Lunarmalam </h1>
                    <p>
                      Helloo, watashi wa Wiswis. A student at information system
                      and technology at ITB aka best campus fr fr. You can contact
                      me at discord wiswis#0
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
                      Nicolas jeremy marulitua simanjuntak biasa dipanggil NJ,
                      dari STI-J dengan nim tpb 19622228. Hobi basket dan asal
                      daerah dari jakarta selatan
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
