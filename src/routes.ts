import { Router } from "express";
import uploadMulter from "./util/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { SessionUserController } from "./controllers/user/SessionUserController";
import { AuthenticatedMiddleware } from "./middlewares/AuthenticatedMiddleware";
import multer from "multer";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemOrderController } from "./controllers/order/RemoveItemOrderController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderItemsController } from "./controllers/order/ListOrderItemsController";
import { GetDetailOrderController } from "./controllers/order/GetDetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const createUserController = new CreateUserController();
const sessionUserController = new SessionUserController();
const detailUserController = new DetailUserController();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const createProductController = new CreateProductController();
const listProductByCategoryController = new ListProductByCategoryController();

const createOrderController = new CreateOrderController();
const removeOrderController = new RemoveOrderController();
const addItemController = new AddItemController();
const removeItemOrder = new RemoveItemOrderController();
const sendOrderController = new SendOrderController();
const listOrderItemsController = new ListOrderItemsController();
const getDetailOrders = new GetDetailOrderController();
const finishOrderController = new FinishOrderController();

const router = Router();
const upload = multer(uploadMulter.upload("./tmp"));

router.post("/users", createUserController.handle);
router.post("/sessions", sessionUserController.handle);
router.get("/me", AuthenticatedMiddleware, detailUserController.handle);

router.post(
  "/category",
  AuthenticatedMiddleware,
  createCategoryController.handle
);
router.get("/category", AuthenticatedMiddleware, listCategoryController.handle);

router.post(
  "/product",
  AuthenticatedMiddleware,
  upload.single("banner_url"),
  createProductController.handle
);

router.get(
  "/category/product",
  AuthenticatedMiddleware,
  listProductByCategoryController.handle
);

router.post("/order", AuthenticatedMiddleware, createOrderController.handle);
router.delete("/order", AuthenticatedMiddleware, removeOrderController.handle);
router.post("/order/add", AuthenticatedMiddleware, addItemController.handle);
router.delete("/order/remove", AuthenticatedMiddleware, removeItemOrder.handle);
router.put("/order/send", AuthenticatedMiddleware, sendOrderController.handle);
router.get("/order", AuthenticatedMiddleware, listOrderItemsController.handle);
router.get("/order/detail", AuthenticatedMiddleware, getDetailOrders.handle);
router.put(
  "/order/finish",
  AuthenticatedMiddleware,
  finishOrderController.handle
);

export { router };
