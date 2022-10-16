// Binary Gap......................................................
// https://app.codility.com/demo/results/trainingBF8GKT-6SE/
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0,
    maxCount = 0;
  (binary = N.toString(2)),
    (newStr = binary.slice(binary.indexOf("1"), binary.lastIndexOf("1") + 1));
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === "0") {
      count++;
    } else {
      if (maxCount < count) {
        maxCount = count;
      }
      count = 0;
    }
  }

  return maxCount;
}

//CyclicRotation............................................
// https://app.codility.com/demo/results/trainingGEHK9M-2D3/

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let rotatingNo = K % A.length;
  for (let i = 0; i < rotatingNo; i++) {
    let removedNum = A.pop();
    A.unshift(removedNum);
  }

  return A;
}

//OddOccurrencesInArray.....................................
// https://app.codility.com/demo/results/trainingEEKD68-A83/

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let uniqueNum = {};
  for (let i = 0; i < A.length; i++) {
    if (uniqueNum[A[i]]) {
      delete uniqueNum[A[i]];
    } else {
      uniqueNum[A[i]] = 1;
    }
  }

  return +Object.keys(uniqueNum)[0];
}

//. FrogJmp......................................................
// https://app.codility.com/demo/results/trainingKB8WUP-PJU/

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  if (X === Y) {
    return 0;
  } else if (X + D >= Y) {
    return 1;
  } else {
    count = Math.ceil((Y - X) / D);
  }

  return count;
}

// PermMissingElem.........................................
// https://app.codility.com/demo/results/training7S8FWK-JKR/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  let init = 1;
  let i = 0;
  while (init === A[i]) {
    init++;
    i++;
  }

  return init;
}

//. PermCheck.....................................
// https://app.codility.com/demo/results/training2F3SW4-MKZ/

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A.sort((a, b) => b - a);
  if (A.length === 1 && A[0] !== 1) return 0;
  if (A[A.length - 1] !== 1) return 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] - 1 !== A[i]) return 0;
  }

  return 1;
}

// solution B
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  let j = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== j) return 0;
    j++;
  }
  return 1;
}

//MissingInteger

// https://app.codility.com/demo/results/trainingR4ZKGB-D7K/

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let obj = {};

  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = "present";
    }
  }

  for (let i = 1; i < 1000000; i++) {
    if (!obj[i]) return i;
  }
}

// option B
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let newArr = [...new Set(A)].sort((a, b) => a - b);
  if (newArr[newArr.length - 1] <= 0) return 1;
  newArr = newArr.filter((num) => num > -1);
  if (newArr[0] > 1) return 1;
  let i = 0;
  let j = newArr[0];
  while (newArr[i] === j) {
    i++;
    j++;
  }

  return j;
}

//TapeEquilibrium..........................................
// https://app.codility.com/demo/results/trainingQR4ZZV-WUC/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sumA = A.reduce((acc, value) => acc + value, 0);
  let sumB = 0;
  let arrDiff = [];

  for (let i = 0; i < A.length - 1; i++) {
    arrDiff.push(Math.abs((sumB += A[i]) - (sumA -= A[i])));
  }
  return Math.min(...arrDiff);
}

// MaxCounter
// https://app.codility.com/demo/results/trainingXY4UPW-SHY/
function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let newArray = Array(N).fill(0);
  let fmax = 0;
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < N + 1) {
      if (newArray[A[i] - 1] < fmax) newArray[A[i] - 1] = fmax;
      newArray[A[i] - 1] += 1;
      if (newArray[A[i] - 1] > max) max = newArray[A[i] - 1];
    } else {
      fmax = max;
    }
  }

  for (let i = 0; i < N; i++) {
    if (newArray[i] < fmax) newArray[i] = fmax;
  }

  return newArray;
}

// Distinct
// https://app.codility.com/demo/results/trainingMTKPVQ-FJE/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  return new Set(A).size;
}

//MaxProductOfThree.........................................
// https://app.codility.com/demo/results/trainingTJZGD7-57A/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => b - a);
  let len = A.length;
  return Math.max(A[len - 1] * A[len - 2] * A[0], A[0] * A[1] * A[2]);
}

//Triangle..................................................
// https://app.codility.com/demo/results/trainingCRFZBR-4MU/
A.sort((a, b) => a - b);
for (let i = 2; i < A.length; i++) {
  if (
    A[i] + A[i - 1] > A[i - 2] &&
    A[i - 2] + A[i - 1] > A[i] &&
    A[i] + A[i - 2] > A[i - 1]
  )
    return 1;
}
return 0;

