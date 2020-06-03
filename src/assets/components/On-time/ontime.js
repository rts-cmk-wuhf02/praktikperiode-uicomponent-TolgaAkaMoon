const contentful = require('contentful')

const client = contentful.createClient({
  space: '3s5j27n9nypm', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0' // contentful access token
})

client.getEntry('koq3QVILiLDXBNspfdlKp') // entry id
.then((entry) => {
    client.getAsset('5GoFws2M1OuSvabRXN1YTo')
    .then((asset) => document.querySelector(".Parcelbox__logo").setAttribute("src", asset.fields.file.url))
    .catch(console.error)
  document.querySelector(".Parcelbox__title").innerHTML = entry.fields.title;
  document.querySelector(".Parcelbox__desc").innerHTML = entry.fields.description;
})
.catch(console.error)