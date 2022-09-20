process.on('exit', code =>{
    console.log('프로그램 종료');
    console.log('exit code', code);
});

process.on('uncaughtException', error => {
    console.log('예외발생');
    console.log('예외 명', error.name);
    console.log('예외 내용', error.message);    
});

//예외발생
error.error.error();
process.exit(-1);