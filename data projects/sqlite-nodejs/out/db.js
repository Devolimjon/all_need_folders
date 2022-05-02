"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
let filename = path_1.default.join(__dirname + '/../db/dev.db');
console.log(filename);
let db = new sqlite3_1.default.Database(filename, (err) => {
    if (err) {
        console.log('Error on connection: ', err);
    }
});
const run = util_1.default.promisify(db.run);
const get = util_1.default.promisify(db.get);
const all = util_1.default.promisify(db.all);
db.run = run;
db.get = get;
db.all = all;
exports.default = db;
