import { questionInt } from "readline-sync";
/**
 * Represent a 2D Point in X,Y
 * @date 1/17/2024 - 7:50:02 PM
 *
 * @class Point2D
 * @typedef {Point2D}
 */
class Point2D {
  /**
   * Coordinate x
   * @date 1/17/2024 - 7:50:02 PM
   *
   * @type {number}
   */
  private _x: number;
  
  /**
   * Coordinate y
   * @date 1/17/2024 - 7:50:02 PM
   *
   * @type {number}
   */
  private _y: number;

  /**
   * Creates an instance of Point2D.
   * @date 1/17/2024 - 7:50:02 PM
   *
   * @constructor
   * @param {number} [x=0]
   * @param {number} [y=0]
   */
  constructor(x: number = 0, y: number = 0) {
    this._x = x;
    this._y = y;
  }

  /**
   * getter for x
   * @date 1/17/2024 - 8:10:10 PM
   *
   * @public
   * @type {number}
   */
  public get x(): number {
    return this._x;
  }
  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }
  public set y(value: number) {
    this._y = value;
  }

  /**
   * Scan x and y for a point
   * @date 1/17/2024 - 7:50:02 PM
   */
  scan(): void {
    this._x = questionInt("Enter x: ");
    this._y = questionInt("Enter y: ");
  }

  /**
   * Print point's coordinate
   * @date 1/17/2024 - 7:50:02 PM
   */
  print(): void {
    console.log(`X = ${this._x}, Y = ${this._y}`);
  }

  /**
   * Move a point with certain distance
   * @date 1/17/2024 - 7:50:02 PM
   *
   * @param {number} dx
   * @param {number} dy
   */
  move(dx: number, dy: number): void {
    this._x += dx;
    this._y += dy;
  }

  /**
   * Calculate distance between current point and another point
   * @date 1/17/2024 - 7:50:02 PM
   *
   * @param {Point2D} point
   * @returns {number}
   */
  getDistance(point: Point2D): number {
    return Number(
      Math.sqrt(
        Math.pow(this._x - point._x, 2) + Math.pow(this._y - point._y, 2)
      ).toFixed(2)
    );
  }
}

export default Point2D;
