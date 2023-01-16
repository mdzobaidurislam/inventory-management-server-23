# E-Book

Server link: [Project server link](https://e-book-server.herokuapp.com/).

# Project Features:

- All Api routes ->

  - inventory routes

    1. get -> api/admin/inventory/:email -> Get all inventories when user log in
    2. get -> api/admin/items/:email -> Get all specefic item user
    3. get -> api/inventory/ -> Get all inventories for show the front end ui
    4. post -> api/inventory/ -> Add inventory in database when user log in and save user email in database becuse show inventories in My Items page
    5. delete -> api/inventory/:id/:email -> Delete inventory by id
    6. put -> api/inventory/:id/:email -> Update inventory by id
    7. get -> api/edit-inventory/:id/:email -> Edit inventory by id
    8. get -> api/inventory/:ById -> get inventory by id in front end ui single page
    9. put -> api/update-inventory/-> Update inventory by id then change quantiy and sold
    10. put -> api/restock-inventory/-> Update inventory by id then change quantiy

- user login routes token generator
  1. post -> api/login/ -> user generated routes token for verify user

* useing middileware jwt token secure api routes

* Blog api routes

1. get -> api/blog -> Get all articles
2. post -> api/blog -> Add blog articles in database
3. get -> api/blog/:id -> get blog articles in database with sepecific id

- Technologies use
  1.  cors
  2.  express js
  3.  mongoose
  4.  jsonwebtoken
  5.  dotenv
