const PORT = process.env.PORT || 3000;
const serverApp = require('express')();
serverApp.set('port', PORT);

serverApp.get('/', function(req, res) {
    res.send('Yo~')
});




serverApp.listen(serverApp.get('port'), function() {
    console.log('serverApp listening on port ' + serverApp.get('port') + ' \npress ctrl+C to terminate');
});

module.exports=router;
var client = require('mongodb').MongoClient;
var url ='mongodb://localhost:27017/test'
var collection;
client.connect(url,function(err,db){
    if(err==null){
        console.log("mongodb connected");
        collection =db.collection('test');
        
    }
    
});

/*
// .json 可以直接require讀取，寫入則需要使用fs.
const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'students.json');
const studentDatas = require(filePath);
// handle datas
fs.writeFile(filePath, JSON.stringify(studentDatas, null, 4));
*/

