"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ReceiptController_1 = require("../controllers/ReceiptController");
// import authMiddleware from '../middlewares/auth';
var routes = express_1.Router();
// routes.use(authMiddleware);
routes.get('/list', ReceiptController_1.index);
routes.post('/new', ReceiptController_1.create);
exports.default = routes;