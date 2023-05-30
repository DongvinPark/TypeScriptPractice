function add(a: number, b: number) {
    return a + b;
}

console.log(
    add(1, 2)
);

const nubmers: number[] = [1, 2, 3, 4, 5];
const numbers2: Array<number> = [6, 7, 8, 9, 10];

const onewToTen = [...nubmers, ...numbers2];

console.log(onewToTen);

interface ICheckLength {
    length: number;
}

function echoWithLength<T extends ICheckLength>(message: T) {
    console.log(message);
}

echoWithLength("Hello");
echoWithLength([1, 2, 3]);
echoWithLength({ length: 19 });
//echoWithLength(10);