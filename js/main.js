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
ctxSquare.beginPath();
ctxSquare.moveTo(square.moveToX, square.moveToY);
for (let i = 0; i < square.positions.length; i++) {
  ctxSquare.lineTo(square.positions[i].x, square.positions[i].y);
}
ctxSquare.closePath();
ctxSquare.fill();

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

// 三角形作成
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
const polygonL = figure.polygonL;

// L字型を描画するエリア
const canvasPolygonL = document.getElementById("canvasPolygonL");

// Canvas要素取得
const csPolygonL = document.createElement("canvas");
const ctxPolygonL = csPolygonL.getContext("2d");

// L字型作成
ctxPolygonL.fillStyle = "rgba(0, 255, 0, .5)";
ctxPolygonL.beginPath();
ctxPolygonL.moveTo(polygonL.moveToX, polygonL.moveToY);
for (let i = 0; i < polygonL.positions.length; i++) {
  ctxPolygonL.lineTo(polygonL.positions[i].x, polygonL.positions[i].y);
}
ctxPolygonL.closePath();
ctxPolygonL.fill();

// HTMLに作成したL字型追加
canvasPolygonL.appendChild(csPolygonL);

console.log(ctxPolygonL);

/************
    扇型風
 ************/
// 扇型の頂点のデータ
const sector = figure.sector;

// 扇型を描画するエリア
const canvasSector = document.getElementById("canvasSector");

// Canvas要素取得
const csSector = document.createElement("canvas");
const ctxSector = csSector.getContext("2d");

// 扇型作成
ctxSector.fillStyle = "rgba(255, 0, 0, .5)";
ctxSector.beginPath();
ctxSector.moveTo(sector.moveToX, sector.moveToY);
for (let i = 0; i < sector.positions.length; i++) {
  ctxSector.lineTo(sector.positions[i].x, sector.positions[i].y);
}
ctxSector.closePath();
ctxSector.fill();

// HTMLに作成した扇型追加
canvasSector.appendChild(csSector);

console.log(ctxSector);
