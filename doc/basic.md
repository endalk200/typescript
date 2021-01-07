# Typescript Data Types

Typescript unlike javascript is strongly typed language and supports many types some of which
are listed bellow

## Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

```typescript
let isDone: boolean = false;
```

## Numbers

As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating
point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and
decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

## Strings

Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with
textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like
JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

```typescript
let color: string = "blue";
color = "red";
```

You can also use template strings, which can span multiple lines and have embedded expressions. These strings
are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form **${ expr }**.

```typescript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
```

This is equivalent to declaring sentence like so:

```typescript
let sentence: string =
	"Hello, my name is " +
	fullName +
	".\n\n" +
	"I'll be " +
	(age + 1) +
	" years old next month.";
```

## Array

TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways.
In the first, you use the type of the elements followed by [] to denote an array of that element type:

```typescript
let list: number[] = [1, 2, 3];
```

The second way uses a generic array type, Array<elemType>:

```typescript
let list: Array<number> = [1, 2, 3];
```

## Tuple

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
For example, you may want to represent a value as a pair of a string and a number:

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

    output:
    Type 'number' is not assignable to type 'string'.
    Type 'string' is not assignable to type 'number'.

When accessing an element with a known index, the correct type is retrieved:

```typescript
// OK
console.log(x[0].substring(1));

console.log(x[1].substring(1));
```

    output:
    Property 'substring' does not exist on type 'number'.

Accessing an element outside the set of known indices fails with an error:

```typescript
x[3] = "world";
```

    output:
    Tuple type '[string, number]' of length '2' has no element at index '3'.

```typescript
console.log(x[5].toString());
```

    output:
    Object is possibly 'undefined'.
    Tuple type '[string, number]' of length '2' has no element at index '5'.

## Enum

A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum
is a way of giving more friendly names to sets of numeric values.

```typescript
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;
```

By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one
of its members. For example, we can start the previous example at 1 instead of 0:

```typescript
enum Color {
	Red = 1,
	Green,
	Blue,
}
let c: Color = Color.Green;
```

Or, even manually set all the values in the enum:

```typescript
enum Color {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let c: Color = Color.Green;
```

A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example,
if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:

```typescript
enum Color {
	Red = 1,
	Green,
	Blue,
}
let colorName: string = Color[2];

// Displays 'Green'
console.log(colorName);
```

## Unkown

We may need to describe the type of variables that we do not know when we are writing an application. These values may come
from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. In these cases,
we want to provide a type that tells the compiler and future readers that this variable could be anything, so we
give it the unknown type.

```typescript
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
```

If you have a variable with an unknown type, you can narrow it to something more specific by doing typeof checks, comparison
checks, or more advanced type guards that will be discussed in a later chapter:

```typescript
declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe;
```

    output:
    Type 'unknown' is not assignable to type 'number'.

```typescript
if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  const aString: string = maybe;
```

    output:
    Type 'boolean' is not assignable to type 'string'.

```typescript
}

if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe;
```

    Output:
    Type 'string' is not assignable to type 'boolean'.

```typescript
}
```

## Any

The any data type is the super type of all types in TypeScript. It denotes a dynamic type. Using the any type is equivalent
to opting out of type checking for a variable.

In some situations, not all type information is available or its declaration would take an inappropriate amount of effort.
These may occur for values from code that has been written without TypeScript or a 3rd party library. In these
cases, we might want to opt-out of type checking. To do so, we label these values with the any type:

```typescript
declare function getValue(key: string): any;

// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");
```

The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type
checking during compilation. <br>

Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist. These properties
include functions and TypeScript will not check their existence or type:

```typescript
let looselyTyped: any = 4;

// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();

// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
strictlyTyped.toFixed();
```

    output:
    Object is of type 'unknown'.

The any will continue to propagate through your objects:

```typescript
let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;
//  ^ = let d: any
```

After all, remember that all the convenience of any comes at the cost of losing type safety. Type safety is one of the main
motivations for using TypeScript and you should try to avoid using any when not necessary.

## Void

void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return
type of functions that do not return a value:

```typescript
function warnUser(): void {
	console.log("This is my warning message");
}
```

Declaring variables of type void is not useful because you can only assign null (only if `--strictNullChecks` is not
specified, see next section) or undefined to them:

