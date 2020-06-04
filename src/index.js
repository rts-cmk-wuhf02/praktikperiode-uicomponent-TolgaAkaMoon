import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Maladives from './assets/components/maldives/app';
import Outdoor from './assets/components/outdoor/app';
import Ontime from './assets/components/ontime/app';
import Offthegrid from './assets/components/offthegrid/app';
/*import Mustsee from './assets/components/mustsee/app'; // eslint-disable-line no-unused-vars
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
    <Ontime class="Ontime" bgcolor="#005AEE" contentEntryId="koq3QVILiLDXBNspfdlKp" assetId="5GoFws2M1OuSvabRXN1YTo" />
    <Ontime class="Parcel" bgcolor="#FFA767" contentEntryId="5MGCEKtVNZ8B4IYXpegdd1" assetId="4rr0tlEyKzbC8KIjl9XUCB"/>
    <Ontime class="Quality" bgcolor="#0AACDC" contentEntryId="NGpzHSIdEoyXCSTBjRwBL" assetId="2xU96Z31UssdZ0gy7z2ieD"/>
    <Ontime class="Customer" bgcolor="#597AEF" contentEntryId="Rt1iktZM7wwSKkD1xOltk" assetId="7GCUNmBVcouXryYzKgb1pw"/>
    <Offthegrid class="Offthegrid" contentEntryId="Y0QCdetRuyr1wxLbGRfrn" assetId="2ec0EPENH7duDDHPoVUufQ" profileId="2eYXMH83uVGbJLykoRMSW"/>
    <Offthegrid class="Fashion" contentEntryId="4ELyDL8PrJvQLBTUPuRS8B" assetId="78bSN93c6bMJM8XgZ1X8ZV" profileId="7iJ14hS3zIS0MRFePJ0yCY"/>
    <Offthegrid class="Arch" contentEntryId="50TVIxB9RoGVJ1YEIS2K8e" assetId="5uNjlQO7WS1PQfGNuFhv8K" profileId="qW53M4WAj0Ypen9yS5tIi"/>
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
