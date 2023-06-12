"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
// export function init(): Promise<Express> {
//     connectDb();
//     return Promise.resolve(app);
//   }
app.get('helth', function (req, res) {
    res.status(200).send("Ok!");
});
exports.default = app;
