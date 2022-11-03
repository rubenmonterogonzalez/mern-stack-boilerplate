require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5001;



//importing the profile route
const profileRoutes = require("./routes/profile");
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')


app.use(cors());
app.use(express.json());


//using the route
app.use("/", profileRoutes);
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db Connected"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app
