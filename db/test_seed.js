use glabs_test;

db.debitItems.drop();

var debitData = 
[ { item: 
     { ref: 'X01234',
       transCode: '17',
       returnCode: '1012',
       returnDescription: 'INSTRUCTION CANCELLED',
       originalProcessingDate: '2017-01-12',
       valueOf: '65.00',
       currency: 'GBP' },
    PayerAccount: { item: [Object] },
    _id: ObjectID { _bsontype: 'ObjectID', id: [Object] } },
  { item: 
     { ref: 'X02345',
       transCode: '17',
       returnCode: '1012',
       returnDescription: 'INSTRUCTION CANCELLED',
       originalProcessingDate: '2017-01-12',
       valueOf: '60.00',
       currency: 'GBP' },
    PayerAccount: { item: [Object] },
    _id: ObjectID { _bsontype: 'ObjectID', id: [Object] } },
  { item: 
     { ref: 'X03456',
       transCode: '17',
       returnCode: '1012',
       returnDescription: 'INSTRUCTION CANCELLED',
       originalProcessingDate: '2017-01-12',
       valueOf: '100.00',
       currency: 'GBP' },
    PayerAccount: { item: [Object] },
    _id: ObjectID { _bsontype: 'ObjectID', id: [Object] } } ]


db.debitItems.insert(debitData);