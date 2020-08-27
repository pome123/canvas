"use strict";
// Canvasを描画するエリア
const canvasSquare = document.getElementById("canvasSquare");

// Canvas要素取得
const csSquare = document.createElement("canvas");
const ctxSquare = csSquare.getContext("2d");

// 正方形作成
ctxSquare.strokeRect(0, 0, 100, 100);
ctxSquare.fillRect(150, 0, 100, 100);

// HTMLに作成した正方形追加
canvasSquare.appendChild(csSquare);

console.log(csSquare);
console.log(ctxSquare);
