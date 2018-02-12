import express from "express";
import bodyParser from "body-parser";
import config from "./config";
import api from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", api);

app.listen(config.port, () => {
  console.log(`API REST corriendo en http://localhost:${config.port}`);
});
