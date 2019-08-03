const {SHA256} = require('crypto-js');

const jswt  = require('jsonwebtoken');

var data = {
  id : 7
}
var token  = jswt.sign(data,'password');
console.log(token);
var decoded = jswt.verify(token,'password');
console.log(decoded);
/*
var message =  '123456';
var hash = SHA256(message).toString();

console.log(hash);

var data = {
  id: 4
};
var token = {
  data,
  hash: SHA256(JSON.stringify(data)+'SECKEY').toString()
}
//token.data.id = 5;
var resultHash = SHA256(JSON.stringify(token.data)+'SECKEY').toString();

if(resultHash === token.hash){
  console.log('Data was not changes')
}else
{
  console.log('Data was changes')
}*/