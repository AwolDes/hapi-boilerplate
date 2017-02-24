export default require( "knex" )( {

  client: "mysql",
  connection: {

    host:   "db host ip",

    user: "username",
    password: "pass",

    database: "DB name",
    charset: "utf8"

  }

});