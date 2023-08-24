const OddNumbers = (numbers) => {
    return numbers.reduce((oddSum, number) => {
      if (number % 2 !== 0) {
        return oddSum + number;
      }
      return oddSum;
    }, 0);
  };
  
  const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddSum = OddNumbers(numbersArr);
  console.log(oddSum); // Output: 25 (1 + 3 + 5 + 7 + 9)
