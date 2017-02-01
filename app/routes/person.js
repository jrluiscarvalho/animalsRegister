module.exports = function(application){
	application.get('/persons', function(req, res){
		application.app.controllers.person.getPersons(application, req, res);
	});

	application.get('/persons/:id', function(req, res){
		application.app.controllers.person.getPerson(application, req, res);
	});

	application.post('/persons', function(req,res){
		application.app.controllers.person.insertPerson(application, req, res);
	});

	application.put('/persons/:id', function(req, res){
		application.app.controllers.person.updatePerson(application, req, res);
	});

	application.delete('/persons/:id', function(req, res){
		application.app.controllers.person.deletePerson(application, req, res);
	});

	

}