import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';


type Props = {}

const Reward = (props: Props) => {
  return (
    <div>
       <Header page = {3}/>
       Reward
    </div>
  )
}

export default Reward