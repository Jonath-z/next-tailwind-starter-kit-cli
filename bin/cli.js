#!/usr/bin/env node

const { execSync } = require("child_process");

const executeCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`failed to execute ${command}`, err);
    return false;
  }

  return true;
};

// get the repo command from the command line
const repoName = process.argv[2];

// clone starter kit command
const checkoutCommand = `git clone --depth https://github.com/Jonath-z/next-tailwind-starter-kit.git ${repoName}`;

// checkout and install dependencies command
const installCommand = `cd ${repoName} && npm install`;

// cloning startert kit message
console.log(`cloning the starter kit with name ${repoName}`);

// execute the command and return true or false if it's succed or failed
const checkout = executeCommand(checkoutCommand);

// if the command fails so exit with code -1
if (!checkout) process.exit(-1);

// install dependencies with the given  repo name message
console.log(`install dependencies for ${repoName}`);

// run install dependencies command
const installedDependencies = executeCommand(installCommand);

// if dependencies installation fails so exit the process with code -1
if (!installedDependencies) process.exit(-1);

// if starter kit installed with success
console.log(
  `Congratulation! your are ready. Follow the following command to start`
);

console.log(`cd ${repoName} && npm install`);
