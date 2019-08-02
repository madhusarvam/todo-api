//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db)=>{
	if(err){
		return console.log('Unable to connect Mongodb Server');
	}
	console.log('Connected to Mongodb Server');
   
  /*db.collection('Users').findOneAndUpdate({_id:new ObjectID('5d441bcead281407bc7ef609')},{
    $set: {
      name: "Madhu R"
    }
  },{
    returnOriginal : true 
  }).then((result)=>{
    console.log(result);
  });
*/

db.collection('Users').findOneAndUpdate({_id:new ObjectID('5d441bcead281407bc7ef609')},{
    $inc: {
      age: -1
    },
    $set: {
      name: "Madhu Sudhan S"
    }
  },{
    returnOriginal : false 
  }).then((result)=>{
    console.log(result);
  });


	//db.close();
});

