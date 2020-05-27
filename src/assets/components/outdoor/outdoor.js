const contentful = require('contentful')

const client = contentful.createClient({
  space: '3s5j27n9nypm', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0' // contentful access token
})

client.getEntry('76cAgEMACO3El4X1S50DU5') // entry id
.then((entry) => {
  client.getAssets('676qA6XWKLOR9gBLO3j9fw') // asset id
  .then((asset) => {
      console.log(asset.items[0].fields.file.url)
      document.querySelector(".Outdoor__background").setAttribute("src", asset.items[4].fields.file.url)
      document.querySelector(".Outdoor__smallimg").setAttribute("src", asset.items[0].fields.file.url)
      document.querySelector(".Outdoor__smallimg").setAttribute("src", asset.items[0].fields.file.url)
      document.querySelector(".Outdoor__smallimg").setAttribute("src", asset.items[0].fields.file.url)
  }
  );
  document.querySelector(".Outdoor__title").innerHTML = entry.fields.title;
  document.querySelector(".Outdoor__desc").innerHTML = entry.fields.description;
})
.catch(console.error)