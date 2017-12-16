const inquirer = require('inquirer');
const encryptFile = require('./encrypt-file');
const decryptFile = require('./decrypt-file');


const args = process.argv;

let cmdName = args[1];
let fileName = args[2]

if (cmdName !== 'encrypt' && cmdName !== 'decrypt') {
  cmdName = args[2];
  fileName = args[3];
} 

if (cmdName !== 'encrypt' && cmdName !== 'decrypt') {
  console.error(`'${cmdName}' is not a valid argument.`);
  process.exit();
}
const question = {
  type: 'password',
  name: 'pwd',
  message: 'Enter password: '
};

inquirer.prompt([question]).then(answers => {
  const pwd = answers.pwd;
  if(cmdName === 'encrypt') {
    encryptFile(pwd, fileName);
    console.log(`Encrypted file ${fileName}`);
  }else if (cmdName === 'decrypt') {
    decryptFile(pwd, fileName);
    console.log(`Decrypted file ${fileName}`);
  }
});