class Scene {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.querySelector<HTMLCanvasElement>("#canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }
}

export default new Scene();