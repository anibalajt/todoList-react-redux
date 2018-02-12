
# `Installation`
```
git clone https://github.com/anibalajt/todoList-react-redux.git
```


# `Client`

open ./clientRedux 

```
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
module.exports = {
  api: `http://localhost:3001/api/`
};
```

# `Server`

open ./server

```
yarn install
yarn start
```

Open [http://localhost:3001](http://localhost:3001) 

## ./server/config.js

```
module.exports = {
  port: process.env.PORT || 3001,
  database: "todo",
  host: "localhost",
  user: "root",
  password: "password",
};
```


