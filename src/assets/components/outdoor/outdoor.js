const contentful = require('contentful')

const client = contentful.createClient({
  space: '3s5j27n9nypm', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0' // contentful access token
})

client.getEntry('76cAgEMACO3El4X1S50DU5') // entry id
.then((entry) => {
client.getAsset('676qA6XWKLOR9gBLO3j9fw')
.then((asset) => document.querySelector(".Outdoor__background").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('4RT5UGwvs9hOaeAM3KJx6X')
.then((asset) => document.querySelector(".Outdoor__smallimg1").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('5VHb5bVwj5AdQP510mhBIh')
.then((asset) => document.querySelector(".Outdoor__smallimg2").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('1GjiePoOIw8gRVfGnRqNp3')
.then((asset) => document.querySelector(".Outdoor__smallimg3").setAttribute("src", asset.fields.file.url))
.catch(console.error)
  document.querySelector(".Outdoor__title").innerHTML = entry.fields.title;
  document.querySelector(".Outdoor__desc").innerHTML = entry.fields.description;
})
.catch(console.error)