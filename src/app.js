const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/test", (req, res) => {
  console.log("Server Is Called By Client");
  console.log(req.body.params.inputData);

  const {
    body: {
      params: { inputData },
    },
  } = req;

  console.log(inputData);
});

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START!!`);
});
