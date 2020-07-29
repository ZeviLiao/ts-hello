"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var p = new point_1.Point(1, 2);
p.draw();
p.x = 12;
var x = p.x;
console.log(x);
