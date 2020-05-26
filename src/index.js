import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Maladives from './assets/components/maldives/app';
import Outdoor from './assets/components/outdoor/app';
import Parcelbox from './assets/components/parcelbox/app';
import Offthegrid from './assets/components/offthegrid/app';
import Mustsee from './assets/components/mustsee/app';
import Latestnews from './assets/components/latestnews/app';
import Food from './assets/components/food/app';
import Tecture from './assets/components/tecture/app';
import Visual from './assets/components/visual/app';
import Readmore from './assets/components/readmore/app';


import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Maladives/>
    <Outdoor/>
{/*     <Parcelbox/>
    <Offthegrid/>
    <Mustsee/>
    <Latestnews/>
    <Food/>
    <Tecture/>
    <Visual/>
    <Readmore/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
