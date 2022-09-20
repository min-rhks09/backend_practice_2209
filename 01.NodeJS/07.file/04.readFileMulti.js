const fs = require('fs');

//파일 읽는 순서가 보장이 되지 않음
fs.readFile('tmp/a.txt','utf8', (err, bufA) => {
    console.log(bufA);
});

fs.readFile('tmp/b.txt','utf8', (err, bufA) => {
    console.log(bufb);
});

fs.readFile('tmp/c.txt','utf8', (err, bufA) => {
    console.log(bufC);
});

//순서 보장 방법_1
console.log('순서 보장 방법_1');
fs.readFile('tmp/a.txt','utf8', (err, bufA) => {
    console.log(bufA);
    fs.readFile('tmp/a.txt','utf8', (err, bufA) => {
        console.log(bufB);
        fs.readFile('tmp/c.txt','utf8', (err, bufA) =>{
            console.log(bufC);
        });
    });
});


//순서 보장 방법_2
console.log('순서 보장 방법_2');
fs.readFile('tmp/a.txt','utf8', (err, bufA) => {
    fs.readFile('tmp/a.txt','utf8', (err, bufA) => {
        fs.readFile('tmp/c.txt','utf8', (err, bufA) =>{
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});