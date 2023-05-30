import { range } from "./Range";
import { fold } from "./AllSumFold";

let numbers: number[] = range(1, 100 + 1);

let result = fold(numbers, (result, value) => (result + value), 0);
console.log(result);