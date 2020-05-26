import React from 'react';
import './maldives.js';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {
  return (
    <div className="Maldives__App" css={css`margin: 0;padding: 0;width: 372px;height: 471px;
    border-radius: 10px;background-color: white;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;`}>
      <img src="" className="App__background" alt="Background" css={css`background-size: cover;background-repeat: no-repeat;
      width: 372px;`}></img>
      <p className="App__subtitle" css={css`margin-top: 30px;font-family: 'Roboto', sans-serif;letter-spacing: 2px;
      color: #33439B;font-weight: bold;font-size: 11px;margin-left: 30px;`}>Loading</p>
      <h1 className="App__title" css={css`font-family: 'Roboto', sans-serif;font-weight: bold;font-size: 28px;
      margin-left: 30px;`}>Loading</h1>
      <p className="App__desc" css={css`color: #7B8591;font-family: 'Roboto', sans-serif;font-weight: 600;font-size: 16px;
      width: 291px;text-align: left;margin-left: 30px;height: 88px;`}>Loading</p>
    </div>
  );
}

export default App;
