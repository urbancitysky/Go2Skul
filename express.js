//create Express server

var PORT = process.env.PORT || 3000;
var app = require('express')();
app.set('port', PORT);

app.get('/', function(req, res) {
    res.send('Yo~')
});


app.listen(app.get('port'), function() {
    console.log('app listening on port ' + app.get('port') 
    	+ ' \npress ctrl+C to terminate');
});


/*
* create restApi, Create-Read-Update-Delete to change students.json
*/

const studentRouter = require('./student.router');
module.exports = studentRouter;





/*
* use 'require' to read '.json' file
* use fs to write 
*/
var path = require('path');
var fs = require('fs');
var filePath = path.join("C:\\Users\\urban_000\\Dropbox\\Sean's NB's\\Source code\\Go2Skul", 'students.json');
var studentDatas = require(filePath);
// handle datas
fs.writeFile(filePath, JSON.stringify(studentDatas, null, 4));

/*
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
*/