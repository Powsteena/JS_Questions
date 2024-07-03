// Part 1
// Q1 - Declare a function fullName, and now it takes firstName and lastName as parameters 
// and returns your full name.
function fullname(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullname("Jebanesan", "Mary Powsteena"));

// Q2 - Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.
// ' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// Q3 - Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log(" 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")

// Q4 - Count the number of all and  in the following sentence:
// There is a commonly stated “rule” of grammar that beginning a sentence with 
//and, or any other conjunction, is a mistake. But this is just not true.
// This supposed “rule” has no basis in actual writing, and even formal writing
// features plenty of sentences that start with and and other conjunctions.
// And we think that is really cool. 
let sentence = "There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool."
let countAnd = (sentence.match(/and/g) || []).length;
let countOr = (sentence.match(/or/g) || []).length;
console.log("The number of 'and' is " + countAnd);
console.log("The number of 'or' is " + countOr);

// Q5 - Use the Date object to do the following activities
// What is the year now?
const now = new Date();
const currentYear = now.getFullYear();
console.log(`Current year: ${currentYear}`);

// What is the month now as a number?
const currentMonth = now.getMonth() + 1;
console.log(`Current month: ${currentMonth}`);

// What is the date today?
const currentDate = now.getDate();
console.log(`Current date: ${currentDate}`);

// What is the day today as a number?
const currentDay = now.getDay();
console.log(`Current day of the week: ${currentDay}`);

// Q6 - Calculate the slope, x-intercept, and y-intercept of y = 2x -2
let m = 2;
let b = -2;
let xIntercept = -b / m;
let yIntercept = b;
console.log("Slope : " + m);
console.log("X-Intercept: " + xIntercept);
console.log("Y-Intercept: " + yIntercept);

// Q7 - Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log("Slope: " + slope);

// Q8 - Write a script that prompts users to enter hours and rate per hour. Calculate the pay of the person.
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = prompt("Enter hours: ");
let ratePerHour = prompt("Enter rate per hour: ");
let weeklyEarning = hours * ratePerHour;
console.log("Your weekly earning is " + weeklyEarning);
alert("Your weekly earning is " + weeklyEarning);

// Q9 - Using the prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let birthYear = prompt("Enter birth year: ");
let age = currentYear - birthYear;
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`);
    alert(`You are ${age}. You are old enough to drive`);
} else {
    let yearsToWait = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait
        } years.`);
    alert(`You are ${age}. You will be allowed to drive after ${yearsToWait
        } years.`);
}

// Q10 - Declare an Array number and assign value (1,2,3,4,5,6,7). Print all even numbers using the filter method.
let array = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = array.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Q11 - Declare an Array and assign value (1,2,3,4,5). Display all Square numbers using Map Method
let array1 = [1, 2, 3, 4, 5];
let squareNumbers = array1.map(num => num * num);
console.log(squareNumbers);

// Q12 - 
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        pages: 336,
        publication_year: 1925,
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        pages: 328,
        publication_year: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        pages: 432,
        publication_year: 1813,
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        pages: 180,
        publication_year: 1925,
    },
];
// Get an array of all titles
let titles = books.map(book => book.title);
console.log(titles);

// Get an array of all authors
let authors = books.map(book => book.author);
console.log(authors);

// Get an array of objects with just title and author properties
let titleAndAuthor = books.map(book => ({ title: book.title, author: book.author }));
console.log(titleAndAuthor);

// Get the total number of pages for all books
let total_pages = books.reduce((acc, book) => acc + book.pages, 0);
console.log(total_pages);

// Get the total number of books by publication_year  (using a map of publication_year to count):
let publication_year_count = books.reduce((acc, book) => {
    if (acc[book.publication_year]) {
        acc[book.publication_year]++;
    } else {
        acc[book.publication_year] = 1;
    }
    return acc;
}, {});
console.log(publication_year_count);

// Get the total number of characters in all the book titles:
let total_chars = books.reduce((acc, book) => acc + book.title.length, 0
);
console.log(total_chars);


// Get the total number of books by genre (using a map of genre to count):
let genre_count = books.reduce((acc, book) => {
    if (acc[book.genre]) {
        acc[book.genre]++;
    } else {
        acc[book.genre] = 1;
    }
    return acc;
}, {});
console.log(genre_count);

// Filter books with more than 100 pages
let long_books = books.filter(book => book.pages > 100);
console.log(long_books);

// Filter books with less than 200 pages
let short_books = books.filter(book => book.pages < 200);
console.log(short_books);

// Filter books with a genre of "Fiction"
let fiction_books = books.filter(book => book.genre === "Fiction");
console.log(fiction_books);

// Filter books with a genre of "Romance"
let romance_books = books.filter(book => book.genre === "Romance");
console.log(romance_books);

// Q13 - Write a function that given the input string name, returns the greeting statement Welcome <name> to the team.?
function greet(name) {
    return `Welcome ${name} to the team.`
}
console.log(greet("John")); // Output: Welcome John to the team.