```typescript
let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;
```

## Null and Undefined

In TypeScript, both `undefined` and `null` actually have their types named `undefined` and `null` respectively. Much like void,
they’re not extremely useful on their own:

```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

By default null and undefined are subtypes of all other types. That means you can assign `null` and `undefined`
to something like number.

However, when using the `--strictNullChecks` flag, `null` and `undefined` are only assignable to `unknown`, `any` and
their respective types (the one exception being that undefined is also assignable to void). This helps
avoid many common errors. In cases where you want to pass in either a string or null or undefined,
you can use the union type string `| null | undefined`.

The null and the undefined datatypes are often a source of confusion. The null and undefined cannot be used to reference
the data type of a variable. They can only be assigned as values to a variable.

However, null and undefined are not the same. A variable initialized with undefined means that the variable has no value
or object assigned to it while null means that the variable has been set to an object whose value is undefined.

## Never

The never type represents the type of values that never occur. For instance, never is the return type for a function
expression or an arrow function expression that always throws an exception or one that never returns. Variables also
acquire the type never when narrowed by any type guards that can never be true.

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to,
never (except never itself). Even any isn’t assignable to never.

Some examples of functions returning never:

```typescript
// Function returning never must not have a reachable end point
function error(message: string): never {
	throw new Error(message);
}

// Inferred return type is never
function fail() {
	return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
	while (true) {}
}
```

## Object

object is a type that represents the `non-primitive` type, i.e. anything that is not `number`, `string`, `boolean`, `bigint`,
`symbol`, `null`, or `undefined`.

With object type, APIs like Object.create can be better represented. For example:

```typescript
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

create(42);
```

    Argument of type '42' is not assignable to parameter of type 'object | null'.

```typescript
create("string");
```

    Argument of type '"string"' is not assignable to parameter of type 'object | null'.

```typescript
create(false);
```

    Argument of type 'false' is not assignable to parameter of type 'object | null'.

```typescript
create(undefined);
```

    Argument of type 'undefined' is not assignable to parameter of type 'object | null'.

Generally, you won’t need to use this.

## Type Assertions

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually,
this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a
type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime
impact and is used purely by the compiler. TypeScript assumes that you, the programmer,
have performed any special checks that you need.

Type assertions have two forms.

One is the as-syntax:

```typescript
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
```

The other version is the “angle-bracket” syntax:

```typescript
let someValue: unknown = "this is a string";

let strLength: number = (<string>someValue).length;
```

The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using
TypeScript with JSX, only as-style assertions are allowed.

## TypeScript Variable Scope

The scope of a variable specifies where the variable is defined. The availability of a variable within a program is
determined by its scope. TypeScript variables can be of the following scopes −

-   **Global Scope** − Global variables are declared outside the programming constructs. These variables can be accessed
    from anywhere within your code.

-   **Class Scope** − These variables are also called fields. Fields or class variables are declared within the class but
    outside the methods. These variables can be accessed using the object of the class. Fields can also be static. Static
    fields can be accessed using the class name.

-   **Local Scope** − Local variables, as the name suggests, are declared within the constructs like methods, loops etc.
    Local variables are accessible only within the construct where they are declared.

The following example illustrates variable scopes in TypeScript.

```typescript
var global_num = 12; //global variable
class Numbers {
	num_val = 13; //class variable
	static sval = 10; //static field

	storeNum(): void {
		var local_num = 14; //local variable
	}
}
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
```

## `Var` vs `Let` vs `Const`

### `var`

Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var,
though. That is why it was necessary for new ways to declare variables to emerge. First, let's get to understand
var more before we discuss those issues.

#### Scope Of `var`

Scope essentially means where these variables are available for use. var declarations are globally scoped or
function/locally scoped.

The scope is global when a var variable is declared outside a function. This means that any variable that is
declared with var outside a function block is available for use in the whole window.

var is function scoped when it is declared within a function. This means that it is available and can be
accessed only within that function.

To understand further, look at the example below.

```typescript
var greeter = "hey hi";

function newFunction() {
	var hello = "hello";
}
```

Here, `greeter` is globally scoped because it exists outside a function while `hello` is function scoped.
So we cannot access the variable `hello` outside of a function. So if we do this:

```typescript
var tester = "hey hi";

