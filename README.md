
## Installation
```
git clone https://github.com/anibalajt/todoList-react-redux.git
```
## BD
open ./bd/todo.sql, import database in MySQL

## Client

open ./clientRedux 

```
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
module.exports = {
  api: `http://localhost:3001/api/` // port api 
};
```

## Server

open ./server

```
yarn install
yarn start
```

Open [http://localhost:3001](http://localhost:3001) 

./server/config.js

```
module.exports = {
  port: 3001, //port api
  database: "todo",
  host: "localhost",
  user: "root",
  password: "password",
};
```


