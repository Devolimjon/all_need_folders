"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../service/user.service"));
const router = (0, express_1.Router)();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = {
        id: 0,
        name: req.body.name,
        age: req.body.age,
        username: req.body.username,
        password: req.body.password
    };
    yield user_service_1.default.addUser(user);
    let { password } = user, newUser = __rest(user, ["password"]);
    res.json({
        message: 'Register successful!',
        user: newUser
    });
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, password } = req.body;
    let user = yield user_service_1.default.findUser(username);
    if (user == undefined) {
        return res.status(404).json({
            message: 'user with username: ' + username + ' not found.'
        });
    }
    if (user.password === password) {
        return res.json({
            message: 'Login successfuly'
        });
    }
    else {
        res.status(401).json({
            message: 'Do`g`ri Yoz, uxlatjak boma bizani, biza moshni!'
        });
    }
}));
exports.default = router;
