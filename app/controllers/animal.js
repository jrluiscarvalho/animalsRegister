var Animal = require('../models/Animal');

module.exports.getAnimals = function(application, req, res){
	Animal
		.query()
		.then(function(animals){
			res.send(animals);
		})
		.catch(function(err){
			console.log('deu ruim');
			console.log(err);
		})
		
}

module.exports.getAnimal = function(application, req, res){
	Animal
		.query()
		.where('id', '=', req.params.id)
		.then(function(animal){
			res.send(animal);
		})
		.catch(function(err){
			console.log(err);
		})
		
}

module.exports.updateAnimal = function(application, req, res){
	Animal
		.query()
		.patchAndFetchById(req.params.id,{name: 'dogdog'})
		.then(function(updated){
			console.log(updated);
			//getAnimal(application, req, res);
		})
		.catch(function(err){
			console.log(err);
		})
		
}



module.exports.insertAnimal = function(application, req, res){
	Animal
		.query()
		.insert({ownerId: 2, name:'cat', species: 'mamifero'})
		.then(function(animal){
			console.log(animal);
		})
		.catch(function(err){
			console.log(err);
		})
}

module.exports.deleteAnimal = function(application, req, res){
	Animal
		.query()
		.delete()
		.where('id', '=', req.params.id)
		.then(function(animal){
			console.log(animal);
		})
		.catch(function(err){
			console.log(err);
		})
}