const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
Todo.remove({}).then((res)=>{
	console.log(res);
})*/

Todo.fineOneAndRemove({_id:'5d4552643dddaa6c163c1c72'}).then((todo)=>{

});

/*Todo.findByIdAndRemove('6d4552643dddaa6c163c1c72').then((todo)=>{
	console.log(todo)
});*/