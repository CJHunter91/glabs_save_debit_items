var fs = require('fs');
xml2js = require('xml2js');
var MongoClient = require('mongodb').MongoClient;

var parser = new xml2js.Parser({explicitArray: false, attrkey: "item"});

MongoClient.connect('mongodb://localhost:27017/glabs_test', (err, database) =>{
  if (err) return;
  const db = database;

  fs.readFile(__dirname + '/xml_processor/sample_xml.xml', function(err, data) {
      parser.parseString(data, function (err, result) {

        const debitItems = result.BACSDocument.Data.ARUDD.Advice.OriginatingAccountRecords.OriginatingAccountRecord.ReturnedDebitItem;
        console.dir(debitItems[0])
        console.dir(result)
        db.collection('BACSDocuments').insert(result);
        db.collection('debitItems').insert(debitItems);
        console.log('Done');
      });
  });
})