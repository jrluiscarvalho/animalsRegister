var pg = require('pg');

//DB Config
var config = {
  user: 'luis', //env var: PGUSER
  database: 'animalsregister', //env var: PGDATABASE
  password: 'jun10r421', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};