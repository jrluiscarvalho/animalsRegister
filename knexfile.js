module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'animalsregister',
      password: 'jun10r421'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'example'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
