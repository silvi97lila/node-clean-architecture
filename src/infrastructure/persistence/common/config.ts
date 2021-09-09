/* eslint-disable prettier/prettier */
module.exports =  {
    development: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'root',
       database: 'test',
    },
    testing: {
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test_test',
   }
 }
