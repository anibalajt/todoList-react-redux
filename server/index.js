import express from "express";
import bodyParser from "body-parser";
import config from "./config";
import api from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", api);

app.listen(config.port, () => {
  console.log(`API REST corriendo en http://localhost:${config.port}`);
});
