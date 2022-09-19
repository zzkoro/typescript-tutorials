import { IShape } from "./IShape";

export const calcArea = (shape: IShape): number => {

  switch(shape.tag) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.height * shape.width;
    case 'circle':
      return Math.PI * shape.radius * shape.radius
  }
  return 0;
}