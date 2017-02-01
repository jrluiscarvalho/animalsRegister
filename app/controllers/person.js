var Person = require('../models/Person');

module.exports.getPersons = function(application, req, res){
	Person
		.query()
		.then(function(persons){
			res.send(persons);
		})
		.catch(function(err){
			console.log('deu ruim');
			console.log(err);
		})
		
}

module.exports.getPerson = function(application, req, res){
	Person
		.query()
		.where('id', '=', req.params.id)
		.then(function(person){
			res.send(person);
		})
		.catch(function(err){
			console.log(err);
		})
		
}

module.exports.updatePerson = function(application, req, res){
	Person
		.query()
		.patchAndFetchById(req.params.id,{name: 'dogdog'})
		.then(function(updated){
			console.log(updated);
			//getPerson(application, req, res);
		})
		.catch(function(err){
			console.log(err);
		})
		
}



module.exports.insertPerson = function(application, req, res){
	Person
		.query()
		.insert({ownerId: 1, name:'Sylverter Stallone', species: 'mamifero'})
		.then(function(person){
			console.log(person);
		})
		.catch(function(err){
			console.log(err);
		})
}

module.exports.deletePerson = function(application, req, res){
	Person
		.query()
		.delete()
		.where('id', '=', req.params.id)
		.then(function(person){
			console.log(person);
		})
		.catch(function(err){
			console.log(err);
		})
}