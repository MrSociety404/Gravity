import { Ball } from "./Ball";
import { Scene } from "./Scene";

export class Game {
  scene = new Scene();
  private balls: Ball[];

  public constructor() {}

  /**
   * Start the game
   */
  public start(): void {
    this.generate();
    this.animate();
  }

  /**
   * Generate new balls
   */
  private generate(): void {
    this.balls = [];
    for (let i = 0; i < 4; i++) {
      this.balls.push(new Ball(1, 2, 2, "red"));
    }
  }

  /**
   * Start the animation frame rate
   */
  private animate = (): void => {
    // clear the scene
    requestAnimationFrame(this.animate);
    this.scene.c.clearRect(
      0,
      0,
      this.scene.canvas.width,
      this.scene.canvas.height
    );

    // Update balls
    this.balls.forEach((ball) => {
      ball.update();
    });
  };
}
