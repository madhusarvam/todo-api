//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

//console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db)=>{
	if(err){
		return console.log('Unable to connect Mongodb Server');
	}
	console.log('Connected to Mongodb Server');
 
  /*db.collection('Users').find({
    _id:new ObjectID('5d441e1e08901f4729cedf85')
}).toArray().then((docs)=>{
   console.log('Users');
   console.log(JSON.stringify(docs,undefined,2))
  },(err)=>{
    console.log('Error',err)
  })*/
 
 db.collection('Users').find({name : 'ssd'}).count().then((count)=>{
   console.log(`Todos Count : ${count}`);
  
  },(err)=>{
    console.log('Error',err)
  })

	//db.close();
});

