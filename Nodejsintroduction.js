1. What is Node.js?
Simple definition

Node.js is a runtime environment that allows us to execute JavaScript outside the browser.

Normally, JavaScript was designed to run inside browsers.

For example:

let name = "Chandana";

console.log(name);

The browser uses a JavaScript engine to execute this code.

With Node.js, we can execute the same JavaScript code without opening a browser.

node app.js
Real-world example

Think about JavaScript as a language.

Java → needs JVM to run
Python → needs Python interpreter
JavaScript → needs a JavaScript runtime

Node.js provides the environment required to run JavaScript on the server.

2. Why was Node.js created?

Before Node.js:

Browser
   ↓
JavaScript

JavaScript was primarily used for:

button clicks
form validation
animations
DOM manipulation
AJAX requests

For example:

button.addEventListener("click", () => {
    alert("Hello");
});

But developers wanted to use JavaScript for backend development too.

So Node.js made it possible to build:

Frontend
   ↓
JavaScript
   ↓
Backend
   ↓
Database

For example:

React Application
       ↓
Node.js + Express
       ↓
MySQL / MongoDB
3. Node.js vs Browser JavaScript

This is one of the most important concepts.

Both use JavaScript, but the environment is different.

Browser JavaScript	Node.js
Runs inside browser	Runs outside browser
Mainly frontend	Mainly backend/server
Has DOM	No DOM by default
Has window	Has global
Can access browser APIs	Can access server APIs
Can manipulate HTML	Can work with files
Used for UI	Used for APIs/server
Browser controls environment	Node controls environment
Browser
document.getElementById("title");

This works because the browser provides the DOM.

Node.js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});

Node.js can work with the file system.

4. Real-world comparison

Imagine a restaurant.

Browser = Customer area

The customer can:

see menu
click buttons
place orders
interact with UI
Node.js = Kitchen

The kitchen:

receives orders
processes them
communicates with storage
prepares responses
Customer
   ↓
Browser
   ↓
HTTP Request
   ↓
Node.js Server
   ↓
Database
   ↓
Node.js
   ↓
HTTP Response
   ↓
Browser

For example, when you log into an application:

React Login Page
       ↓
POST /login
       ↓
Node.js
       ↓
Database
       ↓
Check username/password
       ↓
Response
       ↓
React
5. What is the V8 Engine?

This is another very important concept.

V8 is Google's JavaScript engine.

It was originally created for Google Chrome.

V8 takes JavaScript code and executes it.

For example:

let a = 10;
let b = 20;

console.log(a + b);

V8 is responsible for executing this JavaScript.

Where does V8 exist?
Chrome
   ↓
V8 Engine
   ↓
JavaScript

Node.js
   ↓
V8 Engine
   ↓
JavaScript

Node.js uses the V8 engine but adds many capabilities around it.

6. V8 vs Node.js

This distinction is extremely important.

V8

V8 is a JavaScript engine.

It executes JavaScript.

Node.js

Node.js is a runtime environment built around V8.

It provides additional capabilities such as:

File system
Networking
HTTP server
Timers
Streams
Process management
Operating system interaction

Think:

        Node.js
   ┌─────────────────┐
   │ Node APIs       │
   │ fs              │
   │ http            │
   │ path            │
   │ timers          │
   ├─────────────────┤
   │ V8 Engine       │
   │ JavaScript      │
   ├─────────────────┤
   │ Operating System│
   └─────────────────┘

So:

V8 executes JavaScript. Node.js provides the environment and APIs to build applications with JavaScript.

7. What is a Runtime Environment?

A runtime environment is the environment that provides everything required to execute a program.

For Java:

Java Code
   ↓
JVM
   ↓
Operating System

For JavaScript in browser:

JavaScript
   ↓
Browser
   ↓
V8 / JavaScript Engine

For Node.js:

JavaScript
   ↓
Node.js
   ↓
V8
   ↓
Operating System

Node.js provides APIs that aren't normally available to browser JavaScript.

