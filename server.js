
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const routes = require("./routes");


// Init Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());


app.get("/", function (req, res) {
  res.json("TEST");
});

app.use(routes);


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

