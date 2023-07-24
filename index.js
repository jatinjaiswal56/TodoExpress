const bodyparser = require('body-parser')
const express = require("express"); 
//for creating a http
const path = require("path");
const port = 8000;
const db = require("./config/mongoose");
const List = require("./models/List");
const app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));

app.use(express.static("assests"));



app.get("/", function (req, res) {
 
  List.find({})
  .then((x) => {
    return res.render("home", { title: "TODOLIST", List: x });
   
  })
  .catch((err) => {
    console.log("Error in getching Tasks!");
  });
  
});


app.post("/delete-task", function (req, res) {
  console.log("in del function");
  let id = req.body.id;
  
  List.findByIdAndDelete(id).then(() => {
      
    return res.redirect("back");
  })
  .catch((err) => {
    console.log("Error in creating a contact!");
  });
  
});

app.post("/create-task", function (req, res) {
  console.log("inside post");
  console.log(req.query);
  console.log(req.body.task);
  
  
  
  //   List.create({
  //     name: req.body.name,
  //     phone: req.body.name
  // }, function(err, newList){
  //     if(err){console.log('Error in creating a contact!')
  //         return;}
  //         console.log('******', newList);
  //         return res.redirect('back');
  // })
  List.create({ task: req.body.task}) 
    .then(() => {
      
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in creating a contact!");
    });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Port is running");
});
