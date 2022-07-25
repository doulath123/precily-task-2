require("dotenv").config();
require("./connection/database");
const express = require("express");
const bodyParser = require("body-parser");
const Data = require("./Models/quote");
const cors = require("cors");
const PORT = process.env.PORT | 5000;
const app = express();
let count = 0;
app.use(bodyParser.json());
app.use(cors());
app.post("/add", (req, res) => {
  count++;
  Data.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Cleared");
    }
  });
  let data = new Data(req.body);
  data.save((err, Data) => {
    if (err) {
      return res.json({
        error: "Unable to store the Data",
      });
    }
    return res.status(500).json({
      id: data._id,
      message: "Data added ",
    });
  });
});
app.post("/update", (req, res) => {
  count++;
  Data.findOneAndUpdate(
    { id: 1 },
    {
      $set: { data: req.body.newData },
    },
    { new: true },
    (err, data) => {
      if (err) {
        return res.json({
          message: "Unable to find the data",
        });
      } else {
        return res.json({
          message: "Updated Succesfully",
        });
      }
    }
  );
});
app.get("/count", (req, res) => {
  return res.json({
    count: count,
  });
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
