# Blog API

A Restful API used to manage blog posts, where you can create, delete, update and read users and blogs posts.

## Developed with
- JavaScript
- Node.js
- Express
- MySQL
- Sequelize
- Docker

## Installation
```sh
# clone this repo
  git clone https://github.com/bbrunoamorim/blogs-api

# start Docker Compose
  docker-compose up -d

# enter the container
  docker exec -it blogs_api bash

# install dependencies
  npm i
  
# create and populate database
  npm run prestart && npm run seed
  
# start the server
  npm run debug
```