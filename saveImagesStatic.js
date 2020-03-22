// var fs = require('fs')
// var request = require('request')

// var download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     console.log('content-type:', res.headers['content-type']);
//     console.log('content-length:', res.headers['content-length']);

//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };

const API_KEY = process.env.VUE_APP_AIRTABLE_API_KEY
const BASE_ID = process.env.VUE_APP_AIRTABLE_BASE_ID

const basePath = 'https://api.airtable.com/v0/' + BASE_ID + '/'

function buildUrl(path) {
  return basePath + path
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + API_KEY
}

const yarnUrl = buildUrl(
  'Yarns?fields%5B%5D=Name&fields%5B%5D=Attachment&fields%5B%5D=Website'
)
const ninaUrl = buildUrl(
  'Nina?fields%5B%5D=Name&fields%5B%5D=Headshot&fields%5B%5D=BioP1&fields%5B%5D=BioP2&fields%5B%5D=Motto'
)

const yarnResponse = await fetch(yarnUrl, { headers })
const ninaResponse = await fetch(ninaUrl, { headers })

const yarnJson = await yarnResponse.json()

console.log('weee')

// download(yarnJson.records[0].fields.Attachment[0].url, yarnJson.records[0].fields.Name + '.png', function(){
//   console.log('done');
// });