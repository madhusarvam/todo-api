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

/*db.collection('Todos').insertOne({
		text : 'Something to do',
		completed : false
	}, function (error, response) {
    if(error) {
        console.log('Error occurred while inserting');
       // return 
    } else {
       console.log('inserted record', response.ops[0]);
      // return 
    }
});*/


/*db.collection('Users').insertOne({

		name : 'Madhu Sudhan S',
		age : 27,
		location : "Bangalore"
	}, function (error, response) {
    if(error) {
        console.log('Error occurred while inserting');
       // return 
    } else {
       console.log('inserted record', response.ops[0]._id.getTimestamp());
      // return 
    }
});*/

 

	db.close();
});

