import {Direction} from "./constants/Direction";

function getXCoord(event: TouchEvent) {
  return event.touches[0].clientX;
}

function getYCoord(event: TouchEvent) {
  return event.touches[0].clientY;
}

export function calculateSwipeDirection(start: TouchEvent, end: TouchEvent): Direction {
  const startX = getXCoord(start);
  const startY = getYCoord(start);
  const endX = getXCoord(end);
  const endY = getYCoord(end);
  const diffX = endX - startX;
  const diffY = endY - startY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    return diffX > 0 ? Direction.RIGHT : Direction.LEFT;
  }

  return diffY > 0 ? Direction.DOWN : Direction.UP;
}

