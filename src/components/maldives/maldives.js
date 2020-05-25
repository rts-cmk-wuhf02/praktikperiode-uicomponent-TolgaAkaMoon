const contentful = require('contentful')

const client = contentful.createClient({
  space: '3s5j27n9nypm',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0'
})

client.getEntry('5O9j1gQcUP6hW2P97ijQho')
.then((entry) => console.log(entry))
.catch(console.error)

