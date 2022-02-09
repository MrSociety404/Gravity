import { colors } from "../features/config";
import { randomColor, randomIntRange } from "../features/utils";
import { Ball } from "./Ball";
import Scene from "./Scene";
export class Game {
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
    for (let i = 0; i < 100; i++) {
      const radius = randomIntRange(20,30);
      const x = randomIntRange(radius, Scene.canvas.width)
      const y = randomIntRange(0, Scene.canvas.height - radius - 200)
      const dy = randomIntRange(-2, 2)
      const dx = randomIntRange(-2,2)

      // Add balls to the list
      this.balls.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
    }    
  }

  /**
   * Start the animation frame rate
   */
  private animate = (): void => {
    // clear the scene
    requestAnimationFrame(this.animate);
    Scene.context.clearRect(0,0,Scene.canvas.width,Scene.canvas.height);

    // Update balls
    this.balls.forEach((ball) => {
      ball.update();
    });
  };
}
