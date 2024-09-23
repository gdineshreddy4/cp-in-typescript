function factorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

console.log("factorial of 5 is",factorial(5));

// terminal command to run in project root to run the above code
//ts-node src/recursionProblems/factorialOfN.ts


