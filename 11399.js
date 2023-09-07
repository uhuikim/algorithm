const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);
const sortedArr = arr.sort((a, b) => a - b).map(Number);

const test = sortedArr.reduce((acc, cur, index) => {
  if (index !== 0) return [...acc, cur + acc[index - 1]];
  else {
    return [...acc, cur];
  }
}, []);

console.log(test.reduce((acc, cur) => acc + cur));

// const fs = require("fs");
// const input= fs.readFileSync("/dev/stdin").toString().split('\n');
// let n = Number(input[0])

// let arr = input[1].split(' ').map(Number)
// let answer = 0;
// let summary = 0;

// for (let i = 0; i < n; i++) {
//   summary += arr[i];
//   answer += summary;
// }

// console.log(answer);
