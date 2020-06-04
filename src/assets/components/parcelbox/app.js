import React from 'react';// eslint-disable-line no-unused-vars
import './parcelbox.js';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {

    const contentful = require('contentful')
    
    const client = contentful.createClient({
      space: '3s5j27n9nypm', // contentful space_id
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0' // contentful access token
    })
    
    client.getEntry(props.contentEntryId) // entry id
    .then((entry) => {
        client.getAsset('5GoFws2M1OuSvabRXN1YTo')
        .then((asset) => document.querySelector(".Parcelbox__logo").setAttribute("src", asset.fields.file.url))
        .catch(console.error)
      document.querySelector(".Parcelbox__title").innerHTML = entry.fields.title;
      document.querySelector(".Parcelbox__desc").innerHTML = entry.fields.description;
    })
    .catch(console.error)

  return (
    <div className="Parcelbox__App" css={css`margin: 0;padding: 0;width: 270px;height: 272px;
    border-radius: 10px;
    background-color: #FFA767;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-top: 50px;`}>
      <img src="" className="Parcelbox__logo" alt="Logo" css={css`background-size: cover;background-repeat: no-repeat;
      width: 72px; height: 72px; margin-left: 170px; margin-top: 20px;`}></img>
      <h1 className="Parcelbox__title" css={css`font-family: 'Gotham', sans-serif;font-weight: bold;font-size: 18px;
      margin-left: 30px;color: white;margin-top: 30px;`}>Loading</h1>
      <p className="Parcelbox__desc" css={css`color: white;font-family: 'Gotham', sans-serif;font-weight: 600;font-size: 16px;
      width: 200px;text-align: left;margin-left: 30px;height: 88px;`}>Loading</p>
    </div>
  );
}

export default App;
