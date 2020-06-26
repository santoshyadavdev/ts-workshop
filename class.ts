import { Address, threshold, save } from './address';

// alias
// import * as addr from './address';

class Employee {
    private id: number;
    name: string;
    address: Address;

    get empId() {
        return this.id;
    }

    set empId(id: number) {
        this.id = id;
    }

    constructor(id: number) {

    }

    getName() {
        return this.name;
    }

    getId = () => this.id;
}

let empl = new Employee(10);
empl.name = 'test1';

console.log(empl.getName());

empl.getId();

console.log(empl);


class Manager extends Employee {
    constructor(id: number) {
        super(id);
    }

    getName() {
        return `${this.name} ${this.address}
        ${this.name}`;
    }
}

let manager = new Manager(50);
manager.name = 'User1';
manager.address = 'Pune';

console.log(manager.getName());
