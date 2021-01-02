![Typescript](https://github.com/endalk200/typescript/blob/master/assets/ts-lettermark-blue.png)

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

## tsconfig
[tsconfig reference][tsconfig_reference]. tsconfgiuration for basic typescript project could be as follows:

```json
{
  "compilerOptions": {
    "module": "commonjs",

    "target": "ES5",

    "allowJs": true, // alow js files to imported in ts files
    "checkJs": true, // works in conjuction with allowjs. Throw errors in js files

    "outDir": "dist", // Directory to output the compiled js files

    "sourceMap": true // For debugers to use
  },
  // To specify in which directory to compile. The following specifies to compile all ts files in
  // src and its subdirectories
  "include": [
    "src/**/*"
  ],
  // "files": ["filename.ts"] // to specify each files instead of include
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ],
  // To compile in watch mode so that when you change your ts files it would be compiled automaticaly
  "watchOptions": {
    // Use native file system events for files and directories
    "watchFile": "useFsEvents",
    "watchDirectory": "useFsEvents",

    // Poll files for updates more frequently
    // when they're updated a lot.
    "fallbackPolling": "dynamicPriority"
  }
}
```
Put your `tsconfig.json` file in the root directory and run 

    tsc --wacth

This will compile all ts files in the `src` folder and output into the `dist` directory

## Table of contents
1 [basic data types](https://github.com/endalk200/typescript/blob/master/basic.md)
  * 1.1 [Boolean](https://github.com/endalk200/typescript/blob/master/basic.md#boolean)
  * 1.2 [Numbers](https://github.com/endalk200/typescript/blob/master/basic.md#numbers)
  * 1.3 [Strings](https://github.com/endalk200/typescript/blob/master/basic.md#strings)
  * 1.4 [Array](https://github.com/endalk200/typescript/blob/master/basic.md#array)
  * 1.5 [Tuple](https://github.com/endalk200/typescript/blob/master/basic.md#tuple)
  * 1.6 [Enum](https://github.com/endalk200/typescript/blob/master/basic.md#enum)
  * 1.7 [unkown](https://github.com/endalk200/typescript/blob/master/basic.md#unknown)
  * 1.8 [Any](https://github.com/endalk200/typescript/blob/master/basic.md#any)
  * 1.8 [Void](https://github.com/endalk200/typescript/blob/master/basic.md#void)
  * 1.9 [Null and Undefined](https://github.com/endalk200/typescript/blob/master/basic.md#null-and-undefined)
  * 1.10 [Never](https://github.com/endalk200/typescript/blob/master/basic.md#never)
  * 1.11 [Object](https://github.com/endalk200/typescript/blob/master/basic.md#objects)
  * 1.12 [Type Assertions](https://github.com/endalk200/typescript/blob/master/basic.md#type-assertions)
  * 1.13 [Variable Declaration](https://github.com/endalk200/typescript/blob/master/basic.md#type-assertions)


[tsconfig_reference]: https://www.typescriptlang.org/tsconfig