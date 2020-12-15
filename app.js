'use strict';

// フィボナッチ数列を40番目まで出力する

// n番目のフィボナッチ数を出力する
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

const length = 40

for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
