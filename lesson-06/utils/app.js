// utils/logger.js
export function logger(message) {
  console.log("LOG:", message);
}

// main.js
import { logger } from "./utils/logger.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ساخت __dirname در ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Person {
  constructor(
    age = 34,
    firstName = "Omidreza",
    lastName = "",
    phoneNumber = "",
    adresse = ""
  ) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.adresse = adresse;
  }
}

// خواندن فایل به صورت همزمان
try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("Synchronous read:", data);
} catch (error) {
  console.error("Error reading file synchronously:", error);
}

// خواندن فایل به صورت غیرهمزمان
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file asynchronously:", err);
    return;
  }
  console.log("Asynchronously read callback:", data);
});

// ایجاد پوشه test
const folderPath = path.join(__dirname, "test");
fs.mkdir(folderPath, { recursive: true }, (err) => {
  err ? console.error("Error creating folder:", err) 
      : console.log("Folder created successfully!");
});

const person = new Person();
logger("Hi Omidreza");

export { person };