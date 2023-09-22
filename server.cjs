const express = require('express');
const cors = require('cors') //react app runs at port 3000 but nodemon is running at 8080 so as the ports are different they cannot communicate that gives a cors error so to resolve it we need to use cors dependencies 
const path=require('path');
const bodyParser = require('body-parser')   //used to parse req body
const mongoose = require('mongoose')

const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  username: String,
  email:String,
  password: String,
  age: Number,
  aadhaarCard: String
});

const  User = mongoose.model("User", userSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Serve static files from the "client/build" directory
// app.use(express.static("./src/components"));

// const apiRoutes = require("./routes/api");
// app.use("/api", apiRoutes);


// // All other requests will be served the React app

// CRUD-create
app.post("/", async (req, res) => {
    let user = new User();
    user.username=req.body.username;
    user.password=req.body.password;
    user.email=req.body.email;
    user.aadhaarCard=req.body.aadhaarCard;
    user.age=req.body.age;

     
    // const doc=
    await user.save();
    // res.json(doc);
    // console.log(doc);
    // res.send("helljjjjo");
});

app.get("/",async (req,res)=>{
  const docs = await User.find({});
  res.json(docs)

})


// console.log(path.join(__dirname, "./index.html"));



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
