import { range } from "./Range";
import { fold } from "./AllSumFold";
import { filter } from "./Filter";

let numbers: number[] = range(0, 100 + 1)

const isOdd = (n: number): boolean => n % 2 != 0
const isEven = (n: number): boolean => n % 2 == 0

let oddResult = fold(
    filter(numbers, isOdd), (result, value) => (result + value), 0
)

let evenResult = fold(
    filter(numbers, isEven), (result, value) => (result + value), 0
)

console.log(oddResult)
console.log(evenResult)