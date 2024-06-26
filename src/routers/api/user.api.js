import CustomRouter from "../CustomRouter.js";
//import usersManager from "../../data/mongo/manager/UsersManager.mongo.js"
import { create, read, readByEmail, readOne, update, destroy } from "../../controllers/users.controller.js";

//Se cambio todos los ["USER"] por ["PUBLIC"], para realizar las pruebas de Fs
class UsersRouter extends CustomRouter {
    init() {
        this.create("/", ["USER"], create);
        this.read("/", ["USER"], read);
        this.read("/:email(.+@.+\..+)", ["USER"], readByEmail);
        this.read("/:uid([a-f0-9]{24})", ["USER"], readOne);
        this.update("/:uid", ["USER"], update);
        this.destroy("/:uid", ["USER"], destroy);
    }
}

const usersRouter = new UsersRouter();
export default usersRouter.getRouter();

