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
// 三角形を描画するエリア
const canvasTriangle = document.getElementById("canvasTriangle");

// Canvas要素取得
const csTriangle = document.createElement("canvas");
const ctxTriangle = csTriangle.getContext("2d");

ctxTriangle.beginPath();
ctxTriangle.moveTo(50, 50);
ctxTriangle.lineTo(300, 0);
ctxTriangle.lineTo(300, 150);
ctxTriangle.closePath();
ctxTriangle.fill();

// HTMLに作成した正方形追加
canvasTriangle.appendChild(csTriangle);

console.log(ctxTriangle);
