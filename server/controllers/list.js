var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost", // ip address of server running mysql
  user: "root", // user name to your mysql database
  password: "123456", // corresponding password
  database: "todo" // use the specified database
});

export const loadItems = (req, res) => {
  let r = con.connect(function(err) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `SELECT * FROM list`;
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log(result)
      return res.status(201).send(result);
    });
  });
};
export const addItem = (req, res) => {
  const text = req.body.text;

  let r = con.connect(function(err) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Insert into list (text) values ('${text}');`;
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      return res.status(201).send({ id: result.insertId });
    });
  });
};
export const editItem = (req, res) => {
  const text = req.body.text;
  const id = req.body.id;

  con.connect(function(err) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Update list SET text = '${text}' WHERE id = '${id}';`;
    console.log(query);
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      return res.status(201).send({ ok: true });
    });
  });

  // return res.status(201).send(state);
};
export const deleteItem = async (req, res) => {
  const id = req.query.id;

  con.connect(function(err) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Delete from list WHERE id = '${id}';`;

    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log(result);
      return res.status(201).send({ ok: true });
    });
  });
};
export const completedItem = (req, res) => {
  const id = req.query.id;
  const completed = req.query.completed;

  con.connect(function(err) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Update list SET completed = ${completed}' WHERE id = '${id}';`;
    console.log(query);
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      return res.status(201).send({ ok: true });
    });
  });
};

export const clearCompleted = async (req, res) => {
  var query = `Delete from list WHERE completed = true;`;

  con.query(query, (err, result, fields) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log(result);
    return res.status(201).send({ ok: true });
  });
};
