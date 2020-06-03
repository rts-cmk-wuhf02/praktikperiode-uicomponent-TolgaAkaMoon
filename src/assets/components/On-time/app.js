import React from 'react';// eslint-disable-line no-unused-vars
import './ontime.js';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {
  return (
    <div className="Ontime__App" css={css`margin: 0;padding: 0;width: 270px;height: 272px;
    border-radius: 10px;
    background-color: #005AEE;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-top: 50px;`}>
      <img src="" className="Ontime__logo" alt="Logo" css={css`background-size: cover;background-repeat: no-repeat;
      width: 72px; height: 72px; margin-left: 170px; margin-top: 20px;`}></img>
      <h1 className="Ontime__title" css={css`font-family: 'Gotham', sans-serif;font-weight: bold;font-size: 18px;
      margin-left: 30px;color: white;margin-top: 30px;`}>Loading</h1>
      <p className="Ontime__desc" css={css`color: white;font-family: 'Gotham', sans-serif;font-weight: 600;font-size: 16px;
      width: 200px;text-align: left;margin-left: 30px;height: 88px;`}>Loading</p>
    </div>
  );
}

export default App;
