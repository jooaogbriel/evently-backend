const main = () => {
    const generateRandomArray = () => {
      const randomArray = [];
      for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
      }
      return randomArray;
    };
  
    const findMinAndMax = (numbers) => {
      if (numbers.length === 0) {
        return "Array is empty";
      }
  
      let min = numbers[0];
      let max = numbers[0];
  
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
          min = numbers[i];
        } else if (numbers[i] > max) {
          max = numbers[i];
        }
      }
  
      return { min, max };
    };
  
    // Generate an array of 20 random numbers
    const randomNumbers = generateRandomArray();
  
    // Find the lowest and highest numbers in the array
    const result = findMinAndMax(randomNumbers);
  
    console.log("Random Array:", randomNumbers);
    console.log("Lowest Number:", result.min);
    console.log("Highest Number:", result.max);
  };
  main();