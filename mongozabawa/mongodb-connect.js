// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'andrew', age: 25};
// var {name} = user; //object desctructure
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{ //wystarczy podać nazwe db i ona sama się utworzy
	if (err) {
		return console.log('Chuj pompke strzelił'); //jak damy return to koniec. Bez return mimo błedu reszta by się wykonała
	}
	console.log('Connected to MongoDb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	// id: 123,
	// 	name: 'Bartek',
	// 	age: 24,
	// 	location: "Warsaw"
	// }, (err,result) => {
	// 	if (err) {
	// 		console.log('Unable to insert user', err);
	// 	}
	// 	// console.log(JSON.stringify(result.ops, undefined, 2));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });
	db.close();
});
