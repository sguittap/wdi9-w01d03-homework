console.log('js loaded');
//#1
//parameter: variable in the declaration of a function
//arguement: is the data you pass into the parameter of that function
//with global/local scope


//#2
//  const checkPalindrome = (word) => {
//     let reverseWord = word.toLowerCase(); 
//     if(reverseWord.split('').reverse().join('') === reverseWord){
//         console.log(reverseWord.split(' ').reverse().join(' '));
//         return true;
//      } else {
//          console.log(reverseWord.split(' ').reverse().join(' '));
//          return false;
//      }
//  }
//  console.log(checkPalindrome('Racecar'));

//#3
//  const sumDigits = (num) => {
//      let digits = num.toString().split('');
//      let totalOfDigits = 0;
//      for(i=0;i < digits.length;i++){
//         totalOfDigits += parseInt(digits[i]);
//      }console.log(totalOfDigits);
// }       
// sumDigits(5693);

//#4
// const calculateSide = (sideA, sideB) => {
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }
// console.log(calculateSide(9,12));

//#5

// const sumArray = (arr) => {
//      let totalOfDigits = 0;
//       for(i=0;i < arr.length;i++){
//          totalOfDigits += arr[i];
//       }console.log(totalOfDigits);
// }
// sumArray([1,2,3,4]);

//#6
//orginal
// const  checkPrime = (num) => {
//     if(num < 2){ 
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if(num%i==0){
//             return false;
//     } else{
//         return true;
// }
// }
// }
//console.log(checkPrime(14));

//new
// const checkPrime = (prime) => {
//     const squareRoot = Math.sqrt(prime);
//     for (let i=2; i<squareRoot; i++){
//         if(prime%i === 0){
//             return false;
//         }else{
//         return true;
//             }
//     }
// }
// console.log(checkPrime(7));

//NOT ANSWERED. NEED HELP
//  const printPrimes = (num) => {
//  const squareRoot = Math.sqrt(num);
//     let newPrime = checkPrime(num);
//     for(i=0; i < num.length; i ++){
//         if(newPrime === true){
//             console.log(i);
//             }
//         }
    
//     }
// printPrimes(7);


