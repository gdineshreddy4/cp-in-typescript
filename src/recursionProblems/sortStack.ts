import { Stack } from "../DataStructures/stack";


function arrSort(arr:  Stack<number>) {
    if (arr.size() === 0) {
      return;
    }
    if (arr.size() === 1) {
      return ;
    }
    const lastElement = arr.pop() as number;
    arrSort(arr);
    insertLastElement(arr, lastElement);
  }
  
  function insertLastElement(arr:  Stack<number>, lastElement: number) {
    if (arr.size() === 0 || lastElement > (arr.peek() as number)) {
      arr.push(lastElement);
      return;
    }
    const lastSortedElement = arr.pop() as number;
    insertLastElement(arr, lastElement);
    arr.push(lastSortedElement);
  }
  const arr: Stack<number> = new Stack<number>([2, 3, 5, 6, 4, 9,7]);
  
  console.log(`given stack is`, arr);
  arrSort(arr);
  console.log("sorted stack=", arr);
  
  
  // ts-node src/recursionProblems/sortStack.ts