import { IEmployee } from './employee';
import { Address } from './address';

let fname = 'test';
let lname: string;

lname = 'test1';


const pi = 3.14;

let age: number;

age = 25;

let count: bigint;

let isValid: boolean = false;

console.log(isValid);


function swap(num1, num2): [number, number] {
    return [num2, num1];
}

let output: [number, number];
output = swap(10, 5);

output[0];

output[1];


console.log(output);

let employee: any;

employee = 10;
employee = '10';
employee = ['test', 'test1'];

enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Blue;


let department: string[];

department = ['test', 'test2'];


let emps: IEmployee[];

emps = [
    {
        id: 1,
        name: 'emp1',
        dob: new Date(),
        email: 'test@test.com'
    },
    {
        id: 2,
        name: 'emp2',
        dob: new Date(),
        email: 'test2@test.com'
    },
    {
        id: 3,
        name: 'emp3',
        dob: new Date(),
        email: 'test3@test.com'
    }
];

let empps: Array<IEmployee>;

empps = [
    {
        id: 1,
        name: 'emp1',
        dob: new Date(),
        email: 'test@test.com'
    }
];

const filteredEmp = emps.filter((emp) => emp.id > 1);

const findEmp = emps.find((emp) => emp.id == 1);

// emps.forEach((emp)=> {
//     if(emp.id == 1) {
//         return emp;
//     }
// });

emps.push({
    id: 4,
    email: 'test4@test.com', dob: new Date(), name: ''
})

for (const emp of emps) {
    console.log(emp);
}

for (const emp in emps) {
    console.log(emp);
}

console.log(findEmp);

let address: Address = {
    addrLine1: 'Pune',
    addrLine2: 'Banglore',
    city: 'Mumbai',
    empId: 1,
    id: 1
};

// let addrLine1 = address.addrLine1;
// let addrLine2 = address.addrLine2;


let { addrLine1, addrLine2 } = address;

let { addrLine1: addr1, addrLine2: addr2 } = address;

console.log(addr1, addr2);

let [emp1, emp2, ...allEmployee] = emps;

console.log(emp1, emp2);

console.log(allEmployee);

address.city = 'Delhi';

address = { ...address, city: 'Delhi' };

emps = [...emps, {
    id: 4,
    email: 'test4@test.com', dob: new Date(), name: ''
}];


// function addition(param1:any, param2:any) : any {
//     return param1+ param2;
// }

function addt<T extends string | number>(a: T, b: T): T extends string ? string : number {
    return <any>a + <any>b;
}

// console.log(addition<number>(5, 10));

class Base<T> {
    data: T;
}

let base = new Base<Address>();

base.data;

type user = {
    name: string | 'test',
    id: number
}

let newUser: user = {
    id: 1,
    name: 'user1'
}

type user1 = user & {
    address: number;
}

interface Test {
    prop1: user1
}
type users = Promise<IEmployee> | Observable<IEmployee> | IEmployee;

function response(): Promise<IEmployee> | Observable<IEmployee> | IEmployee {
    return true;
}

function result(num1: unknown, num2: any) {
    return num2 + num1;
}

console.log(result(10, 5));

