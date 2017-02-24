// DB details
module.exports = {

  development: {

    migrations: { tableName: "knex_migrations" },
    seeds: { tableName: "./seeds" },

    client: "mysql",
    connection: {

      host: "ip address",

      user: "user",
      password: "pass",

      database: "DB name",
      charset: "utf8"

    }

  }

};