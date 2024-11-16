

// 26.Bookstore Purchase Summary

// function bookstorePurchaseSummary(){
//   let noOfBooks = prompt("Enter the number of books : ")
//   let total = 0;
//   level1 = 0;
//   level2 = 0;
//   level3 = 0;
//   for(let i= 0 ;i<noOfBooks;i++){
//     let bookName  = prompt("Enter the book name  :   ")
//     let bookPrice = +prompt("enter the book price : ")
     
//     total += bookPrice;
    
//     if(bookPrice<20){
//       level1++;
//     }else if(bookPrice>20&&bookPrice<80){
//      level2++;
//     }else if(bookPrice>80){
//       level3++;
//      }else{
//       console.log("Enter a valid price! ")
//      }
//   }

//   console.log(`total bill : ${total}`);
//   console.log(`level1 :${level1}`);
//   console.log(`level2 :${level2}`);
//   console.log(`level3 :${level3}`);
// }
// bookstorePurchaseSummary()


// ---------------------------------------------


// 27.Movie Rating Calculator



// function movieRatingCalculator(){
//   let ratings = +prompt("Enter the number of ratings : ")
//   let total = 0;
//   for(let i = 0 ;i<ratings;i++){
//       let rate = prompt("Enter the ratings : ")
//       total += +rate;
//   }
//   console.log(total/ratings)
// }
// movieRatingCalculator()

// ---------------------------------------------------

// 28. Personal Savings Calculator


// function savings{
// let income = prompt("Enter the income : ");
// let expenses = prompt("Enter the expensives:  ")

// let savings = income - expenses;

// if (savings >= (25 / 100) * income) {
//   console.log(`you are saving good amount of money`);
// }
// else if ((savings >= (10 / 100) * income) && (savings < (25 / 100) * salary)) {
//   console.log(`you need to save a little more money`);
// }
// else if (savings < (10 / 100) * income) {
//   console.log(`you need to save money `);
// }
// else if (income <= 0) {
//   console.log(`you are in loss and you are not saving money`);
// }
// }

// -----------------------------------------------------
// 29. Journey Time Estimation

// function journeyTimeEstimation(){
//   let distance = prompt("enter the distance : ")
//   let speed = prompt("enter the speed: ")


// let time = (distance/speed);

// return time;
// }

// console.log(journeyTimeEstimation());


// --------------------------------------------------------

// 30.School Marksheets

// function total() {
//   let total = 0;
//   let maths = Number(prompt("enter math marks:"));
//   let physics = Number(prompt("enter physics marks:"));
//   let chemistry = Number(prompt("enter chemistry marks:"));
//   total = maths + physics + chemistry;
//   return total;
// }
// function avgOfStudent() {
//   let num = Number(prompt("enter number of students:"));
//   for (let i = 1; i <= num; i++) {
//       let total = total();
//       console.log(`the total of the student ${i} is ${total} and the average is ${total / 3} `)
//   }
// }

