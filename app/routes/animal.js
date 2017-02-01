module.exports = function(application){
	application.get('/animals', function(req, res){
		application.app.controllers.animal.getAnimals(application, req, res);
	});

	application.get('/animals/:id', function(req, res){
		application.app.controllers.animal.getAnimal(application, req, res);
	});

	application.post('/animals', function(req,res){
		application.app.controllers.animal.insertAnimal(application, req, res);
	});

	application.put('/animals/:id', function(req, res){
		application.app.controllers.animal.updateAnimal(application, req, res);
	});

	application.delete('/animals/:id', function(req, res){
		application.app.controllers.animal.deleteAnimal(application, req, res);
	});

	

}