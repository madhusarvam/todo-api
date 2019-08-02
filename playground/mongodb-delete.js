//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
//console.log(obj);

//console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db)=>{
	if(err){
		return console.log('Unable to connect Mongodb Server');
	}
	console.log('Connected to Mongodb Server');
  
  // deletemany
  /*db.collection('Todos').deleteMany({text:'Go to Sleep'}).then((result)=>{
    console.log(result);
  })*/
  /*db.collection('Users').deleteMany({name:'ssd'}).then((result)=>{
    console.log(result);
  })*/
  //deleteOne
  /*db.collection('Todos').deleteOne({text:'Make Cake'}).then((result)=>{
    console.log(result);
  })*/

  /*db.collection('Users').deleteOne({name:'Madhu Sudhan S'}).then((result)=>{
    console.log(result);
  })
*/
  //findOneAndDelete

  /*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
  })
*/

db.collection('Users').findOneAndDelete({_id:new ObjectID('5d441c1e9661012f00b0deeb')}).then((result)=>{
    console.log(result);
  })
	//db.close();
});

