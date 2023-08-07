import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router';
import Header from '../.././Header';
import Footer from '../.././Footer';

type Props = {}

const article6 = (props: Props) => {
  return (
    <div>
      <Header page = {1}/>
      <div id="overviewArticle" style = {{paddingTop: '100px'}}>
          <div id="headerfill">
          </div>

          <div id="fixedwidth">
            <div id="header32">  
              <h1 id = "desctitle">
              Persoalan Sampah yang Menjerat Kota Bandung
              </h1>
            </div>

          <div id="header32">
              <p id="desc1">
              Sampah seolah selalu jadi masalah tahunan bagi Kota Bandung. Terbaru, ada 30 TPS 
              yang dinyatakan overcapacity oleh Pemkot Bandung. Tak jarang masyarakat mengunggah 
              video betapa sampah menggunung di TPS hingga ke bahu jalan.
              <br />
              <br />
              Hal ini dikarenakan TPA Sarimukti sedang mengalami kendala. Kurangnya alat berat 
              yang memadai, menggunungnya sampah pascalebaran, menjadi beberapa alasan sulitnya 
              penyetoran sampah ke TPA Sarimukti.
              <br />
              <br />
              Kepala Dinas Lingkungan Hidup dan Kebersihan (DLHK) Kota Bandung Dudy Prayudi 
              mengaku penumpukan sampah di tiap TPS bukan hanya soal kemacetan di Sarimukti, 
              tapi juga karena kurangnya TPS di kota Bandung.
              <br />
              <br />
              "Selain sampah yang menumpuk, memang TPS masih kurang. 135 TPS di Kota Bandung itu 
              tidak semuanya berbentuk atap, ada yang kontainer juga, dan ini bukan TPS ideal. 
              Di Kota Bandung ada 151 kelurahan, idealnya juga 1 Sub Wilayah Kota (SWK) ada 1 TPS," 
              kata Dudy dalam acara Bandung Menjawab: Upaya Mencegah Sampah Berlanjut, 
              Kamis (11/5/2023).
              <br />
              <br />
              Dudy mengatakan, pembangunan TPS ini bukan perkara sepele. Penyebab utamanya 
              yakni karena ketidaksediaan lahan akibat masyarakat tidak ada yang mau dekat dengan TPS.
              <br />
              <br />
              "Problemnya masyarakat tidak mau dekat dengan TPS, agak sulit untuk minta lahan. 
              Kalau kita bicara baik-baik, mereka langsung resistensi. Mungkin kita harus menyadarkan 
              masyarakat harus tanggung jawab dengan sampah karena tidak ada yang mau dekat sampah. 
              Seperti masyarakat di Sarimukti itu, apakah mereka mau tinggal di dekat TPA? 
              Kan nggak juga," ujar Dudy.
              <br />
              <br />
              Padahal, kata dia setiap hari ada 1.500 ton yang dihasilkan masyarakat Kota 
              Bandung. Belum lagi dengan hari raya Idul Fitri 2023, Kota Bandung kedatangan 
              wisatawan yang tak terhitung jumlahnya.
              <br />
              <br />
              "Sampah itu dalam hitungan teoritis setiap orang memproduksi sampah 0,6 kg. 
              Kalikan saja dengan 2.5 juta jiwa, ada sekitar 1.500 ton sehari. Ketika libur 
              lebaran ada wisatawan dan keluarga, maka bisa dibayangkan menumpuknya. Padahal 
              kita tidak bisa menahan buang sampah. Oleh karenanya sampah tambah banyak," ujarnya.
              <br />
              <br />
              DLHK Kota Bandung saat ini berencana ingin mengubah perfektif TPS atau Tempat 
              Pembuangan Sampah Sementara menjadi Tempat Pengolahan Sampah. Ia sebetulnya punya 
              target untuk pengadaan metode ini bisa berjalan sepenuhnya di tahun ini.
              <br />
              <br />
              "Ke depan kita akan mengubah TPS menjadi tempat pengolahan sampah jadi bukan 
              tempat penampungan sampah. Nah image-nya kita ubah jadi tempat pengolahan sampah 
              jadi sampah ke situ diolah nanti yang dikirim ke TPA itu hanya residunya saja. 
              Tahun ini kan sudah ada 5 TPS yang pengolah sampah, sisanya kita akan membuka 
              kemitraan dengan pihak ketiga gitu lah yang mau bekerja sama dalam pengolahan 
              sampah di TPS gitu," ucap Dudy.
              <br />
              <br />
              Dudy mengatakan upaya yang dilakukan ini harus sejalan dengan pemahaman dan 
              kemauan masyarakat. Pengolahan sampah menjadi mudah jika masyarakat paham cara 
              memilah sampah dan menyelesaikan sampah rumah tangga.
              <br />
              <br />
              Menurutnya, hanya dengan cara Kang Pisman maka masalah penumpukan sampah tidak 
              akan terjadi. Ia menghimbau agar masyarakat jangan sekedar tak mau dekat dengan 
              sampah, maka ia mengajak agar masyarakat bisa mengolah sampah.
              <br />
              <br />
              "Pertama bisa menerapkan Kang Pisman di rumah masing-masing untuk memilah sampah, 
              mereduksi ke TPS dan TPA agar tidak overload. Saya mengimbau juga agar setiap 
              masyarakat mau menyelesaikan sampah sendiri kalau mau kita tidak zalim. Karena 
              sebetulnya penumpukan sampah ini kan hanya karena kita tidak mau dekat dengan 
              sampah aja kan, caranya sudah disampaikan dengan Kang Pisman," ujarnya.
              <br />
              <br />
              "Pisahkan sampah organik dan anorganik. Teknologinya sederhana hanya dengan 
              Loseda (Lodong Sesa Dapur) ketika sudah penuh ditutup, 2-3 bulan jadi kompos. 
              Kompos juga bisa dikolaborasikan dengan DKPP untuk tumbuhan yang bisa dipanen," tambahnya.
              <br />
              <br />
              Dudy mengaku sejak tahun 2018 sosialisasi dari Pemkot terus berjalan. Namun sayangnya 
              sesudah sosialisasi dilakukan, masyarakat mulai hilang arah dan tak melanjutkan lagi 
              Kang Pisman tersebut.
              <br />
              <br />
              Maka pada Minggu (14/5/2023) DLHK bersama Plh Wali Kota Bandung Ema Sumarna 
              bakal berkeliling ke 6 SWK sambil menjalankan praktik baik dari contoh keberhasilan 
              pengelolaan sampah yang dilakukan oleh RW 12 Kelurahan Maleer, Kecamatan Batununggal.
              <br />
              <br />
              "Sosialisasi Kang Pisman sebetulnya setiap hari, setiap saat kita lakukan. Ada kader 
              pendamping yang terus lakukan sosialisasi. Tapi faktanya di lapangan perlu 
              peran serta aktif dari masyarakat. Kalau masyarakat belum bergerak, ya ini 
              problemnya di situ. Iya mulai Minggu kita bakal keliling ke enam SWK," ujar Dudy.
              </p>
            </div>
          </div>
          <Footer/>
      </div>
    </div>
  )
}

export default article6