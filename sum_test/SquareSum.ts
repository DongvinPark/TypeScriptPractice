import { range } from "./Range";
import { fold } from "./AllSumFold";
import { map } from "./Map";

let numbers: number[] = range(0, 100 + 1)
let result = fold(
    map(numbers, (value) => (value * value)), (result, value) => (result + value), 0
)

console.log(result)