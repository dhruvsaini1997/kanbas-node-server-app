// import HelloRoutes from "./hello.js";
// import express from "express";
// import Lab5 from "./Lab5.js"
// import cors from "cors";
// import CourseRoutes from "./courses/routes.js";
// import ModuleRoutes from "./modules/routes.js";
// import "dotenv/config";


// const app = express();
// app.use(cors())
// app.use(express.json());
// Lab5(app)
// HelloRoutes(app)
// CourseRoutes(app);
// ModuleRoutes(app)
// // app.listen(4000);
// app.listen(process.env.PORT || 4000);

// const express = require("express");
import session from "express-session";
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas-cs5610-fa23'
mongoose.connect(CONNECTION_STRING);
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas-cs5610-fa23");
import ModuleRoutes from "./modules/routes.js";
import CourseRoutes from "./courses/routes.js";
import "dotenv/config";
// import AssignmentsRoutes from "./assignments/routes.js";

const app = express();
app.use(
    cors({
      credentials: true,
      origin:'https://mellow-ganache-243aec.netlify.app'
    })
  );
  
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
    };
    if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
  
app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
// AssignmentsRoutes(app);
Lab5(app);
HelloRoutes(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);