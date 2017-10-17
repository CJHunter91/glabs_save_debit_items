use glabs_test;

db.debitItems.drop();

const debitData =
  {
    "ReturnedDebitItem": [
    {
      "-ref": "X01234",
      "-transCode": "17",
      "-returnCode": "1012",
      "-returnDescription": "INSTRUCTION CANCELLED",
      "-originalProcessingDate": "2017-01-12",
      "-valueOf": "65.00",
      "-currency": "GBP",
      "PayerAccount": {
        "-number": "12345678",
        "-ref": "X01234",
        "-name": "FRED SMITH",
        "-sortCode": "01-02-03",
        "-bankName": "A BANK",
        "-branchName": "A BRANCH"
      }
    },
    {
      "-ref": "X02345",
      "-transCode": "17",
      "-returnCode": "1012",
      "-returnDescription": "INSTRUCTION CANCELLED",
      "-originalProcessingDate": "2017-01-12",
      "-valueOf": "60.00",
      "-currency": "GBP",
      "PayerAccount": {
        "-number": "23456789",
        "-ref": "X02345",
        "-name": "JESSICA RABBIT",
        "-sortCode": "02-03-04",
        "-bankName": "A DIFFERENT BANK",
        "-branchName": "DIFF BRANCH"
      }
    },
    {
      "-ref": "X03456",
      "-transCode": "17",
      "-returnCode": "1012",
      "-returnDescription": "INSTRUCTION CANCELLED",
      "-originalProcessingDate": "2017-01-12",
      "-valueOf": "100.00",
      "-currency": "GBP",
      "PayerAccount": {
        "-number": "34567891",
        "-ref": "X03456",
        "-name": "STEVE ROGERS",
        "-sortCode": "03-04-05",
        "-bankName": "SPECIAL BUILDING SOCIETY",
        "-branchName": "LOCAL BRANCH"
      }
    }
    ]
  }

    //insert 
db.debitItems.insert(debitData);