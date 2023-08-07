import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router';
import Header from '../.././Header';
import Footer from '../.././Footer';

type Props = {}

const article5 = (props: Props) => {
  return (
    <div>
      <Header page = {1}/>
      <div id="overviewArticle5" style = {{paddingTop: '100px'}}>
          <div id="headerfill">
          </div>

          <div id="fixedwidth">
            <div id="header32">  
              <h1 id = "desctitle">
              Jenis-jenis Sampah berdasarkan Klasifikasinya
              </h1>
            </div>

          <div id="header32">
              <p id="desc1">
              Sampah bisa berasal dari mana saja selama terdapat aktivitas kehidupan di daerah tersebut. 
              Sampah bisa berasal dari rumah tangga, pasar, jalanan, fasilitas umum (terminal, stasiun, bandara), dan lain sebagainya. 
              Sampah dapat diklasifikasikan atau dikelompokkan menjadi beberapa jenis, yaitu sampah berdasarkan jenisnya, sampah berdasarkan sumbernya, sampah berdasarkan bentuknya, dan sampah berdasarkan sifat-sifat biologis.
              <br />
              <br />
              1. Sampah Organik
              <br />
              <br />
              Sampah organik berasal dari bahan-bahan sisa makhluk hidup seperti tumbuhan dan hewan yang dapat terurai secara alami oleh bakteri tanpa perlu tambahan bahan kimia apapun. Sampah organik pada umumnya berupa bangkai hewan, kotoran hewan, dan sisa tanaman yang pada umumnya dapat diurai secara cepat dan tanpa merusak lingkungan di sekitarnya.  Sampah rumah tangga sebagian besar juga merupakan bahan organik. Sampah rumah tangga yang termasuk sampah organik, misalnya sampah dari dapur, sisa tepung, sayuran, dan daun.
              <br />
              <br />
              2. Sampah Anorganik
              <br />
              <br />
              Sampah anorganik merupakan sampah yang tidak dapat diurai oleh bakteri atau hewan mikro organisme (non degradable). Sampah anorganik dapat berupa plastik, kaca, logam, dan kaleng Sebagian zat anorganik tidak dapat diuraikan oleh alam, sedang sebagian lainnya dapat diuraikan dalam waktu yang sangat lama.
              <br />
              <br />
              3. Sampah B3 (Bahan Berbahaya Beracun)
              <br />
              <br />
              Sampah bahan berbahaya beracun (B3) terdiri dari zat kimia organik dan anorganik serta logam logam berat. Pengelolaan sampah B3 tidak dapat dicampurkan dengan sampah lainnya. Biasanya ada badan khusus yang dibentuk untuk mengelola sampah B3 sesuai peraturan berlaku. Contoh sampah B3 adalah sampah yang berasal dari limbah rumah sakit, dan pabrik.
              <br />
              <br />
              4. Sampah Rumah Tangga
              <br />
              <br />
              Menurut UU No. 18 Tahun 2008 tentang pengelolaan sampah, sampah rumah tangga adalah sampah yang berasal dari kegiatan sehari-hari dalam rumah tangga, tidak termasuk tinja dan sampah spesifik (sampah yang mengandung bahan racun. Umumnya sampah rumah tangga berupa sisa makanan, perlengkapan rumah tangga bekas, kain, kertas, kardus, gelas, dan sampah kebun. 
              <br />
              <br />
              5. Sampah dari Pertanian dan Perkebunan
              <br />
              <br />
              Sampah dari kegiatan pertanian tergolong sampah organik. Contohnya jerami, sisa sayur mayur, batang jagung, dan sisa hasil panen. Sebagian besar sampah yang dihasilkan selama musim panen dibakar atau dimanfaatkan untuk pupuk. Sampah bahan kimia seperti pestisida dan pupuk buatan perlu perlakuan khusus agar tidak mencemari lingkungan. Sampah pertanian lainnya adalah lembaran plastik yang digunakan sebagai penutup tempat tumbuh-tumbuhan yang berfungsi untuk mengurangi penguapan dan penghambat pertumbuhan gulma, namun plastik ini bisa didaur ulang.
              <br />
              <br />
              6. Sampah dari sisa bangunan dan konstruksi gedung
              <br />
              <br />
              Sampah yang berasal dari kegiatan pembangunan atau pemugaran gedung ini bisa berupa bahan organik maupun anorganik. Sampah organik, misalnya: kayu, bambu, triplek. Semnetara sampah anorganik, misalnya: semen, pasir, batu bata, keramik, besi, baja, kaca, dan kaleng.
              <br />
              <br />
              7. Sampah dari Perdagangan dan Perkantoran
              <br />
              <br />
              Sampah yang berasal dari daerah perdagangan (toko, pasar tradisional, warung, pasar swalayan) dapat berupa kardus, pembungkus, kertas, dan bahan organik (sampah makanan dari restoran).  Sampah yang berasal dari lembaga pendidikan, kantor pemerintah dan kantor swasta biasanya berupa kertas, alat tulis-menulis (pulpen, pensil, spidol), toner fotokopi, pita printer, baterai, bahan kimia dari laboratorium, dan komputer rusak. Baterai bekas dan limbah bahan kimia harus dikumpulkan secara terpisah dan memperoleh perlakuan khusus karena mengandung zat berbahaya dan beracun.
              8. Sampah dari Industri
              <br />
              <br />
              Sampah Industri berasal dari seluruh rangkaian (bahan-bahan kimia dan sisa potongan bahan) maupun perlakuan dan pengemasan produk (kertas, kayu, plastik, kain atau lap). Sampah industri kimia yang sering kali beracun harus memerlukan perlakuan khusus sebelum dibuang. 
              <br />
              <br />
              9. Sampah Nuklir
              <br />
              <br />
              Sampah nuklir dihasilkan dari kegiatan pemanfaatan uranium dan thorium yang menghasilkan energi nuklir yang sangat berbahaya bagi lingkungan hidup dan juga manusia.
              <br />
              <br />
              10. Sampah Padat
              <br />
              <br />
              Sampah padat adalah segala bahan buangan yang berbentuk padat. Contoh sampah padat adalah potongan kayu, potongan besi, dan potongan tembaga.
              <br />
              <br />
              11. Sampah Cair
              <br />
              <br />
              Sampah cair adalah bahan cair yang telah digunakan dan tidak diperlukan kembali sehingga dibuang ke tempat pembuangan sampah. Jenis sampah cair dapat dibagi menjadi dua, yaitu limbah hitam yaitu sampah cair yang dihasilkan dari toilet dan mengandung patogen yang berbahaya dan limbah rumah tangga yakni sampah cair yang dihasilkan dari dapur, kamar mandi, dan tempat cucian yang juga kemungkinan mengandung patogen.
              <br />
              <br />
              12. Sampah yang dapat membusuk (garbage)
              <br />
              <br />
              Contoh sampah yang dapat membusuk adalah sisa makanan, daun, sampah kebun, sampah pertanian, dan sampah pasar.
              <br />
              <br />
              13. Sampah yang tidak membusuk (refuse)
              <br />
              <br />
              Contoh sampah yang tidak dapat membusuk adalah plastik, kertas, gelas, logam, dan kaca.
              </p>
            </div>
          </div>
          <Footer/>
      </div>
    </div>
  )
}

export default article5