function newFunction() {
	var hello = "hello";
}

console.log(hello); // error: hello is not defined
```

We'll get an error which is as a result of `hello` not being available outside the function.

#### var variables can be re-declared and updated

This means that we can do this within the same scope and won't get an error.

```typescript
var greeter = "hey hi";
var greeter = "say Hello instead";
```

and this also

```typescript
var greeter = "hey hi";
greeter = "say Hello instead";
```

#### Hoisting of var

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope
before code execution. This means that if we do this:

```typescript
console.log(greeter);
var greeter = "say hello";
```

it is interpreted as this:

```typescript
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello";
```

So `var` variables are hoisted to the top of their scope and initialized with a value of `undefined`.

#### Problem with var

There's a weakness that comes with `var`. I'll use the example below to explain:

```typescript
var greeter = "hey hi";
var times = 4;

if (times > 3) {
	var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"
```

So, since `times > 3` returns true, `greeter` is redefined to `"say Hello instead"`. While this is not a problem
if you knowingly want `greeter` to be redefined, it becomes a problem when you do not realize that a variable `greeter`
has already been defined before.

If you have used `greeter` in other parts of your code, you might be surprised at the output you might get. This will
likely cause a lot of bugs in your code. This is why `let` and `const` are necessary.

### `let`

`let` is now preferred for variable declaration. It's no surprise as it comes as an improvement to `var` declarations.
It also solves the problem with `var` that we just covered. Let's consider why this is so.

#### let is block scoped

A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with `let` is only available for use within that block. Let me explain this with
an example:

```typescript
let greeting = "say Hi";
let times = 4;

if (times > 3) {
	let hello = "say Hello instead";
	console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined
```

We see that using `hello` outside its block (the curly braces where it was defined) returns an error. This is because
`let` variables are block scoped .

#### let can be updated but not re-declared.

Just like `var`, a variable declared with `let` can be updated within its scope. Unlike `var`, a `let` variable cannot
be re-declared within its scope. So while this will work:

```typescript
    let greeting = "say Hi";
    greeting = "say Hello instead";
this will return an error:

    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```

However, if the same variable is defined in different scopes, there will be no error:

```typescript
let greeting = "say Hi";
if (true) {
	let greeting = "say Hello instead";
	console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
```

Why is there no error? This is because both instances are treated as different variables since they have different scopes.

This fact makes `let` a better choice than `var`. When using `let`, you don't have to bother if you have used a
name for a variable before as a variable exists only within its scope.

Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier
that occurs with var does not happen.

#### Hoisting of let

Just like `var`, `let` declarations are hoisted to the top. Unlike `var` which is initialized as `undefined`, the `let`
keyword is not initialized. So if you try to use a `let` variable before declaration, you'll get a `Reference Error`.

### Const

Variables declared with the `const` maintain constant values. `const` declarations share some similarities with let declarations.

#### `const` declarations are block scoped

Like `let` declarations, `const` declarations can only be accessed within the block they were declared.

### `const` cannot be updated or re-declared

This means that the value of a variable declared with `const` remains the same within its scope. It cannot be updated or
re-declared. So if we declare a variable with `const`, we can neither do this:

```typescript
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable.
```

nor this:

```typescript
const greeting = "say Hi";
const greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```

Every `const` declaration, therefore, must be initialized at the time of declaration.

This behavior is somehow different when it comes to objects declared with `const`. While a `const` object cannot be updated,
the properties of this objects can be updated. Therefore, if we declare a `const` object as this:

```typescript
const greeting = {
	message: "say Hi",
	times: 4,
};
```

while we cannot do this:

```typescript
greeting = {
	words: "Hello",
	number: "five",
}; // error:  Assignment to constant variable.
```

we can do this:

```typescript
greeting.message = "say Hello instead";
```

This will update the value of `greeting.message` without returning errors.

#### Hoisting of `const`

Just like `let`, `const` declarations are hoisted to the top but are not initialized.

So just in case you missed the differences, here they are:

-   `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.
-   `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared;
    `const` variables can neither be updated nor re-declared.
-   They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let`
    and `const` variables are not initialized.
-   While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.
