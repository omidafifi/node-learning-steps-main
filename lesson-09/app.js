const url = require(`url`);

const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);

console.log(myURL.href);

console.log(myURL.username);

console.log(myURL.host);

console.log(myURL.hostname);

console.log(myURL.search);

console.log(myURL.searchParams);
