"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sql_1 = __importDefault(require("../sql"));
function create(Brand) {
    sql_1.default.query('INSERT INTO Brand(name)');
}
function findAll() {
    sql_1.default.query('SELECT * FROM Brand');
}
