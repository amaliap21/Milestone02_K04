import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';


import Header from '../Header';
import Footer from '../Footer';


type Props = {}

const TrashGuideComponents = (props: Props) => {
  
  return (
  <div>
    <Header page = {1}/>  
    <div id = "overviewI" style = {{paddingTop: '100px'}}>
        <div id="headerFill1">
        </div>

        
        <div id="fixedWidth">
            <div id="desclong5" style = {{textAlign:'left', }}>
              <div id="header33" >
                <h1 style = {{textAlign:'left', }}>
                  <b>Only 30% of Household Hazardous Waste is Properly Disposed Of</b>
                </h1>
                <p style = {{textAlign:'left',paddingLeft:'60px' , paddingRight:'60px', }}>
                <Link to = "/Article1">Article 1</Link>
                <Link to = "/Article2">Article 2</Link>
                <Link to = "/Article3">Article 3</Link>
                <Link to = "/Article4">Article 4</Link>
                <Link to = "/Article5">Article 5</Link>
                <Link to = "/Article6">Article 6</Link>
                </p>
              </div>
            </div>
          </div>

        <Footer />
    </div>
  </div>
  )
}

export default TrashGuideComponents