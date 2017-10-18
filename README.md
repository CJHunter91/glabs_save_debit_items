# Debit Items XML process

Tech Stack:
  
  * MongoDB
  * JS
  * Express
  * React

This app uses JS with an Express backend to convert XML files to JSON and save to a MongoDB. It saves a specific Object `ReturnedDebitItem` and the entire processed JSON object to different DB collections.

The Express server generates API endpoints allowing the front end React app to make an AJAX request and display all the `ReturnedDebitItem` objects.  

Author: Christopher Hunter

## Installation Process

* Clone git Repository.
* Install dependencies `npm install` in the root directory.
* Install dependencies `npm install` in the client directory.
* Make sure mongoDB is installed.
* Run `mongod` 
* Use node to run ConvertXML.js `node ConvertXML.js`
* Run the server in `client` and `root` directory via `npm start`.

note: Once the ConvertXML.js has run the files will have moved to the archive folder and not processed again. 

* Use browser to visit [http://localhost:3000/](http://localhost:3000/) for Dashboard view
* Use browser to visit [http://localhost:3001/](http://localhost:3001/) for JSON view from backend
