import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router';
import Header from '../.././Header';
import Footer from '../.././Footer';

type Props = {}

const article3 = (props: Props) => {
  return (
    <div>
      <Header page = {1}/>
      <div id="overviewAbout" style = {{paddingTop: '100px'}}>
          <div id="headerfill">
          </div>

          <div id="fixedwidth">
            <div id="header32">  
              <h1 id = "desctitle">
                Article2
              </h1>
            </div>

          <div id="header32">
              <p id="desc1">
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Quae repudiandae asperiores deleniti maxime 
                repellat reprehenderit quisquam, consequatur nulla 
                aliquam doloremque!
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Vitae possimus provident iure ipsa, 
                quos aliquam nulla repudiandae. Dolor, et quos.
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Quae repudiandae asperiores deleniti maxime 
                repellat reprehenderit quisquam, consequatur nulla 
                aliquam doloremque!
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Vitae possimus provident iure ipsa, 
                quos aliquam nulla repudiandae. Dolor, et quos.
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Quae repudiandae asperiores deleniti maxime 
                repellat reprehenderit quisquam, consequatur nulla 
                aliquam doloremque!
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Vitae possimus provident iure ipsa, 
                quos aliquam nulla repudiandae. Dolor, et quos.
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Quae repudiandae asperiores deleniti maxime 
                repellat reprehenderit quisquam, consequatur nulla 
                aliquam doloremque!
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Vitae possimus provident iure ipsa, 
                quos aliquam nulla repudiandae. Dolor, et quos.
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Quae repudiandae asperiores deleniti maxime 
                repellat reprehenderit quisquam, consequatur nulla 
                aliquam doloremque!
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Vitae possimus provident iure ipsa, 
                quos aliquam nulla repudiandae. Dolor, et quos.
              </p>
            </div>
          </div>
          <Footer/>
      </div>
    </div>
  )
}

export default article3