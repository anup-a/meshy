import { gradient } from "../../core";

export const resetCanvas = () => {
  const canvasEl = document.getElementById("gradient-canvas");
  //@ts-ignore
  canvasEl.width = 1024;
  //@ts-ignore
  canvasEl.height = 600;
  gradient.setCanvasSize(1024, 600);
  gradient.reGenerateCanvas();
};

export const changeCanvasSize = (width, height) => {
  const canvasEl = document.getElementById("gradient-canvas");
  console.log(canvasEl);
  //@ts-ignore
  canvasEl.width = width;
  //@ts-ignore
  canvasEl.height = height;

  gradient.setCanvasSize(width, height, false);
  gradient.reGenerateCanvas();
};
