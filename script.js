//your JS code here. If required.
// function fizzBuzz() {
//             let output = '';

//             for (let i = 1; i <= 20; i++) {
//                 if (i % 3 === 0 && i % 5 === 0) {
//                     output += 'FizzBuzz\n';
//                 } else if (i % 3 === 0) {
//                     output += 'Fizz\n';
//                 } else if (i % 5 === 0) {
//                     output += 'Buzz\n';
//                 } else {
//                     output += i + '\n';
//                 }
//             }

//             return output;
//         }
// alert(fizzBuzz());

function fizzBuzz() {
let output = '';

            
            const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

           
            numbers.forEach((number) => {
                if (number % 3 === 0 && number % 5 === 0) {
                    output += 'FizzBuzz\n';
                } else if (number % 3 === 0) {
                    output += 'Fizz\n';
                } else if (number % 5 === 0) {
                    output += 'Buzz\n';
                } else {
                    output += number + '\n';
                }
            });

            return output;
        }

  
        alert(fizzBuzz());