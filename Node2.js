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
