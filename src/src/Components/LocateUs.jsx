import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';
// import GoogleMap from './GoogleMap';

type Props = {}

const LocateUs = (props: Props) => {
  return (
    <div>
     <Header page = {2}/>
      <div style={{
        height: 500,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
        LocateUs
      </div>
      <Footer/>
    </div>
  )
}

export default LocateUs