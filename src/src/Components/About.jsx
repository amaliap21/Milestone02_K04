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
      <br />
      <br />
      <section id="headerImgUs">
        <article>
          <div id="fixedWidth"></div>
        </article>

        <div className="parallax" data-velocity="-.3"></div>
        <div className="parallax" data-velocity="-.2" data-fit="525">
          <div id="fixedWidthUs">
            <div id="window">
              <div id="textWindow">
                <h1>
                  Kenali Kita Lebih Lanjut Karena Tak Kenal Maka Tak Sayang
                </h1>
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
                      src="https://drive.google.com/uc?export=view&id=1OiP4LrWSU2YF_QbGlIvWB-ioR_DjNTA-"
                      alt="Picture of Indraswara Galih"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Indraswara Galih</h1>
                    <p>
                      Hi, I'm Indra. An informatics engineering student at ITB.
                      <br />
                      Interested in WebDev,
                      <br />
                      SoftEng, GameDev. Contact
                      <br />
                      Me at Discord,
                      <br />
                      anotherexist#0
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1vVUXjE3n1dVu2Yqa0oJMy7dFi_yEo7yi"
                      alt="Picture of Ignatius Jhon Kiel"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Ignatius Jhon </h1>
                    <p>
                      Hi, I'm Kiel. An Informatics Engineering student at
                      Institut Teknologi Bandung, who's interested in Web Dev
                      and Cybersecurity. Contact me at kielchanyeol@gmail.com
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=14Kf9gVRh10O9PjmAh4zZe2zSK6hnUH4B"
                      alt="Picture of Nurul Hakim"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle"> Nurul Hakim</h1>
                    <p>
                      Hi, I'm Hakim. An Information System and Technology
                      Student at Bandung Institute of Technology. Interested in
                      WebDev, Data Analyst, and Software Engineering Contact Me
                      at mhmmd.hkm25@gmail.com
                    </p>
                  </div>

                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1y3u3n05tjDOhYyBWlQ2Vmtc2QCPcTJrH"
                      alt="Picture of Timothy Haposan"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Timothy Haposan</h1>
                    <p>
                      Hi, I'm Timo. A sophomore informatics engineering student
                      at ITB. My Hobby is playing football. Feel free to contact
                      me at timothyhapsim@gmail.com
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1VBXVHFyNMdz8eiQGvVCZRtpPV4jgHlV6"
                      alt="Picture of Andhita Naura"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Andhita Naura </h1>
                    <p>
                      Hii, I'm Dhita. An Informatics Engineering student at
                      Institut Teknologi Bandung who interested in Web Dev and
                      AI. Contact me at andhitaanh@gmail.com.
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
                    <h1 class="trashguide-subtitle">Nyoman Ganadipa</h1>
                    <p>
                      Hi, I'm Gana. A sophomore informatics engineering student
                      at ITB. My Hobby is playing football but i
                      <br />
                      also play tennis. Feel free to contact me at
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
                      Helloo, watashi wa Wiswis. A student at information
                      <br />
                      system and technology at ITB aka best campus fr fr. You
                      can contact me at Discord, wiswis#0
                    </p>
                  </div>

                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1eJvpy0IIxiHbocFbkCZ643dbwXa6JzIk"
                      alt="Picture of Mohamad Maulana"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Mohamad Maulana</h1>
                    <p>
                      Hi, I'm Maul. An Information System and Technology Student
                      at ITB. Interested in Data, Machine Learning and
                      Artificial Intelligence. Contact me at
                      maulanafirdaus63@gmail.com
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1wI7aUEQZdDh6vQt0_fWgNSqKKpT0SpRy"
                      alt="Picture of Ibrahim Ihsan"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Ibrahim Ihsan</h1>
                    <p>
                      Informatics Engineering student at Institut Teknologi
                      Bandung. Interested in AI/ML. Highly motivated to learn
                      something new. Contact me at thamrinihsan@gmail.com
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1mmKMzJJ5FsrdVyjw9NhSuSCBa1c9NDJ8"
                      alt="Picture of Hanief Fatkhan"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle"> Hanief Fatkhan</h1>
                    <p>
                      Hi, I'm Hanief. A sophomore informatics engineering
                      student at ITB. My Hobby is playing football. Feel free to
                      contact me at hanieffatkhan@gmail.com
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1Bmp4mQel5BJsRGaa1dsvhfC7x3lu-9fi"
                      alt="Picture of Naomi Pricilla A."
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
                    />
                    <h1 class="trashguide-subtitle">Naomi Pricilla A. </h1>
                    <p>
                      Hi, I'm Naomi. A sophomore System and Information
                      Technology student at ITB. My Hobbies are listening to
                      music and watching movies. Feel free to contact me at
                      naomipricillaa16@gmail.com
                    </p>
                  </div>
                  <div class="trashguide-card">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1jxXuxmUWJcxGjit0a7Jd5Sg_V1d0MNdD"
                      alt="Picture of olas Jeremy"
                      style={{
                        width: "120px",
                        aspectRatio: "1/1",
                        borderRadius: "100%",
                      }}
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
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default About;
