//Modules
//Es Modules => import , export , export defult
// CommonJs Modules => require , module.exports.foo= .. , module.exportes

// const { add, subtract } = require("./commonJs-module");

import Srt, { add, subtract } from "./es-modules.js";

console.log(add(2, 5), subtract(5, 3), Srt);


//These are built-in modules that come with Node.js.

// ✅ Examples:
// •	fs – File system operations
// •	http – Create HTTP servers
// •	path – Handle file paths
// •	os – Operating system info
// const fs = require('fs');
// const os = require('os');
// ✅ No installation needed – they are part of Node.js itself.

// 2️⃣ Local Modules
// These are custom modules you write yourself in your project.
// export function add(a, b) {
//     return a + b;
//   }

  //import { add } from './math.js';
// console.log(add(2, 3));

// 3️⃣ Third-Party Modules
// These are external packages created by the Node.js community.
// •	express – Web server framework
// •	lodash – Utility functions
// •	dotenv – Manage environment variables
// npm install express
// const express = require('express');
// const app = express();
// ✅ Installed via npm.
// ✅ Stored in the node_modules/ folder.


