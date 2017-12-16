const crypto = require('crypto');
const fs = require('fs');

function decryptFile(password, srcFileName) {
  const nameDecipher = crypto.createDecipher('aes-256-ctr', password);

  let fileName = nameDecipher.update(srcFileName, 'hex', 'utf8');
  fileName += nameDecipher.final('utf8');

  const output = fs.createWriteStream(fileName);
  const dataDecipher = crypto.createDecipher('aes-256-ctr', password);
  const input = fs.createReadStream(srcFileName);

  input.pipe(dataDecipher).pipe(output);
}

module.exports = decryptFile;