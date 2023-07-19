function groupArrayElements(x, N) {
  if (!Array.isArray(x) || N <= 0 || !x.length) {
    throw new Error(
      "Invalid input. The first argument must be an non empty array and N must be a positive integer." // checking invalid conditions and throw error
    );
  }
  const arraySize = x.length; // calculate length of the input array
  const subarraySize = Math.floor(arraySize / N); // calculate the length of equally sized arrays 
  const remainder = arraySize % N;
  const finalArray = []; // final array of equally sized arrays
  let startIndex = 0;
  for (let i = 0; i < N; i++) {
    const endIndex = startIndex + subarraySize + (i < remainder ? 1 : 0);
    finalArray.push(x.slice(startIndex, endIndex)); //select a portion of the original array given by startIndex and endIndex and push it into finalArray
    startIndex = endIndex;
  }
 return finalArray;
 }

const testArray = [1,2,3,4,5,6,7];
const N = 5;
const result = groupArrayElements(testArray, N);
console.log(result);