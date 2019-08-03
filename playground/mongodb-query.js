const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var email = 'madhusarvam007@gmail.com'
var id = '5d4439387ab36f374c3a3d12';
if (!ObjectID.isValid(id)) {
  return console.log('ID not valid');
}
User.find({
  email : email
}).then((users)=>{
  console.log(users)
});

User.findOne({
  email : email
}).then((user)=>{
  console.log(user)
});

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));

/*var id = '5d452860d114391ddcb10ed7';

if (!ObjectID.isValid(id)) {
  return console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));*/