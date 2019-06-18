import { Canvas2D } from "./canvas2d/Canvas2D";
// 调用Canvas2DUtil类，绘制居中对齐的文字
var canvas = document.getElementById('canvas');
if (canvas === null) {
    alert("无法获取HTMLCanvasElement !!! ");
    throw new Error("无法获取HTMLCanvasElement !!! ");
}
var canvas2D = new Canvas2D(canvas);
canvas2D.drawText("Hello World From Module");
