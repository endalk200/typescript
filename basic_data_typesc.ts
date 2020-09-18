
// Bolean data type
let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// BigInt literals are not available when targeting lower than ES2020.
// let big: bigint = 100n;
let color: string = "blue";
color = "red";

// Tempplate strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

// this is equivalent to declaring sentence as follows
let sentence2: string =
    "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";

// Array
let list: number[] = [1, 2, 3];

// The second way uses a generic array type, Array<elemType>:
let list2: Array<number> = [1, 2, 3];

// Tuple
/**
 * Tuple types allow you to express an array with a fixed number of elements
 * whose types are known, but need not be the same. For example, you may want 
 * to represent a value as a pair of a string and a number:
 */

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
/**
 * Type 'number' is not assignable to type 'string'. 
 * Type 'string' is not assignable to type 'number'.
 */