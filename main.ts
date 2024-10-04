const fart = add(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("Hello, world!", { fart });

export function add(...numbers: number[]) {
  return numbers.reduce((sum, n) => sum + n);
}

export function multiply(...numbers: number[]) {
  return numbers.reduce((sum, n) => sum * n, 1);
}
