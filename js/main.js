"use strict";
/************
    正方形
 ************/
// 正方形を描画するエリア
const canvasSquare = document.getElementById("canvasSquare");

// Canvas要素取得
const csSquare = document.createElement("canvas");
const ctxSquare = csSquare.getContext("2d");

// 正方形作成
ctxSquare.strokeRect(0, 0, 100, 100);
ctxSquare.fillRect(150, 0, 100, 100);

// HTMLに作成した正方形追加
canvasSquare.appendChild(csSquare);

console.log(ctxSquare);

/************
    三角形
 ************/
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

/************
    多角形
 ************/
// 多角形を描画するエリア
const canvasPolygon = document.getElementById("canvasPolygon");

// Canvas要素取得
const csPolygon = document.createElement("canvas");
const ctxPolygon = csPolygon.getContext("2d");

ctxPolygon.fillStyle = "rgba(0, 255, 0, .5)";
ctxPolygon.beginPath();
ctxPolygon.moveTo(0, 0);
ctxPolygon.lineTo(0, 150);
ctxPolygon.lineTo(300, 150);
ctxPolygon.lineTo(300, 100);
ctxPolygon.lineTo(50, 100);
ctxPolygon.lineTo(50, 0);
ctxPolygon.closePath();
ctxPolygon.fill();

// HTMLに作成した正方形追加
canvasPolygon.appendChild(csPolygon);

console.log(ctxPolygon);