For example:

const fs = require("fs");

This allows Node.js applications to interact with files.

8. Node.js Architecture

A simplified Node.js architecture looks like this:

             Node.js Application
                     ↓
              JavaScript Code
                     ↓
              ┌──────────────┐
              │ V8 Engine    │
              └──────────────┘
                     ↓
              Node.js APIs
                     ↓
              Event Loop
                     ↓
              libuv
                     ↓
          Operating System

Important components:

1. V8

Executes JavaScript.

2. Node.js APIs

Provides APIs like:

fs
http
path
crypto
events
stream
3. Event Loop

Coordinates asynchronous operations.

4. libuv

Provides the underlying asynchronous I/O mechanism and event-loop infrastructure.

This is one reason Node.js can efficiently handle many I/O-heavy operations.

9. Event-Driven Architecture

This is one of the most important concepts in Node.js.

Node.js applications are heavily based on events.

An event means:

"Something happened."

Examples:

User clicked
File finished reading
Request arrived
Database response received
Timer completed
Socket received data

Node.js can react to these events.

10. Real-world example of event-driven architecture

Imagine a restaurant.

You order:

Customer:
"Give me Pizza"

The waiter doesn't stand in the kitchen staring at the pizza.

Instead:

Waiter takes order
       ↓
Kitchen prepares pizza
       ↓
Waiter handles other customers
       ↓
Pizza ready
       ↓
Waiter gets notification
       ↓
Pizza delivered

Node.js works similarly.

Request arrives
      ↓
Start database operation
      ↓
Don't wait doing nothing
      ↓
Handle another request
      ↓
Database finishes
      ↓
Event/callback
      ↓
Send response
11. Event-driven example in Node.js
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("orderPlaced", () => {
    console.log("Order received!");
});

eventEmitter.emit("orderPlaced");

Output:

Order received!

Here:

eventEmitter.on()

means:

"When this event happens, execute this function."

And:

eventEmitter.emit()

means:

"The event happened."

12. Application example

Imagine an e-commerce application.

A customer places an order.

Order placed
     ↓
"orderPlaced" event
     ↓
 ┌──────────────┬───────────────┐
 ↓              ↓               ↓
Save order   Send email     Update inventory

This is where event-driven architecture becomes powerful.

13. Single-Threaded Model

Node.js uses a single JavaScript execution thread.

This means JavaScript code is executed by one main thread.

For example:

console.log("A");
console.log("B");
console.log("C");

The execution is:

A
↓
B
↓
C

Not:

A
B
C

simultaneously on multiple JavaScript threads.

14. Then how can Node.js handle many users?

This is where beginners usually get confused.

Suppose 3 users send requests:

User A → Request
User B → Request
User C → Request

Node.js doesn't create one JavaScript thread per request.

Instead, it uses the event loop + asynchronous I/O.

Conceptually:

             Node.js
                ↓
          JavaScript Thread
                ↓
           Event Loop
          ↙     ↓      ↘
       User A  User B  User C

For I/O operations, Node.js can delegate work to the underlying system/libuv mechanisms and continue processing other events.

15. Non-blocking I/O

I/O means Input/Output.

Examples:

Reading a file
Writing a file
Database access
Network request
API call
Blocking approach

Imagine:

Read file
   ↓
WAIT
   ↓
File completed
   ↓
Continue

During that wait, the thread cannot move on to other JavaScript work.

Non-blocking approach

Node.js can do:

Start file reading
       ↓
Don't wait
       ↓
Handle another request
       ↓
Handle another request
       ↓
File completed
       ↓
Callback/event executes

This is the core idea.

16. Real-world example

Imagine you are at a restaurant.

Blocking waiter
Customer A orders
       ↓
Wait beside kitchen
       ↓
Pizza prepared
       ↓
Serve A
       ↓
Take B's order

Very inefficient.

Non-blocking waiter
Take A's order
      ↓
Send order to kitchen
      ↓
Take B's order
      ↓
