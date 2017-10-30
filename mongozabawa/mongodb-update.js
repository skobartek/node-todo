const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{ //wystarczy podać nazwe db i ona sama się utworzy
	if (err) {
		return console.log('Chuj pompke strzelił'); //jak damy return to koniec. Bez return mimo błedu reszta by się wykonała
	}
	console.log('Connected');

	// db.collection('Todos').findOneAndUpdate(
	// {
	// 	_id: ObjectID("59f472c9d1615803acba3c8c")
	// },
	// { 
	// 	$set: {
	// 		completed: false
	// 	}
	// }, {
	// 	returnOriginal: false
	// }
	// ).then((result) => {
	// 	console.log(result);
	// });


	db.collection('Users').findOneAndUpdate(
	{
		_id: ObjectID("59f5ae24236fd419a47b1bad")
	},
	{ 
		$set: {
			location: "Katowice"
		},
		$inc: {
			age: +1
		}
	}, {
		returnOriginal: false
	}
	).then((result) => {
		console.log(result);
	});
	
	

	// db.close();
});
