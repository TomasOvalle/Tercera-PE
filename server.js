import environment from "./src/utils/env.util.js";
import express from "express"
import morgan from "morgan";
import cookieParser from "cookie-parser";

import argsUtil from "./src/utils/args.util.js";

import indexRouter from "./src/routers/index.router.js"
import errorHandler from "./src/middlewares/errorHandler.mid.js"
import pathHandler from "./src/middlewares/pathHandler.mid.js"
import __dirname from "./utils.js"
//import dbConnect from "./src/utils/dbConnect.util.js";

console.log("Todas las variables de entorno " + process.env);
console.log(process.env.MONGO_URI);

//http server
const server = express();
const port = environment.PORT || argsUtil.p;
const ready = async () => {
    //console.log("Server ready on port " + port);
    //await dbConnect();
}
server.listen(port, ready);

// middlewares
server.use(express.json());
server.use(express.urlencoded({extended: true }));
server.use(express.static(__dirname + "/public"))
server.use(morgan("dev"));
server.use(cookieParser(environment.SECRET_COOKIE));

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);

