import Circle from "./Circle";
import Point2D from "./Point2D";

const mainCircle = () => {
  // test circle
  let point = new Point2D();
  console.log("Update point");
  point.scan();
  console.log("After update, point info is: ");
  point.print();
  let newCircle = new Circle(point, 10);
  console.log("Created circle is: ");
  console.log(newCircle);

  // test scan circle
  console.log("Update circle");
  newCircle.scan();

  console.log("Circle info: ");
  // test newCircle
  newCircle.print();

  // print circle center
  console.log(`Circle center: (${newCircle.center.x}, ${newCircle.center.y})`);
  // update circle center
  newCircle.center = new Point2D(20, 30);
  console.log(
    `Circle center after updated: (${newCircle.center.x}, ${newCircle.center.y})`
  );

  // print circle radius
  console.log(`Circle radius: ${newCircle.radius}`);
  // update circle radius
  newCircle.radius = 17;
  console.log(`Circle radius after updated: ${newCircle.radius}`);
};

mainCircle();
