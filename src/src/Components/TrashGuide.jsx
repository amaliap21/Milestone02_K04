import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import '../css/styles.css';


type Props = {}

const TrashGuide = (props: Props) => {
  return (
    <div>
        <Header page = {1}/>
        <div id="overviewAbout" style = {{paddingTop: '100px'}}>
          <div id="headerFill2">
          </div>

          <div id="fixedWidth">
            <div id="desclong4">
              <div id="header32">
                <h1 style = {{paddingTop:'25px'}}>Trash Guides</h1>
              </div>
            </div>
            <div id="leftFill">

            </div>

            <div id="logodivBig">
    

            </div>
            <div id="rightFill">
            </div>

          </div>


          <div id="fixedWidth">

            <div id="desclong5" style = {{textAlign:'left', }}>
              <div id="header33" >
                <h1 style = {{textAlign:'left', }}><b>Only 30% of Household Hazardous Waste is Properly Disposed Of</b>
              </h1>
              <p style = {{textAlign:'left',paddingLeft:'60px' , paddingRight:'60px'}}>Sampah merupakan salah satu masalah yang pastinya dialami oleh setiap negara di seluruh dunia, salah satunya Indonesia. Indonesia belum dapat menemukan cara yang efektif untuk mengurangi penumpukan sampah. Penyebab utama dari penumpukan sampah adalah jumlah penduduk yang semakin padat tetapi tempat untuk menampung sampah kurang. Masyarakatnya juga kurang sadar bahwa masalah tentang sampah ini cukup mengkhawatirkan karena kurangnya edukasi tentang bagaimana cara untuk memilah sampah dengan baik.
                Maka dari itu, melalui program ini kami akan menjelaskan tentang apa saja macam-macam dari sampah sehingga masyarakat bisa lebih sadar dan harapannya permasalahan tentang sampah ini bisa menjadi lebih baik kedepannya.
                <br />
                <br />
                <Link to = "/Article1">Article 1</Link><br/>
                <Link to = "/Article2">Article 2</Link><br/>
                <Link to = "/Article3">Article 3</Link><br/>
                <Link to = "/Article4">Article 4</Link><br/>
                <Link to = "/Article5">Article 5</Link><br/>
                <Link to = "/Article6">Article 6</Link><br/>
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

          <div id="desclong7">
            <div id="header32">
              <h1><b>Kelompok </b>  </h1><p style = {{marginTop:'-15px'}}>Milestone kelompok 4<br/>Phone: (613)-325-6257 </p>

            </div>
          </div>
        </div>



        <div id="fixedWidth">

          <div id="leftFill2">

          </div>

          <div id="desclong7">
            <div id="header32">

              <p style = {{paddingTop:'30px'}}><br /> Follow us on <a href='https://github.com/amaliap21/Milestone02_K04'>GitHub!</a><br />Site created by Milestone 04.</p>
            </div>
          </div>

        </div>

    

      <Footer />
    </div>
  </div>
  )
}

export default TrashGuide
