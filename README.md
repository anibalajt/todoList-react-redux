
## Installation
```
git clone https://github.com/anibalajt/todoList-react-redux.git
yarn i // install all dependencies
```
## DataBase
open `./bd/todo.sql`
import database in MySQL

## ClientRedux

open `./clientRedux `

```
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
yarn start
```

Open [http://localhost:3001](http://localhost:3001) 

`./server/config.jsp`

```
module.exports = {
  port: 3001, //port api
  database: "todo",
  host: "localhost",
  user: "root",
  password: "password",
};
```


## Clientgraphql

open `./clientgraphql `

```
yarn start
```

