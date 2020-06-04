import React, { useState, useEffect } from 'react';// eslint-disable-line no-unused-vars

/** @jsx jsx */
import { css, jsx } from '@emotion/core';


function App(props) {
      const [desc, setDesc] = useState()
      const [backUrl, setBackUrl] = useState()
      const [ProfileImg, setProfileImg] = useState()
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
          let desc = entry.fields.subtitle;
          setTitle(title)
          setDesc(desc)
          client.getAsset(props.assetId)
          .then((asset) => {
            let bgimgUrl = asset.fields.file.url
            setBackUrl(bgimgUrl)
          })
          client.getAsset(props.profileId).then((asset) => {
              let profileImg = asset.fields.file.url
              setProfileImg(profileImg)
          })
        }).catch(console.error)
      },[])



      

  return (
    <div className={props.class + "__app"} css={css`margin: 0;padding: 0;width: 372px;height: 373px;
    border-radius: 10px;
    background-color:  white;
    grid-column: auto;
    grid-row-start: 3;
    grid-row-end: 4;
    margin-top: 50px;`
    }>
      <h2 css={css`width: 170px; height: 21px;color: white;position: absolute;text-transform: uppercase;
      font-size: 18px; font-family: 'gotham', sans-serif;margin-left: 30px;
      `}>Collection #{Math.floor(Math.random() * 10 )}</h2>
      <img src={backUrl} className={props.class + "__logo"} alt="Logo" css={css`background-size: cover;background-repeat: no-repeat;
      width: 372px; height: 242px;`}></img>
      <img src={ProfileImg} className={props.class + "__profile"} alt="ProfileImg" css={css`background-size: cover;background-repeat: no-repeat;
      width: 60px; height: 60px; margin-top: 0px; margin-left: 30px; z-index: 10; margin-top: -35px;`}></img>
      <h1 className={props.class + "__title"} css={css`font-family: 'Gotham', sans-serif;font-weight: bold;font-size: 18px;px;color: black;margin-top: 30px;text-align: center;`}>{title}</h1>
      <p className={props.class + "__desc"} css={css`color: #7B8591;font-family: 'Gotham', sans-serif;font-weight: 600;font-size: 16px;text-align: center;height: 88px;`}>By: {desc}</p>
    </div>
  ); 
}

export default App;
