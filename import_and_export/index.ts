import { IPerson } from "./IPerson";
import Person, { makePerson } from "./Person";

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');
    console.log(jane, jack);
}

testMakePerson();

let person: object = {
    name: "Jack", age: 32
};

(<{ name: string }>person).name = "John";