import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function LocateUs() {
  return (
    <div className="App">
      <Header page={2} />
      <br />
      <br />
      <section id="headerImgLocateUs">
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
                    Cari TPS-nya lalu buang sampahnya{" "}
                  </h1>
                  <h1> </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

      <div style={{ textAlign: "center", height: "80px", marginTop: "75px"}}>
        <h1>Lokasi Penukaran Sampah</h1>
        <p>Pilih lokasi penukaran sesuai jenis sampah yang ingin ditukar!</p>
      </div>

      <div id="TPS-container">
        <div
          className="TPS"
          style={{ float: "left", textAlign: "center", padding: "45px" }}
        >
          <h1>TPS Pasteur</h1>
          <p>Jenis sampah : Sampah Organik dan Anorganik kategori non-B3</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.95690170792!2d107.58974907366976!3d-6.895758667478595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e665e0be9aaf%3A0x861c409d6b9b6cd5!2sTPS%20Pasteur!5e0!3m2!1sen!2sid!4v1691312636740!5m2!1sen!2sid"
            width="500"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          className="TPS"
          style={{ float: "left", textAlign: "center", padding: "45px" }}
        >
          <h1>DLHK Kota Bandung</h1>
          <p>Jenis sampah : Sampah B3</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.999133592302!2d107.62282820927724!3d-6.8907055673980855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7ab973f54cf%3A0x9e632593613caa3a!2sDLHK%20Kota%20Bandung!5e0!3m2!1sen!2sid!4v1691316201358!5m2!1sen!2sid"
            width="500"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          className="TPS"
          style={{ float: "left", textAlign: "center", padding: "45px" }}
        >
          <h1>TPS RW 10 Teuku Umar</h1>
          <p>Jenis sampah : Sampah Organik dan Anorganik kategori non-B3</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.988518972377!2d107.61461570927732!3d-6.891975967411114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e79ed232f487%3A0x99f5663f7f828960!2sTPS%20RW%2010%20Teuku%20Umar!5e0!3m2!1sen!2sid!4v1691313066477!5m2!1sen!2sid"
            width="500"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          className="TPS"
          style={{ float: "left", textAlign: "center", padding: "45px" }}
        >
          <h1>Bandung Electronic Center Mall</h1>
          <p>Jenis sampah : Sampah Elektronik</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.853643394686!2d107.60627597332085!3d-6.90809816760461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7cdf9410439%3A0xd75e3bea3b5242b2!2sIstana%20BEC%20Bandung!5e0!3m2!1sen!2sid!4v1691327322508!5m2!1sen!2sid"
            width="500"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
}
