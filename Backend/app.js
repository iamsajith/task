const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Data } = require("./datamodel")
const PORT = process.env.PORT || 5000

const app = new express();
app.use(cors());
app.use(express.json({ urlencoded: true }));

// Create
app.post("/user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  var userInfo = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
  };
  var user = new Data(userInfo);
  user.save();
  res.send();
});

// Fetch Data

app.get("/users", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  Data.find().then((data) => {
    console.log("All", data)
    res.send(data);
  });
});

// Update Data

app.put("/user/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  console.log(req.params.id)
  Data.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
      },
    },
    (err, Data) => {
      if (err) {
        res.send("Error While Updating");
      } else {
        res.send(Data);
      }
    }
  );
});

// Delete

app.delete('/user/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  Data.findOneAndDelete(req.params.id)
    .then(() => {
      console.log('success')
      res.send();
    })
})

app.get('/data/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  Data.findByIdAndUpdate(req.params.id).then((data)=>{
    res.send(data)
  })
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
