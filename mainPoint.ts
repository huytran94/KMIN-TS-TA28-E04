import { questionInt } from "readline-sync";
import Point2D from "./Point2D";

const mainPoint = () => {
  let point: Point2D = new Point2D();
  console.log(`X = ${point.x}, Y = ${point.y}`);

  point.scan();
  point.print();

  //   move
  let dx: number = questionInt("Enter x to move: ");
  let dy: number = questionInt("Enter y to move: ");
  
  point.move(dx, dy);
  console.log(`Point coordinate after move: `);
  point.print();

  let newPoint = new Point2D(1, 2);
  //   get distance
  let d: number = point.getDistance(newPoint);
  console.log(`Distance between 2 points: ${d}`);

  // test private method
  point.x = 1;
  point.y = 2;

  // use getter and setter
  point.x = 1;
  point.y = 2;
  console.log(`New point are: ${point.x}, ${point.y}`);
};

mainPoint();
