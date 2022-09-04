import { Bird, Fish } from "./BirdAndFish";
import { isFlyable } from "./isFlyable";
import { isSwimmable } from "./isSwimmable";

export const flyOrSwim = (o: Bird | Fish): void => {
  if (o instanceof Bird) {
    o.fly()
  } else if (o instanceof Fish) {
    o.swim()
  }
}

export const swimOrFly = (o: Bird | Fish) => {
  if (isSwimmable(o))
    o.swim()
  else if (isFlyable(o))
    o.fly()
}