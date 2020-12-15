'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

// n番目のフィボナッチ数を出力する
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

// フィボナッチ数列を40番目まで出力する
const length = 40

for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
