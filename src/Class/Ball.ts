import { Scene } from "./Scene";

const friction = 2;
const gravity = 2;

export class Ball {
  x: number;
  y: number;
  dy: number;
  dx: number;
  radius: number;
  color: string;
  scene = new Scene();
  /**
   *
   * @param { Number } x X coordonate
   * @param { Number } y Y coordonate
   * @param { Number } radius Ball radius
   * @param { String } color ball color
   */
  public constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  /**
   * Draw the ball in the canvas
   * @param canvas { CanvasRenderingContext2D } canvas context
   */
  public draw = () => {
    this.scene.c.beginPath();
    this.scene.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.scene.c.fillStyle = this.color;
    this.scene.c.fill();
    this.scene.c.stroke();
    this.scene.c.closePath();
  };

  /**
   * Update the ball position
   * @param canvasContext Canvas context instance
   * @param canvas Canvas html element
   */
  public update = () => {
    if (this.y + this.radius + this.dy > this.scene.canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    if (
      this.x + this.radius > this.scene.canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
