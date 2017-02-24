import Hapi from "hapi";
import test_routes from "./routes/test/test_routes";

export const server = new Hapi.Server();

server.connection( {
  port: 8080
});

// For auth
server.register( require( "hapi-auth-jwt" ), ( err ) => {
  server.auth.strategy( "token", "jwt", {

  key: "vZiYpmTzqXMp8PpYXKwqc9ShQ1UhyAfy",

  verifyOptions: {
    algorithms: [ "HS256" ],
  }

} );

} );

// Lists multiple endpoints from a module in ./routes
for (let route in test_routes) {
  server.route(test_routes[route]);
}

server.start( err => {

  if( err ) {

    // Fancy error handling here
    console.error( "Error was handled!" );
    console.error( err );

  }

  console.log( `Server started at ${ server.info.uri }` );

} );