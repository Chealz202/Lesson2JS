//All questions should be printed to your Browser's console using console.log()//

//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.//
//Do not use numbers to reference the last element, find it programmatically.//
//ages[7] - ages[0] is not allowed!//
//1a
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1]- ages[0];
console.log("minusAge", minusAge);

//1b
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).//
ages.push(88)
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

//Use a loop to iterate through the array and calculate the average age.
//1.c
let sumOfAges = 0;

for(let i = 0; i < ages.length; i++){

sumOfAges += ages[i];
console.log("index:", i, "sumOfages:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges /ages.length;
console.log("Average", average);


//2a
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//Use a loop to iterate through the array and calculate the average number of letters per name.
let totalCharacters = 0;
for(let i = 0; i < names.length; i ++){
    
    totalCharacters += names[i].length;
    console.log('index', i, 'name:', names[i], 'totalCharacters', totalCharacters);
}
let averageName = totalCharacters / names.length;
console.log("Average of Names:", averageName);

//2b
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatNames = '';
for (let i = 0; i < names.length; i++){
    concatnames = concatNames.concat(names[i])
    console.log('Names concatenated', concatNames)
}
//3
//How do you access the last element of any array? 
// To access the last element of the array you will want to provide a "length - 1 " feature like the example below. 
console.log ("To access the last element of the array ages:", ages[ages.length - 1]);

//4
//How do you access the first element of any array?
// To access the first element of a array you will want to use the index{[0]}
console.log ("To access the first element in the array:",ages[0]);

//5
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add 
// the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = []
    for(let i = 0; i < names.length; i++){
    console.log("name lengths array:", nameLengths);
}

//6
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i ++){
    charsTotal += nameLengths[i];
    console.log("CharsTotal:", charsTotal);
}

//7
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatWords(word, n){
console.log("word par:", word, "n Par", n);
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3);

//8
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){
    let fullName = firstName + ' '+lastName
    console.log(fullName);
}
fullName("Mike", "Smith");


//9
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total = 0;
    for (let i = 0; i< array.length; i ++){
        total += array[i];
        console.log("Total:", total)
    }
    if (total > 100){
        console.log (total, true);
        return true;
    }else{
        console.log ("total", total, false);
        return false;
    }
}
sumNumbersArray(numbers1);


//10
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calNumberAve(array){
    let total = 0;
    for(let i =0; i<array.length; i++){
      total += array[i]
      console.log("Total:", total);
    }

    let average = total / array.length
    console.log(average);
    return average
}
calNumberAve(numbers1);

//11
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
// is greater than the average of the elements in the second array.

let numbers3 = [100,100,100];
let numbers4 = [100,100,94];

function twoAverages(array1,array2){
    console.log("Par:", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1){
        total1 += number
        console.log("Current Num:", number, "Total:", total1);

    }
    for (const number of array2){
        total2 += number
        console.log("Current Num:", number, "Total:", total2);
        
    }
    let average1 = total1 /array1.length;
    let average2 = total2 / array2.length;
    console.log( "averages:", average1, average2);

    if (average1 > average2){
        console.log(true);
        return true
    }else if (average1 < average2){
        console.log(false);
        return false; 
    }else {
        console.log("numbers are equal");
    }
}


//12
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
//  and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


function willBuyDrink(isHotOutSide, moneyInPocket){
console.log ( " Parameters", isHotOutSide, moneyInPocket);
let buyDrink = isHotOutSide === true && moneyInPocket > 10.5;
console.log("buy a drink?", buyDrink);
return buyDrink;

}

willBuyDrink(true, 11);



//13
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
/*remove duplicates - this function takes an array as input and returns a new array with all duplicate values removed.
 
 I created this function because dealing with duplicate values is a common issue in data processing,
 Having a clean, unique set of values is often necessary for filtering.
 */


function removeDuplicates(arr) {
    // Check if the input is actually an array
    if (!Array.isArray(arr)) {
        return 'Invalid input: Please provide an array';
    }

    // Use a Set to remove duplicates
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 1, 1, 2, 3, 3, 4, 5]));
console.log(removeDuplicates(['Peas','Peas','Carrots','Snap Peas']));
  

