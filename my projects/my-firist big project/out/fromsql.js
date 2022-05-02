"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var psd = 'postgres://postgres:12345@127.0.0.1:5432/psd';
var client = new pg_1.Pool({
    connectionString: psd
});
client.connect(function (err) {
    console.log(err ? err : 'Database is start');
});
exports.default = client;
