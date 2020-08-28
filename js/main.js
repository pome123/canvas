"use strict";

// JSONファイルの読み込み
const file = "json/figure.json";
let figure;

const request = new XMLHttpRequest();

request.open("get", file, false); //ファイルオープン : 同期モード
request.onload = function () {
  try {
    figure = JSON.parse(this.responseText); //JSON型でパース。
  } catch (e) {
    alert("読み込み失敗");
  }
};
request.send(null); //ここで読込実行。

console.log(figure);

/************
    正方形
 ************/
// 正方形の頂点のデータ
const square = figure.square;

// 正方形を描画するエリア
const canvasSquare = document.getElementById("canvasSquare");

// Canvas要素取得
const csSquare = document.createElement("canvas");
const ctxSquare = csSquare.getContext("2d");

// 正方形作成
ctxSquare.strokeRect(square.x, square.y, square.width, square.height);

// HTMLに作成した正方形追加
canvasSquare.appendChild(csSquare);

console.log(ctxSquare);

/************
    三角形
 ************/
// 三角形の頂点のデータ
const triangle = figure.triangle;

// 三角形を描画するエリア
const canvasTriangle = document.getElementById("canvasTriangle");

// Canvas要素取得
const csTriangle = document.createElement("canvas");
const ctxTriangle = csTriangle.getContext("2d");

ctxTriangle.beginPath();
ctxTriangle.moveTo(triangle.moveToX, triangle.moveToY);
for (let i = 0; i < triangle.positions.length; i++) {
  ctxTriangle.lineTo(triangle.positions[i].x, triangle.positions[i].y);
}
ctxTriangle.closePath();
ctxTriangle.fill();

// HTMLに作成した三角形追加
canvasTriangle.appendChild(csTriangle);

console.log(ctxTriangle);

/************
    L字型
 ************/
// L字型の頂点のデータ
const polygon = figure.polygon;

// L字型を描画するエリア
const canvasPolygonL = document.getElementById("canvasPolygonL");

// Canvas要素取得
const csPolygon = document.createElement("canvas");
const ctxPolygon = csPolygon.getContext("2d");

ctxPolygon.fillStyle = "rgba(0, 255, 0, .5)";
ctxPolygon.beginPath();
ctxPolygon.moveTo(polygon.moveToX, polygon.moveToY);
ctxPolygon.lineTo(polygon.corner1X, polygon.corner1Y);
ctxPolygon.lineTo(polygon.corner2X, polygon.corner2Y);
ctxPolygon.lineTo(polygon.corner3X, polygon.corner3Y);
ctxPolygon.lineTo(polygon.corner4X, polygon.corner4Y);
ctxPolygon.lineTo(polygon.corner5X, polygon.corner5Y);
ctxPolygon.closePath();
ctxPolygon.fill();

// HTMLに作成したL字型追加
canvasPolygonL.appendChild(csPolygon);

console.log(ctxPolygon);
