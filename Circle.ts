import { questionInt } from "readline-sync";
import Point2D from "./Point2D";

class Circle {
  private _center: Point2D;
  private _radius: number;

  constructor(center: Point2D, radius: number) {
    this._center = new Point2D(center.x, center.y);
    this._radius = radius;
  }

  public get center() {
    return this._center;
  }

  public set center(center: Point2D) {
    this._center = new Point2D(center.x, center.y);
  }

  public get radius() {
    return this._radius;
  }

  public set radius(radius: number) {
    this._radius = radius;
  }

  public scan(): void {
    this._center.scan();
    this._radius = questionInt("Enter radius: ");
  }

  public getArea(): number {
    return Number((Math.PI * this._radius * this._radius).toFixed(2));
  }

  public getPerimeter(): number {
    return Number((Math.PI * this._radius * 2).toFixed(2));
  }

  public move(dx: number, dy: number): void {
    this._center.x += dx;
    this._center.y += dy;
  }

  public print(): void {
    console.log(`Circle center: ${this._center.x}, ${this._center.y}`);
    console.log(`Radius = ${this._radius}`);
  }
}

export default Circle;
