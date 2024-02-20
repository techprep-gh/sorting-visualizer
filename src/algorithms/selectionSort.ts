import { AnimationArrayType } from "@/lib/types";

function runSelectionSort(array: number[], animations: AnimationArrayType) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([[j, i], false]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    animations.push([[i, array[minIndex]], true]);
    animations.push([[minIndex, array[i]], true]);
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}

export function generateSelectionSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runSelectionSort(auxiliaryArray, animations);
  runAnimation(animations);
}
