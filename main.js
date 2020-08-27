"use strict";
// Canvasを描画するエリア
const canvasArea = document.getElementById("canvasArea");

// Canvas要素取得
const cs = document.createElement("canvas");
const ctx = cs.getContext("2d");

cs.width = "600";
cs.height = "400";

// 正方形作成
ctx.strokeRect(0, 0, 100, 100);
ctx.fillRect(150, 0, 100, 100);

// HTMLに作成した正方形追加
canvasArea.appendChild(cs);

console.log(cs);
console.log(ctx);
