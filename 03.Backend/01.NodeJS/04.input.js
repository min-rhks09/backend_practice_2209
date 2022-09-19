const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.setPrompt('숫자 입력하기');
r1.prompt();

r1.on('line', buf => {
    let num =parseInt(buf);
    console.log('입력한 숫자는 ${num}이고 ${evenODD}입니다')

    r1.close()
});AX      