const crypto = require('crypto');
const fs = require('fs');

function encryptFile(password, srcFileName) {
  const nameCipher = crypto.createCipher('aes-256-ctr', password);

  outputFileName = nameCipher.update(srcFileName, 'utf8', 'hex');
  outputFileName += nameCipher.final('hex');

  const output = fs.createWriteStream(outputFileName);

  const dataCipher = crypto.createCipher('aes-256-ctr', password);
  const input = fs.createReadStream(srcFileName);

  input.pipe(dataCipher).pipe(output);
}

module.exports = encryptFile;