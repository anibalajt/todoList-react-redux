import mysql from "mysql";
import config from "../config";
var con = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

export const loadItems = (req, res) => {
  let r = con.getConnection(function(err, connection) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `SELECT * FROM list ORDER BY id DESC`;
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      connection.release();
      return res.status(201).send(result);
    });
  });
};
export const addItem = (req, res) => {
  const text = req.body.text;

  let r = con.getConnection(function(err, connection) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Insert into list (text) values ('${text}');`;
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      connection.release();
      return res.status(201).send({ id: result.insertId });
    });
  });
};
export const editItem = (req, res) => {
  const text = req.body.text;
  const id = req.body.id;

  con.getConnection(function(err, connection) {
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
      connection.release();
      return res.status(201).send({ data: true });
    });
  });

  // return res.status(201).send(state);
};
export const deleteItem = async (req, res) => {
  const id = req.query.id;

  con.getConnection(function(err, connection) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Delete from list WHERE id = '${id}';`;

    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      connection.release();
      return res.status(201).send({ data: true });
    });
  });
};
export const toggleAll = (req, res) => {
  const completed = req.query.completed;

  con.getConnection(function(err, connection) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Update list SET completed = ${completed};`;
    console.log(query);
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      connection.release();
      return res.status(201).send({ data: true });
    });
  });
};
export const completedItem = (req, res) => {
  const id = req.query.id;
  const completed = req.query.completed;

  con.getConnection(function(err, connection) {
    if (err) {
      console.log("err: ", err);
    }
    var query = `Update list SET completed = ${completed} WHERE id = ${id};`;
    console.log(query);
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      connection.release();
      return res.status(201).send({ data: true });
    });
  });
};

export const clearCompleted = async (req, res) => {
  var query = `Delete from list WHERE completed = true;`;
  con.getConnection(function(err, connection) {
    if (err) {
      console.log("err: ", err);
    }
    con.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        return false;
      }
      connection.release();
      return res.status(201).send({ data: true });
    });
  });
};
