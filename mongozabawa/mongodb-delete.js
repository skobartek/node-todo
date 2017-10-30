const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{ //wystarczy podać nazwe db i ona sama się utworzy
	if (err) {
		return console.log('Chuj pompke strzelił'); //jak damy return to koniec. Bez return mimo błedu reszta by się wykonała
	}

	//detele many

		// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
		// 	console.log(result);
		// });

	//delete one

		// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
		// 	console.log(result);
		// });

	// find one and delete
	
		db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
			console.log(result);
		});


	// db.close();
});
