// // var num1=25;
// // var num2=50;
// // var total=num1+num2;
// // console.log(total)

// // function areaOfCircle(radius){
// //     const pi=3.14;
// //     console.log(pi*radius*radius)
// // }
// // areaOfCircle(7)
// // const name1 = 'hello';
// // console.log(name1.charAt(1));

// // const name2 = 'hello';
// const name3 = 'world';
// console.log(name2.concat(' ', name3));

 // const name4 = 'hello world';
// console.log(name4.indexOf('o')); 

// console.log((34).toString())
// console.log((343).toString())

// let x = 9.656;
// console.log(x.toExponential(2))
// console.log(x.toExponential(3))
// console.log(x.toExponential(5))
 
// let array = [];
// array[0] = "html";
// array[1] = "css";
// array[100] = "javascript";
// console.log(array)
// let x=3;
// x++;
// console.log(x)


function fullname(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullname("Jebanesan", "Mary Powsteena"));



console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")


console.log(" 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125" )

// Create a new Date object representing the current date and time
const now = new Date();

// Get the current year
const currentYear = now.getFullYear();

// Get the current month (0-11, where 0 is January and 11 is December)
const currentMonth = now.getMonth() + 1; // Adding 1 to convert it to 1-12

// Get the current date
const currentDate = now.getDate();

// Get the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
const currentDay = now.getDay();

console.log(`Current year: ${currentYear}`);
console.log(`Current month: ${currentMonth}`);
console.log(`Current date: ${currentDate}`);
console.log(`Current day of the week: ${currentDay}`);


let m = 2;
let b = -2; 
let xIntercept = -b / m;
let yIntercept = b;

console.log("Slope (m): " + m);
console.log("X-Intercept: " + xIntercept);
console.log("Y-Intercept: " + yIntercept);

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope = (y2 - y1) / (x2 - x1);

console.log("Slope: " + slope);

// Question-10
let array = [1,2,3,4,5,6,7];
const result = array.filter(evenNum);
function evenNum(num) {
  return num%2 == 0;
}
console.log(result)

// Question-11
let arrayy = [1,2,3,4,5,6,7];

// Question - 12
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

    const filterBooksByPage = books.filter((books) => {
      return books.pages > 100;
    },{});
    console.log(filterBooksByPage)

    const filterBooksByPage1 = books.filter((books) => {
      return books.pages < 300;
    },{});
    console.log(filterBooksByPage1)

    const filterBooksByGenre = books.filter((books) => {
      return books.genre == "Fiction";
    },{});
    console.log(filterBooksByGenre)

// Map Method

const titles = books.map((books) => {
  return books.title;
  });
  console.log(titles)

  //get total number of pages

const totalNumber = books.reduce((sum,books) => {
  return sum + parseInt(books.pages);
}, 0);
console.log("Total number of pages: " + totalNumber)  


//get the total number of books by publication-year
const totalNumberByPublicationYear = books.reduce((result,books) => {
  if(typeof result[books.publication_year] === "undefined") {
    result[books.publication_year] = 1;
  }
  else{
    result[books.publication_year]++;
  }
  return result;
},{});
console.log("Total number of books by publication year: " + totalNumberByPublicationYear)


// callback example
// getStudent(1,(student) =>{
//   console.log("Student data: " ,student);
// })
// function getStudent(id,callback) {
//   setTimeout(())}