import { Canvas2D } from "./canvas2d/Canvas2D.js";
// 调用Canvas2DUtil类，绘制居中对齐的文字
let canvas: HTMLCanvasElement | null = document.getElementById('canvas') as HTMLCanvasElement;
if (canvas === null) {
    alert("无法获取HTMLCanvasElement !!! ");
    throw new Error("无法获取HTMLCanvasElement !!! ");
}
let canvas2D: Canvas2D = new Canvas2D(canvas);
canvas2D.drawText("Hello World From Module");