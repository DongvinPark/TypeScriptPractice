import { makeRandomNumber } from '../import_and_export/RandomNumber';
import { IPerson } from './IPerson';

export default class Person implements IPerson {
    constructor(public name: String, public age: number) { }
}

export const makePerson = (name: String, age: number = makeRandomNumber()) => ({ name, age })