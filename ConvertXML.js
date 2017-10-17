var fs = require('fs');
xml2js = require('xml2js');
var MongoClient = require('mongodb').MongoClient;

var db;
var parser = new xml2js.Parser({explicitArray: false, attrkey: "item", mergeAttrs: true});
const readFrom = __dirname + '/xml_processor/';
const moveTo = __dirname + '/xml_archive/';

MongoClient.connect('mongodb://localhost:27017/glabs_test', (err, database) =>{
  if (err) return;
  db = database;
})

//add file check to throw error if no files in folder.

fs.readdir( readFrom , function( err, files ) {

  files.forEach( (file)=>{
    readSaveXML(file, moveXML);
  })
})

const moveXML = (file) =>{
  fs.rename(readFrom + file, moveTo + file, function(err, data){
    if (err) throw err;
    console.log(`\n ${file} archived \n`);
  }) 
}

const readSaveXML = (file, moveCallback) => {
  fs.readFile( readFrom + file, function(err, data) {

    parser.parseString(data, function (err, result) {
      const debitItems = result.BACSDocument.Data.ARUDD.Advice.OriginatingAccountRecords.OriginatingAccountRecord.ReturnedDebitItem;
      db.collection('BACSDocuments').insert(result);
      db.collection('debitItems').insert(debitItems);
      console.log(`\n ***${file} converted to JSON and successfully saved to db*** \n`);
    });

  });

}
