import { Canvas2D } from "./canvas2D/Canvas2D.js";
var canvas = document.getElementById('canvas');
if (canvas === null) {
    alert("无法获取HTMLCanvasElement !!! ");
    throw new Error("无法获取HTMLCanvasElement !!! ");
}
var canvas2D = new Canvas2D(canvas);
canvas2D.drawText("SystemJS");