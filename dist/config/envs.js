"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnv = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
// import dotenvExpand from 'dotenv-expand';
function loadEnv() {
    var path = process.env.NODE_ENV === 'test'
        ? '.env.test'
        : process.env.NODE_ENV === 'development'
            ? '.env.development'
            : '.env';
    var currentEnvs = dotenv_1.default.config({ path: path });
    //   dotenvExpand.expand(currentEnvs);
}
exports.loadEnv = loadEnv;
