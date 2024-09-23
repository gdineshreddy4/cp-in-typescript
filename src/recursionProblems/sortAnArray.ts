function arrSort(arr: number[]) {
  if (arr.length === 0) {
    return;
  }
  if (arr.length === 1) {
    return arr[0]; // simple return is also enough
  }
  const lastElement = arr.pop() as number;
  arrSort(arr);
  insertLastElement(arr, lastElement);
}

function insertLastElement(arr: number[], lastElement: number) {
  if (arr.length === 0 || lastElement > arr[arr.length - 1]) {
    arr.push(lastElement);
    return;
  }
  const lastSortedElement = arr.pop() as number;
  insertLastElement(arr, lastElement);
  arr.push(lastSortedElement);
}
const arr: number[] = [2, 3, 5, 6, 4, 9,7];

console.log(`given arr is`, arr);
arrSort(arr);
console.log("sorted arr=", arr);


// ts-node src/recursionProblems/sortAnArray.ts