//MaxProfit
// https://app.codility.com/demo/results/trainingHCMRAT-Y6U/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxProfit = 0;
  let minNum = 200001;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < minNum) {
      minNum = A[i];
    } else if (A[i] - minNum > maxProfit) {
      maxProfit = A[i] - minNum;
    }
  }

  return maxProfit;
}

// Passing Cars

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let j = 0;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      j += 1;
    } else {
      count += j;
      if (count > 1000000000) return -1;
    }
  }
  return count;
}

// count Div

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  return Math.floor(B / K) - Math.floor((A - 1) / K);
}

//MinAvgTwoSlice

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let initialSum = A[0] + A[1];
  let minAvg = initialSum / 2;
  let minPoint = 0;

  for (let i = 2; i < A.length; i++) {
    initialSum += A[i];
    let nextAvg = initialSum / 3;
    if (minAvg > nextAvg) {
      minAvg = nextAvg;
      minPoint = i - 2;
    }

    initialSum -= A[i - 2];
    nextAvg = initialSum / 2;
    if (minAvg > nextAvg) {
      minAvg = nextAvg;
      minPoint = i - 1;
    }
  }

  return minPoint;
}

// MaxSliceSum
// https://app.codility.com/demo/results/trainingXHNBMV-3SV/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxSum = 0;
  let minNum = -10000001;
  for (let i = 0; i < A.length; i++) {
    maxSum = Math.max(A[i], maxSum + A[i]);
    minNum = Math.max(minNum, maxSum);
  }

  return minNum;
}

// MinPerimeterRectangle....................................
// https://app.codility.com/demo/results/trainingTABHAE-UAG/
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let arrPeri = [];
  let numRoot = Math.round(Math.sqrt(N));
  for (let i = 1; i <= numRoot; i++) {
    if (N % i === 0) {
      arrPeri = [...arrPeri, 2 * (i + N / i)];
    }
  }
  return Math.min(...arrPeri);
}

// GenomicRangeQuery
function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 14)
  let range = "";
  let newArr = [];

  for (let i = 0; i < P.length; i++) {
    range = S.slice(P[i], Q[i] + 1);

    if (range.includes("A")) {
      newArr.push(1);
    } else if (range.includes("C")) {
      newArr.push(2);
    } else if (range.includes("G")) {
      newArr.push(3);
    } else {
      newArr.push(4);
    }
  }
  return newArr;
}

// MaxProfit solution 2

function solution(A) {
  // write your code in JavaScript (Node.js 14)
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (let i = 0; i < A.length; i++) {
    if (minPrice > A[i]) {
      minPrice = A[i];
    } else {
      profit = A[i] - minPrice;
      if (profit > maxProfit) maxProfit = profit;
    }
  }

  return maxProfit;
}

// MaxDoubleSliceSum

function solution(A) {
  // write your code in JavaScript (Node.js 14)
  const L = A.length;
  let leftArr = Array(L).fill(0);
  let rightArr = Array(L).fill(0);

  for (let i = 1; i < L - 1; i++) {
    leftArr[i] = Math.max(0, leftArr[i - 1] + A[i]);
    rightArr[L - i - 1] = Math.max(0, rightArr[L - i] + A[L - 1 - i]);
    //  console.log(leftArr);
    // console.log(rightArr)
  }

  let max = 0;
  for (let i = 1; i < L - 1; i++) {
    max = Math.max(max, leftArr[i - 1] + rightArr[i + 1]);
  }

  return max;
}

// CountFactors
function solution(N) {
  // write your code in JavaScript (Node.js 14)
  let L = Math.round(Math.sqrt(N));
  let fac = 0;
  for (let i = 1; i <= L; i++) {
    if (N % i === 0) {
      fac += 1;
    }
  }

  return Number.isInteger(Math.sqrt(N)) ? fac * 2 - 1 : fac * 2;
}

//OR

function solution(N) {
  // write your code in JavaScript (Node.js 14)
  let fac = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      if (i * (N / i) === N && i < N / i) {
        fac += 2;
      } else if (i * (N / i) === N && i === N / i) {
        fac += 1;
      }
    }
    if (i >= N / i) return fac;
  }
}

//  MinPerimeterRectangle
function solution(N) {
  // write your code in JavaScript (Node.js 14)
  let minPeri = Number.MAX_SAFE_INTEGER;
  let L = Math.round(Math.sqrt(N));
  for (let i = 1; i <= L; i++) {
    if (N % i === 0) {
      minPeri = Math.min(minPeri, 2 * (i + N / i));
    }
  }

  return minPeri;
}
