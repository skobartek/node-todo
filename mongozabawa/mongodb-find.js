const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{ //wystarczy podać nazwe db i ona sama się utworzy
	if (err) {
		return console.log('Chuj pompke strzelił'); //jak damy return to koniec. Bez return mimo błedu reszta by się wykonała
	}
	console.log('Connected to MongoDb server');

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log("Unable to fetch");
	// });

	// db.collection('Todos').find({
	// 	_id: ObjectID('59f5b40f0df04a4c02e166ed')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch");
	// } );



	db.collection('Users').find({name: "Bartek"}).count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log("Unable to fetch");
	});

	// db.close();
});
