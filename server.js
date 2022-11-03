const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


//importing the profile route
const profileRoutes = require("./routes/profile");

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5001;

//app.get('/ping', (req, res) => res.send('pong'))

//using the route
app.use("/", profileRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db Connected"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
