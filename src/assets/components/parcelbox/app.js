import React from 'react';// eslint-disable-line no-unused-vars
import './parcelbox.js';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {
  return (
    <div className="Parcelbox__App" css={css`margin: 0;padding: 0;width: 270px;height: 272px;
    border-radius: 10px;
    background-color: ;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-top: 50px;`}>
      <img src="" className="Parcelbox__logo" alt="Logo" css={css`background-size: cover;background-repeat: no-repeat;
      width: 72px;`}></img>
      <h1 className="Parcelbox__title" css={css`font-family: 'Roboto', sans-serif;font-weight: bold;font-size: 28px;
      margin-left: 30px;`}>Loading</h1>
      <p className="Parcelbox__desc" css={css`color: #7B8591;font-family: 'Roboto', sans-serif;font-weight: 600;font-size: 16px;
      width: 291px;text-align: left;margin-left: 30px;height: 88px;`}>Loading</p>
    </div>
  );
}

export default App;
