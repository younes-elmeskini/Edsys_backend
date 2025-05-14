const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 7856;
const cors = require("cors");
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
  })
);

app.disable("x-powered-by"); 

const helmet = require("helmet");
app.use(helmet());
app.set("trust proxy", 1);
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});

app.use(limiter);

// const userRoutes = require("./routes/userRoutes");


app.use(express.json());
// app.use("/user", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
