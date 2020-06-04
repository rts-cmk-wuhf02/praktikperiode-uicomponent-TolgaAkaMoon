import React from 'react';// eslint-disable-line no-unused-vars
import './outdoor.js';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {
  return (
    <div className="Outdoor__App" css={css`margin: 0;padding: 0;width: 771px;height: 471px;
    border-radius: 10px;background-color: white;
    display: block; 
    margin-left: 123px;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    `}>
      <img src="" className="Outdoor__background" alt="Background" css={css`background-size: cover;
      background-repeat:
      no-repeat;
      width: 293px;
      position: absolute;
      top: 80px;
      margin-left: 50px;
      `}></img>
      <p className="Outdoor__button" css={css`margin-top: 20px;font-family: 'Roboto', sans-serif;letter-spacing: 2px;
      color: #33439B;font-weight: bold;font-size: 11px;margin-left: 625px;
      border-radius: 17px;
      width: 99px;
      height: 33px;
      text-align: center;
      color: white;
      background-color: #005AEE;
      line-height: 35px;
      `}>LEISURE</p>
      <h1 className="Outdoor__title" css={css`font-family: 'Roboto', sans-serif;font-weight: bold;font-size: 45px;
      margin-left: 370px;width: 300px;`}>Loading</h1>
      <p className="Outdoor__desc" css={css`color: #7B8591;font-family: 'Roboto', sans-serif;font-weight: 600;font-size: 16px;
      width: 300px;text-align: left;margin-left: 370px;height: 88px;
      `}>Loading</p>

            <img src="" className="Outdoor__smallimg1" alt="Background" css={css`background-size: cover;background-repeat: no-repeat;
      width: 99px;
      margin-left: 370px;
      `}></img>
            <img src="" className="Outdoor__smallimg2" alt="Background" css={css`background-size: cover;background-repeat: no-repeat;
      width: 99px;
      margin-left: 15px
      `}></img>
            <img src="" className="Outdoor__smallimg3" alt="Background" css={css`background-size: cover;background-repeat: no-repeat;
      width: 99px;
      margin-left: 15px
      `}></img>
    </div>
  );
}

export default App;
