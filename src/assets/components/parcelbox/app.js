import React from 'react'; // eslint-disable-line no-unused-vars
import './app.js'; 

/** @jsx jsx */ 
import { css, jsx } from '@emotion/core'; 

function App() {
  return (
    <div className="Parcelbox__App" css={css`margin: 0;padding: 0;width: 270px;height: 272px;
    border-radius: 10px;background-color: white;
    display: block; 
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    `}>
      <img src="" className="Parcelbox__background" alt="Background" css={css`background-size: cover;
      background-repeat:
      no-repeat;
      width: 293px;
      top: 80px;
      margin-left: 50px;
      `}></img>
      <h1 className="Parcelbox__title" css={css`font-family: 'Roboto', sans-serif;font-weight: bold;font-size: 45px;
      margin-left: 370px;width: 300px;`}>Loading</h1>
      <p className="Outdoor__desc" css={css`color: #7B8591;font-family: 'Roboto', sans-serif;font-weight: 600;font-size: 16px;
      width: 300px;text-align: left;margin-left: 370px;height: 88px;
      `}>Loading</p>
    </div>
  );
}

export default App;
