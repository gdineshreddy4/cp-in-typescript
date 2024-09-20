function print(n: number): void {
  if (n === 1) {
    console.log(1);
    return;
  }
  print(n - 1);
  console.log(n);
}

print(5);

// terminal command to run in project root to run the above code
//ts-node src/recursionProblems/print1toN.ts
