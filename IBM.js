// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10,001st prime number?

//input - integer (10,001)
//output - integer the value of the prime number at the index 
//constraints - 
//edge/examples - 6 => 13

//prime number only div by 1 and itself.

const findPrime = (targetIndex) => {
  //generate a list of all prime numbers until the new list.length (OBO) is equal to our target index 
  let result = [2,3,5,7,11,13];
  let start = 13;
  while (result.length <= targetIndex) {
    start++;
    let isPrime = true;
    //check to see if this new start is a prime number, if so, we'll add it to the result array
    for (let i = 0; i < result.length; i++) {
        //if the current number is divisible by the growing result array elements
        //modulo start % result[i]
        if (start%result[i] === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        result.push(start);
    }
  }
  return result[targetIndex - 1]
}

module.exports = {
    findPrime
}




//database - 
// Books - 
  //id - serial / autoINC int
  //title - varchar(100)
  //authorID - foreign (authors table)
  //genreID - for (genres table)
  //price - price int
  //stock - int
  //other - description

//authors - 
  //id
  //name
  //other - description
  
//genre - 
  //id
  //name 
  //other - description  


//OAUTH  
// users prim key
  //id
  //libary - BookIDs
  //other info


//verify that the items are in stock
//cart 
  //id autoINC 
  //userID - forkey reference user table
  //list of bookIDs
    //object of IDS 
    //{ id: quantity }
    // id key => +id, Number(id) 
  //accSumofPrices (not considering taxes)

//purchases
  //id
  //cartID for
  //userID
  //object of Books
  //totalPrice (with TAX?)   

