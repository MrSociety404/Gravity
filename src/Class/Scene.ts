export class Scene {
  canvas: HTMLCanvasElement;
  c: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.querySelector<HTMLCanvasElement>("#canvas");
    this.c = this.canvas.getContext("2d");
  }
}
