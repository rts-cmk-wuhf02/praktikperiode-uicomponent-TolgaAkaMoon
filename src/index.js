import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Maladives from './assets/components/maldives/app';
import Outdoor from './assets/components/outdoor/app';
//import Ontime from './assets/components/on-time/app';
/*import Offthegrid from './assets/components/offthegrid/app'; // eslint-disable-line no-unused-vars
import Mustsee from './assets/components/mustsee/app'; // eslint-disable-line no-unused-vars
import Latestnews from './assets/components/latestnews/app'; // eslint-disable-line no-unused-vars
import Food from './assets/components/food/app'; // eslint-disable-line no-unused-vars
import Tecture from './assets/components/tecture/app'; // eslint-disable-line no-unused-vars
import Visual from './assets/components/visual/app'; // eslint-disable-line no-unused-vars
import Readmore from './assets/components/readmore/app'; // eslint-disable-line no-unused-vars */

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Maladives/>
    <Outdoor/>
    <Ontime class="Ontime" bgcolor="#005AEE" contentEntryId="koq3QVILiLDXBNspfdlKp" />
    <Ontime class="Parcel" bgcolor="#FFA767" contentEntryId="5MGCEKtVNZ8B4IYXpegdd1" />
    <Ontime class="Quality" bgcolor="#0AACDC" contentEntryId="NGpzHSIdEoyXCSTBjRwBL" />
    <Ontime class="Customer" bgcolor="#597AEF" contentEntryId="Rt1iktZM7wwSKkD1xOltk" />
    {/*
    <Mustsee/>
    <Latestnews/>
    <Food/>
    <Tecture/>
    <Visual/>
    <Readmore/> 
    */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
