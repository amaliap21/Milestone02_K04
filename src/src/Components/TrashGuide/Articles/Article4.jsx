import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router';
import Header from '../.././Header';
import Footer from '../.././Footer';

type Props = {}

const article4 = (props: Props) => {
  return (
    <div>
      <Header page = {1}/>
      <div id="overviewAbout" style = {{paddingTop: '100px'}}>
          <div id="headerfill">
          </div>

          <div id="fixedwidth">
            <div id="header32">  
              <h1 id = "desctitle">
              Tantangan dan Harapan Pengelolaan Sampah di Indonesia
              </h1>
            </div>

          <div id="header32">
              <p id="descibb">
              Jakarta Humas BRIN. Sampah telah menjadi masalah besar di negara 
              kita yang seringkali sulit diatasi. Deputi Kebijakan Pembangunan 
              Badan Riset dan Inovasi Nasional (BRIN), Mego Pinandito menyebutkan, 
              perlu bagi kita untuk melihat lagi lebih mendalam. "Mungkin saja ada
               peluang untuk menjadikan sampah sebagai produk yang bisa dicarikan 
               alternatifnya menjadi produk lain yang bermanfaat dan memiliki nilai 
               ekonomi," tuturnya.
               <br/>
               <br/>
               “Secara sadar atau tidak setiap harinya kita memproduksi sampah, walaupun 
               kita tahu sampah sebetulnya bagian yang tidak kita perlukan. Namun tiap 
               hari volume dari sampah terus saja bertambah, bagaimana upaya kita agar 
               sampah tersebut menjadi satu wujud yang punya nilai." terang Mego.
               <br/>
               <br/>
               Menurutnya, sampah kalau dikelola dengan baik jadi sebuah barang yang 
               menjadi sebuah produk nilai tambah dan memiliki potensi sebagai produk 
               yang bisa dijual bisa disebut sebagai produk ekonomi,” ungkapnya ketika 
               memberikan sambutan sekaligus membuka Webinar Sains bertema Waste Management 
               Maggot BSF Solusi Alternatif Pengolahan Sampah Organik yang diselenggarakan 
               oleh Indonesia Science Center.
               <br/>
               <br/>
               Direktur Utama Indonesia Science Center, Ery Subada, mengatakan bahwa sampah 
               sampah organik tiap harinya mencapai hampir 175 ton per hari. “Kalau kita kalikan,
               kita bayangkan dari satu bulan bisa hampir 5,2 juta ton per bulan ini sesuatu yang 
               sangat luar biasa. Permasalahan sampah ini tidak hanya dialami oleh negara kita, 
               tapi hampir di semua negara juga memiliki permasalahan sampah yang sangat luar biasa 
               ini,” ujarnya. "Ke depan mudah mudahan ada penemuan teknologi khususnya untuk sampah 
               sampah organik yang dapat dimanfaatkan oleh masyarakat sehingga mempunyai nilai tepat 
               guna dan nilai yang bermanfaat bagi lingkungan dan kita semua," harapnya.
               <br/>
               <br/>
               Peneliti BRIN Wahyu Purwanta dalam paparannya yang berjudul 'Pengelolaan Sampah di 
               Indonesia, Tantangan dan Harapan,' mengemukakan bahwa pengelolaan sampah di Indonesia 
               saat ini masih memiliki banyak tantangan, Wahyu menyampaikan dari 41 juta ton timbunan 
               sampah yang terkumpul dari 149 kota/kabupaten dalam satu tahun, sampah yang berhasil 
               terkelola sebesar 43 persen, maka porsi sampah yang tidak terkelola masih lebih besar 
               daripada sampah yang berhasil dikelola.
               <br/>
               <br/>
               “Masih sedikit masyarakat Indonesia yang mempunyai kesadaran untuk memilah sampah mulai 
               dari rumahnya masing  masing. Sebesar 80% masyarakat Indonesia tidak memilah sampah mereka.
                Hal ini salah satu yang membuat sulit pengelolaan sampah di Indonesia,” ujar Wahyu. “Pemerintah 
                sudah membuat undang  undang mengenai pengelolaan sampah, undang  undang turunannya pun sudah 
                banyak dibuat. Namun, sampah seringkali tidak menjadi prioritas, anggarannya untuk pengelolaannya 
                pun tidak memadai hal ini juga mempengaruhi kemampuan kita untuk mengurangi ataupun mengelola sampah,”
                 tutupnya.
                 <br/>
                 <br/>
                 Dalam kesempatan yang sama, Kepala Suku Dinas Lingkungan Hidup Kota Administrasi Jakarta Timur, 
                 Wahyudi Rudiyanto, mengungkap bahwa sampah organik mendominasi tempat pembuangan akhir sebesar 43 persen 
                 dari total jumlah sampah saat ini.
                  <br/>
                  <br/>
                  “Dalam Kebijakan strategis daerah DKI Jakarta, kita diamanatkan untuk mengurangi sampah sebesar 24 persen.
                   Ini merupakan tantangan yang berat makanya kami butuh stakeholder yaitu masyarakat yang mempunyai keinginan 
                   untuk mengelola sampah dari sumbernya salah satunya rumah tangga,” jelasnya.
                   <br/>
                   <br/>
                   Jumlah sampah terbesar DKI Jakarta yang ditampung TPA Bantar Gebang mencapai 7.000  8000 ton per hari. 
                   Tinggi gunung sampah di TPA Bantar Gebang saat ini sudah mencapai 47  50 meter. Jakarta hanya memiliki 
                   satu TPA dan volume sampah di Bantar Gebang sudah hampir memenuhi kapasitas maksimal.
                   <br/>
                   <br/>
                   Pemkot DKI Jakarta telah mengubah pola system proses sampah yang semula, kumpul  angkut  buang telah 
                   kami ubah menjadi kumpul  pilah  olah. “Kami mulai mencoba masyarakat semua kalangan di DKI Jakarta 
                   supaya mengikuti system yang baru, ini salah satu upaya kami untuk mengatasi penumpukan yang terjadi di 
                   Tempat Pembuangan Akhir Bantar Gebang,” ungkap Wahyudi.
                   <br/>
                   <br/>
                   Pemerintah Kota DKI Jakarta sedang mengembangkan budidaya Maggot untuk membantu mengurai sampah, Maggot 
                   merupakan larva yang dapat mengurai sampah dengan memakan material organik Larva maggot tidak menjadi media 
                   penyakit, siklus hidupnya hanya 40 hari. Larva ini dapat bernilai ekonomis karena dapat dijual sebagai pakan ternak.
                   <br/>
                   <br/>
                   Hewan ternak yang mengkonsumsi maggot hasil dagingnya akan lebih enak dan empuk. Dalam satu hari satu kilogram 
                   larva maggot bisa menghabiskan hingga tiga kilogram sampah organik setiap harinya, jika kita bisa memperbanyak 
                   penggunaan maggot akan membantu menambah jumlah sampah yang terurai setiap harinya.
                   <br/>
                   <br/>
                   “Sampah merupakan masalah kita bersama, tidak mungkin jika hanya satu pihak yang berusaha tidak akan mampu 
                   menangani masalah sampah ini,” tutup Wahyudi.
              </p>
            </div>
          </div>
          <Footer/>
      </div>
    </div>
  )
}

export default article4