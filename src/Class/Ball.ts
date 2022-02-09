import { friction, gravity } from "../features/config";
import Scene from "./Scene";

export class Ball {
  x: number;
  y: number;
  dy: number;
  dx: number;
  radius: number;
  color: string;
  
  /**
   *
   * @param { Number } x X coordonate
   * @param { Number } y Y coordonate
   * @param { Number } radius Ball radius
   * @param { String } color ball color
   */
  public constructor(x:number, y:number, dx:number, dy:number ,radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  /**
   * Draw the ball in the canvas
   * @param canvas { CanvasRenderingContext2D } canvas context
   */
  public draw = () => {
    Scene.context.beginPath();
    Scene.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    Scene.context.fillStyle = this.color;
    Scene.context.fill();
    Scene.context.stroke();
    Scene.context.closePath();
  };

  /**
   * Update the ball position
   * @param canvasContext Canvas context instance
   * @param canvas Canvas html element
   */
  public update = () => {
    if( this.y + this.radius + this.dy > Scene.canvas.height) {
      this.dy = -this.dy * friction
    } else {
      this.dy += gravity
    }
    if (this.x + this.radius > Scene.canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }


    this.x += this.dx
    this.y += this.dy;
    this.draw();
  };
}
