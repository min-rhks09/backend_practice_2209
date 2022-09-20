const url =require('url');

const urlSample = 'https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880'
const parsedObject = url.parse(urlSample);

console.log(parsedObject);
console.clear();
console.log(parsedObject.href);         //https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880
console.log(parsedObject.query);        //p_code=B8613955880