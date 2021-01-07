# [Typescript](https://www.typescriptlang.org/tsconfig)



TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset 
of JavaScript and adds optional static typing to the language. TypeScript is designed for development of 
large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing 
JavaScript programs are also valid TypeScript programs.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution 
(as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript 
Checker can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.

## Compilation
There are two main ways to get the TypeScript available for your project:
* Via npm (the Node.js package manager)
* By installing TypeScript’s Visual Studio plugins

Visual Studio 2017 and Visual Studio 2015 Update 3 include TypeScript by default. If you didn’t install 
TypeScript with Visual Studio, you can still [download it](https://www.typescriptlang.org/download).

For npm users:

    npm install -g typescript

To compile your `typescript` file from the command line.

    tsc helloworld.ts

To compile all `ts` files in a directory called `src`

    tsc src/*.ts

If you have large typescript project compiling like this is tideous and not recommended. To compile project
level `ts` files use `tsconfig` file.

## Usage
To compile all `ts` files in the `src` directory to distinct `js` files use webpack as follows:

    npm install
    npm run watch

## tsconfig
[tsconfig reference][tsconfig_reference]. tsconfgiuration for basic typescript project could be as follows:

```json
{
  "compilerOptions": {
    "module": "commonjs",

    "target": "ES5",

    "allowJs": true,
    "checkJs": true,

    "outDir": "dist",

    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ],
  "watchOptions": {
    "watchFile": "useFsEvents",
    "watchDirectory": "useFsEvents",

    "fallbackPolling": "dynamicPriority"
  }
}
```
Put your `tsconfig.json` file in the root directory and run 

    tsc --wacth

This will compile all ts files in the `src` folder and output into the `dist` directory


[tsconfig_reference]: https://www.typescriptlang.org/tsconfig


# Table of Contents.
This directory contains typescript syntax documentation. Refer to the following table of contents
for breakdown of this documentation.

1 [Basic Data Types](https://github.com/endalk200/typescript/blob/master/doc/basic.md)
  * 1.1 [Boolean](https://github.com/endalk200/typescript/blob/master/doc/basic.md#boolean)
  * 1.2 [Numbers](https://github.com/endalk200/typescript/blob/master/doc/basic.md#numbers)
  * 1.3 [Strings](https://github.com/endalk200/typescript/blob/master/doc/basic.md#strings)
  * 1.4 [Array](https://github.com/endalk200/typescript/blob/master/doc/basic.md#array)
  * 1.5 [Tuple](https://github.com/endalk200/typescript/blob/master/doc/basic.md#tuple)
  * 1.6 [Enum](https://github.com/endalk200/typescript/blob/master/doc/basic.md#enum)
  * 1.7 [unkown](https://github.com/endalk200/typescript/blob/master/doc/basic.md#unknown)
  * 1.8 [Any](https://github.com/endalk200/typescript/blob/master/doc/basic.md#any)
  * 1.8 [Void](https://github.com/endalk200/typescript/blob/master/doc/basic.md#void)
  * 1.9 [Null and Undefined](https://github.com/endalk200/typescript/blob/master/doc/basic.md#null-and-undefined)
  * 1.10 [Never](https://github.com/endalk200/typescript/blob/master/doc/basic.md#never)
  * 1.11 [Object](https://github.com/endalk200/typescript/blob/master/doc/basic.md#objects)
  * 1.12 [Type Assertions](https://github.com/endalk200/typescript/blob/master/doc/basic.md#type-assertions)
  * 1.13 [TypeScript Variable Scope](https://github.com/endalk200/typescript/blob/master/doc/basic.md#typeScript-variable-scope)
  * 1.14 [var vs let vs const](https://github.com/endalk200/typescript/blob/master/doc/basic.md#var-vs-let-vs-const)
    * 1.14.1 [var](https://github.com/endalk200/typescript/blob/master/doc/basic.md#var)
    * 1.14.2 [var](https://github.com/endalk200/typescript/blob/master/doc/basic.md#let)
    * 1.14.3 [var](https://github.com/endalk200/typescript/blob/master/doc/basic.md#const)
2 [Typescript Operators](https://github.com/endalk200/typescript/blob/master/doc/operators.md)
3 [Control Flow](https://github.com/endalk200/typescript/blob/master/doc/control_flow.md)
4 [Typescript Functions](https://github.com/endalk200/typescript/blob/master/doc/functions.md)
5 [Typescript Classes](https://github.com/endalk200/typescript/blob/master/doc/classes.md)
6 [Typescript Interfaces](https://github.com/endalk200/typescript/blob/master/doc/interface.md)
7 [Typescript Decorators](https://github.com/endalk200/typescript/blob/master/doc/decorators.md)
