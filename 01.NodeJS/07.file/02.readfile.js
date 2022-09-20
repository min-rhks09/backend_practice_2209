//비동기적(Asynchronous)으로 파일 읽기 - 권장사항

const fs = require('fs');

fs.readFile('tmp/textfile.txt', 'utf8', (err, data) =>{
    /*
    if(err)
        console.log(err);
    else    
        console.log('파일에서 읽은 데이터:',data);
    */
    //실제 서비스를 제공하는 경우에는 반드시 에러처리를 해야함

    //파일의 에러는 잘 발생하지 않아 에러 처리 생략
    console.log('파일에서 읽은 데이터:',data);
});