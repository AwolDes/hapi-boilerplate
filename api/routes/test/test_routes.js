import Knex from "../../knex";
import server from "../../server";

let test_routes = [
  {
    path: "/",
    method: "GET",
    handler: (request, reply) => {
      reply({
        hello: "world"
      })
    }
  },
  {
    path: "/hello/{user_id}",
    method: "GET",
    handler: (request, reply) => {

      const { user_id } = request.params;
      reply({
        hello: user_id
      })

      // Knex handles SQL queries with your DB like this!
      // In general, the Knex operation is like Knex("TABLE_NAME").where(...).chainable(...).then(...)
      // const getOperation = Knex("Waypoint").where({
      //
      //   user_id: user_id
      //
      // }).select().then((results) => {
      //
      //   if (!results || results.length === 0) {
      //
      //     reply({
      //
      //       error: true,
      //       errMessage: "no route found",
      //
      //     });
      //
      //   }
      //
      //   reply({
      //
      //     data_length: results.length,
      //     data: results,
      //
      //   });
      //
      // }).catch((err) => {
      //
      //   reply(err);
      //
      // });
    }
  }
];

export default test_routes;