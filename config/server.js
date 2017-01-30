var express = require('express'),
bodyParser = require('body-parser'),
expressValidator = require('express-validator'),
expressSession = require('express-session'),
consign = require('consign'),
Knex = require('knex'),
knexConfig = require('../knexfile');

const objection = require('objection');
const Promise = objection.Promise;
const Model = objection.Model;

Model = require('objection').Model;

var app = express()
    .use(bodyParser.json());

// Initialize knex.
var knex = Knex(knexConfig.development);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

const createSchema = Promise.coroutine(function *() {
  //yield knex.schema.dropTableIfExists('Animal');
  //yield knex.schema.dropTableIfExists('Person');
  

/*  yield knex.schema.createTable('Animal', function (table) {
    table.bigincrements('id').primary();
    table.integer('ownerId');
    table.string('name');
    table.string('species');
  });

  yield knex.schema.createTable('Person', function (table) {
   table.increments('id').primary();
   table.integer('parentId').unsigned().references('id').inTable('Person');
   table.string('firstName');
   table.string('lastName');
   table.integer('age');
   table.json('address');
 });*/

  /*yield knex.schema.createTable('Movie', function (table){
    table.bigincrements('id').primary()
    .references('id')
    .inTable('Person')
    .index();
    table.string('name');
  });

  yield knex.schema.createTable('Person_Movie', function (table) {
    table.increments('id').primary();
    table.integer('personId').unsigned().references('id').inTable('Person').onDelete('CASCADE');
    table.integer('movieId').unsigned().references('id').inTable('Movie').onDelete('CASCADE');
  });*/


});

// Run the whole thing.
createSchema()
.then()
.finally(() => knex.destroy());



consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);
  
  module.exports = app;