// Q14 - Balan drinks 0.5 litres of water per hour of cycling. Given the time in hours, you need to return the number of litres of water that Balan will drink, rounded to the smallest value.
function litres(time) {
    return Math.floor(time * 0.5);
}
console.log(litres(3));

// Q15 - Given an array of numbers, write a function that returns the sum of all of the positive ones. If the array is empty, the sum should be 0.
function sumPositiveNumbers(arr) {
    return arr.reduce((acc, num) => num > 0 ? acc + num : acc
    , 0);
    }
    console.log(sumPositiveNumbers([1, -2, 3, 4, -5]));

 // Q16 - Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBmi(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Invalid input";
    }
    let bmi = weight / (height * height);
    console.log("Calculated BMI:", bmi);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(calculateBmi(70, 1.7));




    // Part 2 
    // Condition

    // Q1 - Write a program that determines whether a given number is positive or negative. (Tenary)
    function checkPositiveNegative(number) {
        return number > 0 ? 'Positive' : (number < 0 ? 'Negative' : 'Zero');
    }
    console.log(checkPositiveNegative(5));

    // Q2 - Write a program that checks if a number is even or odd. (ternary)
    function checkEvenOdd(number) {
        return number % 2 === 0 ? 'Even' : 'Odd'
    }
    console.log(checkEvenOdd(4));

    // Q3 - Write a program to determine the greater of two numbers. (ternary)
    function greaterNumber(a, b) {
        return a > b ? a : b;
    }
    console.log(greaterNumber(10, 20));

    // Q4 - Write a program that calculates the ticket price based on age with the following conditions: 
    // ages below 12 pay a ticket price of 5, ages below 18 pay a ticket price of 10, 
    // ages below 60 pay a ticket price of 20, aged over 60 play a ticket price of 15.
    function getTicketPrice(age) {
        return age < 12 ? 5 :
            age < 18 ? 10 :
                age < 60 ? 20 :
                    15;
    }
    console.log(getTicketPrice(10));

    // Q5 - Write a program that determines if a year is a leap year.
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    console.log(isLeapYear(2020));

    // Q6 - Write a program that calculates a discount based on the purchase amount.
    // Prices equal to or over 100 discount have a discount of 20. 
    // Prices equal to or over 50 have a discount of 10. Otherwise, the discount is 0
    function calculateDiscount(price) {
        return price >= 100 ? 20 :
            price >= 50 ? 10 :
                0;
    }
    console.log(calculateDiscount(120));

    // Q7 - Write a program that greets the user based on the time of day.
    // Display good morning, good afternoon or good evening based on the time of day when you run the code.
    function greetUser() {
        const now = new Date();
        const hour = now.getHours();

        const greeting = hour < 12 ? 'Good morning' :
            hour < 18 ? 'Good afternoon' :
                'Good evening';

        console.log(greeting);
    }
    greetUser();

    // Q8 -  Write a simple number-guessing game. Provide a secret number and a guess.
    // Based on those numbers give players clues if their guess is higher, lower or correct.


    // Part 3
    // Loop

    // Q1 - prints from 0 to 5.
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }

    // Q2 - sum all the numbers from 0 to 99
    let sum = 0;
    for (let i = 0; i <= 99; i++) {
        sum += i;
    }
    console.log(sum);

    // Q3 - sum only even numbers from 10 to 100
    let total = 0;
    for (let i = 10; i <= 100; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    console.log(total);

    // Q4 - Using a for loop outputs the elements in reverse order
    let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }

    // Q5 - Given two arrays of integers. Add up each element in the same position and
    // create a new array containing the sum of each pair. Assume both arrays are of the same length.
    let arr_3 = [4, 6, 7];
    let arr_4 = [8, 1, 9];
    let result = [];
    for (let i = 0; i < arr_3.length; i++) {
        result.push(arr_3[i] + arr_4[i]);
    }
    console.log(result);

    // Q6 - Given a string change the every second letter to an uppercase ‘Z’. Assume
    // there is no space. 
    // Example output: 
    // jZvZsZrZpZ OR each letter on a new line
    // HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
    let str1 = "javascript";
    let result_str = "";
    for (let i = 0; i < str1.length; i++) {
        if ((i + 1) % 2 === 0) {
            result_str += str1[i].toUpperCase();
        } else {
            result_str += str1[i];
        }
    }
    console.log(result_str);

    // Q7 - Get the sum of two arrays…actually the sum of all their elements.
    // P.S. Each array includes only integer numbers. Output is a number too.
    let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
    let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
    // Example output: 
    // 276 + 351 = 627
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr_1.length; i++) {
        sum1 += arr_1[i];
    }
    for (let i = 0; i < arr_2.length; i++) {
        sum2 += arr_2[i];
    }
    console.log(sum1 + sum2);



