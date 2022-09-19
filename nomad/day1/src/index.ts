import { IValuable, printValueT } from "./printValueT"
import { Valuable } from "./Valuable"
import { spLog } from "./log"

printValueT(new Valuable(1))
printValueT({value: true})

spLog()

import { create } from "./create"
class Point {
  constructor(public x: number, public y: number) {}
}

[
  create(Date),
  create(Point, 0, 0),
]
.forEach(s => console.log(s))

spLog()

import { pick } from "./pick"
const obj = {name: 'Jane', age: 22, city: 'Seoul', country: 'Korea'}
console.log(
  pick(obj, ['name', 'age']),
  pick(obj, ['name', 'age']),
)

spLog()

import { mergeObjects } from "./mergeObjects"
type INameable = {name: string}
type IAgeable = {age: number}

const nameAndAge: INameable & IAgeable = mergeObjects({name: 'Jack'}, {age: 32})
console.log(nameAndAge)

spLog()

import { calcArea } from "./calcArea"
import { IRectangle, ICircle, ISquare } from "./IShape"

const square: ISquare = {tag: 'square', size: 10}
const rectangle: IRectangle = {tag: 'rectangle', width: 4, height: 5}
const circle: ICircle = {tag: 'circle', radius: 10}

console.log(calcArea(square), calcArea(rectangle), calcArea(circle))


spLog()

import { Bird, Fish } from "./BirdAndFish"
import { swimOrFly } from "./flyOrSwim"

[new Bird, new Fish].forEach(swimOrFly)