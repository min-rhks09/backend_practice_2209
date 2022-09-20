const fs = require('fs');

let bufA = fs.readFilesync('tmp/a.txt','utf8');
let bufB = fs.readFilesync('tmp/b.txt','utf8');
let bufC = fs.readFilesync('tmp/c.txt','utf8');

console.log('bufA');
console.log('bufB');
console.log('bufC');