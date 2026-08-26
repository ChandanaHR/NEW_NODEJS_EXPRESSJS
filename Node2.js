1) Create a Node.js project
Create a folder:
node-practice
Open the terminal inside that folder.
Check Node.js:
node -v
Check npm:
npm -v
You should get version numbers.
2) Create app.js

Create:

node-practice/
└── app.js

Put this inside app.js:
console.log("Hello from Node.js!");
console.log("I am learning Node.js");
Now run:
node app.js
Output:
Hello from Node.js!
I am learning Node.js
What happened?
app.js
   ↓
node app.js
   ↓
Node.js
   ↓
V8 Engine
   ↓
JavaScript executed
So node app.js means:
"Node, execute this JavaScript file."

3) Practice npm init -y
Now run:
npm init -y
You will see a new file:
node-practice/
│
├── app.js
└── package.json
Open package.json.
You'll see something similar to:

{
  "name": "node-practice",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
What did npm init -y do?
It created the package.json file automatically with default values.
Think of package.json as:
The identity/configuration file of your Node.js project.

4) Practice npm install
Now run:
npm install
At this point, you haven't specified any dependencies.
So npm doesn't have much to install.
But you may see:
up to date
Depending on the npm version/project state, it may also create or update:
package-lock.json
Your project can now look like:
node-practice/
│
├── app.js
├── package.json
└── package-lock.json


There are two main module systems:

CommonJS → traditionally used in Node.js
ES Modules (ESM) → modern JavaScript module system
1. What is a Module?

Before CommonJS and ES Modules, understand what a module means.

A module is simply a separate JavaScript file containing related code.

For example:

project/
│
├── app.js
├── calculator.js
└── user.js

Instead of putting everything inside app.js, we can keep calculator-related code in calculator.js.

calculator.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

Now the question is:

How can app.js use these functions?

That's where modules come in.

2. CommonJS

CommonJS is a module system traditionally used by Node.js.

It uses:

require()

to import code.

And:

module.exports

to export code.

The basic idea is:

calculator.js
      │
      │ module.exports
      ↓
   exports
      │
      │ require()
      ↓
    app.js
3. require()

require() is used in CommonJS to load/import another module.

Suppose we have:

calculator.js
function add(a, b) {
    return a + b;
}

module.exports = add;

Now in app.js:

const add = require("./calculator");

console.log(add(10, 20));

Output:

30
What happens?

When Node.js sees:

const add = require("./calculator");

it basically says:

"Go to calculator.js, get whatever that file exported, and give it to add."

So:

calculator.js
     ↓
module.exports = add
     ↓
require("./calculator")
     ↓
const add
4. module.exports

module.exports is used to export something from a CommonJS module.

For example:

function add(a, b) {
    return a + b;
}

module.exports = add;

We are saying:

"Make the add function available to other files."

Then another file can use it:

const add = require("./calculator");

console.log(add(5, 3));

Output:

8
5. Exporting Multiple Values with CommonJS

You can export multiple functions.

calculator.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,
    subtract,
    multiply
};

Now:

app.js
const calculator = require("./calculator");

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));

Output:

15
5
50

You can also use destructuring:

const { add, subtract, multiply } = require("./calculator");

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
6. Real-World Example of CommonJS

Imagine an e-commerce application:

ecommerce/
│
├── app.js
├── userService.js
├── productService.js
└── orderService.js
userService.js
function createUser(name) {
    return `User ${name} created`;
}

function deleteUser(id) {
    return `User ${id} deleted`;
}

module.exports = {
    createUser,
    deleteUser
};
app.js
const { createUser, deleteUser } = require("./userService");

console.log(createUser("Chandana"));
console.log(deleteUser(101));

Output:

User Chandana created
User 101 deleted

This makes large applications easier to maintain.

7. ES Modules

ES Modules, commonly called ESM, are the modern JavaScript module system.

Instead of:

require()

we use:

import

Instead of:

module.exports

we use:

export

So the comparison is:

CommonJS	ES Modules
require()	import
module.exports	export
Traditional Node.js modules	Modern JavaScript modules
8. export

export is used to make functions, variables, classes, etc. available to other modules.

Example:

calculator.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

Here we have exported two functions:

export function add()
export function subtract()
9. import

import is used to bring exported code into another file.

app.js
import { add, subtract } from "./calculator.js";

console.log(add(10, 5));
console.log(subtract(10, 5));

Output:

15
5

The flow is:

calculator.js
      │
      │ export
      ↓
  add, subtract
      │
      │ import
      ↓
    app.js
10. Named Export

When you export multiple things using their names, it is called a named export.

calculator.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

Import:

import { add, subtract, multiply } from "./calculator.js";

The names need to match.

import { add } from "./calculator.js";

You can also rename while importing:

import { add as addition } from "./calculator.js";

console.log(addition(10, 20));
11. Default Export

ES Modules also support default export.

calculator.js
function add(a, b) {
    return a + b;
}

export default add;

Then:

app.js
import add from "./calculator.js";

console.log(add(10, 20));

Output:

30

Notice something important.

With named export:

export function add() {}

we use:

import { add } from "./calculator.js";

With default export:

export default add;

we use:

import add from "./calculator.js";
12. CommonJS vs ES Modules

Let's put everything together.

CommonJS

calculator.js

function add(a, b) {
    return a + b;
}

module.exports = add;

app.js

const add = require("./calculator");

console.log(add(10, 20));
ES Modules

calculator.js

export default function add(a, b) {
    return a + b;
}

app.js

import add from "./calculator.js";

console.log(add(10, 20));

Both produce:

30

The difference is the module syntax.

13. Multiple Exports Comparison
CommonJS
// calculator.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};

Import:

const { add, subtract } = require("./calculator");
ES Modules
// calculator.js

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

Import:

import { add, subtract } from "./calculator.js";
14. How Node.js knows you're using ES Modules

For modern Node.js applications, you can configure your package.json:

{
    "type": "module"
}

Then you can write:

import express from "express";

instead of CommonJS:

const express = require("express");

Alternatively, Node.js supports .mjs files for ES Modules:

app.mjs
calculator.mjs
15. Real-World Node.js Application

Imagine your backend has:

ecommerce/
│
├── app.js
│
├── services/
│   └── userService.js
│
├── controllers/
│   └── userController.js
│
└── utils/
    └── email.js

You don't want app.js to contain thousands of lines.

Instead:

userService.js
       │
       │ export
       ↓
userController.js
       │
       │ export
       ↓
     app.js

This is one of the important reasons modules are used in real-world Node.js applications:

Code organization
Code reusability
Maintainability
Separation of responsibilities
Avoiding one huge JavaScript file
