import React, { useState, useEffect } from 'react';// eslint-disable-line no-unused-vars

/** @jsx jsx */
import { css, jsx } from '@emotion/core';


function App(props) {
      const [desc, setDesc] = useState()
      const [imgUrl, setImgUrl] = useState()
      const [title, setTitle] = useState()
      const contentful = require('contentful')
      const client = contentful.createClient({
        space: '3s5j27n9nypm', // contentful space_id 
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0' // contentful access token
      })
      useEffect(() => {
        client.getEntry(props.contentEntryId).then((entry) => {
          let title = entry.fields.title;
          let desc = entry.fields.description;
          client.getAsset(props.assetId)
          .then((asset) => {
            let imgUrl = asset.fields.file.url
            setTitle(title)
            setDesc(desc)
            setImgUrl(imgUrl)
          })
        }).catch(console.error)
      },[])



      

  return (
    <div className={props.class + "__app"} css={css`margin: 0;padding: 0;width: 270px;height: 272px;
    border-radius: 10px;
    background-color:  ${props.bgcolor};
    grid-row-start: 2;
    grid-row-end: 3;
    margin-top: 50px;`
    }>
      <img src={imgUrl} className={props.class + "__logo"} alt="Logo" css={css`background-size: cover;background-repeat: no-repeat;
      width: 72px; height: 72px; margin-left: 170px; margin-top: 20px;`}></img>
      <h1 className={props.class + "__title"} css={css`font-family: 'Gotham', sans-serif;font-weight: bold;font-size: 18px;
      margin-left: 30px;color: white;margin-top: 30px;`}>{title}</h1>
      <p className={props.class + "__desc"} css={css`color: white;font-family: 'Gotham', sans-serif;font-weight: 600;font-size: 16px;
      width: 200px;text-align: left;margin-left: 30px;height: 88px;`}>{desc}</p>
    </div>
  ); 
}

export default App;
