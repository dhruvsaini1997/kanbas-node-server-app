import HelloRoutes from "./hello.js";
import express from "express";
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import "dotenv/config";
import session from "express-session";


const app = express();
app.use(cors())
app.use(express.json());
Lab5(app)
HelloRoutes(app)
CourseRoutes(app);
ModuleRoutes(app)
// app.listen(4000);
app.listen(process.env.PORT || 4000);