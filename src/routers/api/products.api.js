import CustomRouter from "../CustomRouter.js";
import { create, read, paginate, readOne, update, destroy } from "../../controllers/products.controller.js";
//import productsManager from "../../data/mongo/manager/ProductsManager.mongo.js"
import isValidAdmin from "../../middlewares/isValidAdmin.mid.js";


// se cambio el ["ADMIN"] de create, update, destroy, por ["PUBLIC"] para realizar pruebas en Fs, además de comentar el middleware isvalidAdmin
class ProductsRouter extends CustomRouter {
    init() {
        this.read("/", ["PUBLIC"], read);
        this.read("/paginate", ["PUBLIC"], paginate);
        this.read("/:pid", ["PUBLIC"], readOne);
        this.create("/", ["ADMIN"], isValidAdmin, create );
        this.update("/:pid", ["ADMIN"], update);
        this.destroy("/:pid", ["ADMIN"], destroy);
    }
}

const productsRouter = new ProductsRouter();
export default productsRouter.getRouter();




