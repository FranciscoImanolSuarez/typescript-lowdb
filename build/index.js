"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
(0, db_1.createConnection)();
app_1.default.listen(app_1.default.get('PORT'));
console.log("Server listening on port 3000");
