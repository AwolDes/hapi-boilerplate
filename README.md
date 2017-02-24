# hapi-boilerplate
An opinionated boilerplate for NodeJS Hapi framework for a REST API

# How To

* `npm install|i` to install packages
* `npm run dev|prod` for envrionments
* Navigate to `http://localhost:8080` to consume the API
* Edit both `knexfile.js` & `api/knex.js` with database information.

# Boilerplate Info

* Test routes are on `/` and `/hello/{param}`
* The boilerplate uses (Knex)[http://knexjs.org/] to structure SQL queries
* The file structure is fairly simple
    * `api`
        * `[route object (e.g users, payments]`
            * `[directory name]_routes.js` e.g `users_routes.js`

# TODO

- [ ] Add Auth logic into boilerplate using passport.js
