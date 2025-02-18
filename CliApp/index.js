
const fs = require("fs");
const readlineSync = require("readline-sync");

function main() {
  while (true) {
    console.log("\nplease pick from one from the choices:");
    console.log("1. Read file");
    console.log("2. Crete new files with its content");
    console.log("3. Exit");

    const choice = readlineSync.question("Enter your choice: ");

    if (choice === "1") {
      const fileName = readlineSync.question("Enter the name of the file: ");
      if (fs.existsSync(fileName)) {
        const content = fs.readFileSync(fileName, "utf-8");
        console.log("\nFile content:\n", content);
      } else {
        console.log("File does not exist");
      }
    } else if (choice === "2") {
      const fileName = readlineSync.question("Enter the file name: ");
      fs.writeFileSync(fileName, "");
      const content = readlineSync.question("Enter the content : ");
      fs.writeFileSync(fileName, content);
      console.log("Saved");
    } else if (choice === "3") {
      console.log("Exiting app");
      break;
    } else {
      console.log("Invalid");
    }
  }
}

main();