Take C's order
      ↓
Pizza A ready
      ↓
Serve A

That's closer to the Node.js approach for I/O.

17. Synchronous vs Asynchronous Code
Synchronous

Code executes one operation after another and waits for each operation to finish.

Example:

console.log("Start");

console.log("Processing...");

console.log("End");

Output:

Start
Processing...
End
18. Asynchronous code

Asynchronous code allows an operation to start and lets other work continue while waiting for an asynchronous result.

Example:

console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");

Output:

Start
End
Timer finished

Notice:

Start
 ↓
Start timer
 ↓
Continue
 ↓
End
 ↓
2 seconds
 ↓
Timer finished

The timer didn't block the JavaScript thread.

19. Application example

Suppose an application needs to fetch customer information.

Blocking mindset
Request
 ↓
Database query
 ↓
WAIT
 ↓
Database result
 ↓
Response
Asynchronous mindset
Request
 ↓
Start database query
 ↓
Continue handling other events
 ↓
Database result arrives
 ↓
Process result
 ↓
Response

This is extremely useful for backend applications handling many concurrent I/O operations.

20. node command

After installing Node.js, you can check the version:

node --version

or:

node -v

Example:

v22.x.x

You can also check npm:

npm -v
21. Running .js files

Suppose you have:

app.js

Inside:

console.log("Hello Node.js");

Run:

node app.js

Output:

Hello Node.js

The flow is:

app.js
  ↓
node app.js
  ↓
Node.js
  ↓
V8
  ↓
Execute JavaScript
22. What is REPL?

REPL means:

Read – Evaluate – Print – Loop

You can start it simply by typing:

node

You'll see something similar to:

>

Now try:

> 10 + 20
30

Try:

> "Hello".toUpperCase()
'HELLO'

Try:

> let x = 100

Then:

> x * 2
200

This is useful for quickly experimenting with JavaScript and Node.js APIs.

Exit using:

.exit
23. What is npm?

npm stands for Node Package Manager.

It is used to:

install packages
manage dependencies
run scripts
manage project configuration

For example, suppose you're creating a web server.

Instead of implementing everything yourself, you can install Express.

npm install express

Now Express becomes a dependency of your project.

24. What is a package?

A package is reusable code that someone has created and published for other developers to use.

For example:

Express
Mongoose
jsonwebtoken
cors
dotenv
bcrypt

Instead of writing everything yourself:

HTTP server
Routing
Authentication
Password hashing
Environment variables

you can use existing packages.

25. What is package.json?

package.json is basically the configuration/identity file of a Node.js project.

Suppose you create:

my-app/
   app.js
   package.json

Example:

{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My Node application",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  }
}

It tells npm about your project.

26. Why is package.json important?

Imagine you're working on an application with another developer.

Your project uses:

Express
Mongoose
jsonwebtoken
dotenv

Instead of telling your teammate:

"Install these packages manually."

You provide:

package.json

Then they can run:

npm install

npm reads package.json and installs the required dependencies.

27. npm install

Suppose:

npm install express

npm will:

Download Express
Add it to dependencies
Create/update package.json
Create package-lock.json
Install package files under node_modules

Conceptually:

my-app
│
├── app.js
├── package.json
├── package-lock.json
└── node_modules
      └── express
28. What is node_modules?

node_modules contains the packages required by your project.

For example:

node_modules/
    express/
    body-parser/
    ...

You normally don't manually edit these packages.

They are installed by npm.

29. What is package-lock.json?

package-lock.json records the exact dependency versions/tree that npm resolved.

This helps make installations more reproducible across environments.

For example:

Developer Laptop
       ↓
npm install
       ↓
Exact dependency versions

Production Server
       ↓
npm install
       ↓
Same resolved dependency tree
30. npm init

To create a new Node.js project:

mkdir my-app
cd my-app
npm init

npm asks questions such as:

package name:
version:
description:
entry point:

Or use:

npm init -y

This automatically creates a basic package.json.
