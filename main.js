// Bootcamp Algorithm challenge/solutions - itskills 2022
const {log} = console;
/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

function convertToFahrenheit(C) {
  const F = (C * 9/5) + 32;
  return F;
}
//console.log(convertToFahrenheit(20));


/*
    2. Given an integer array nums, move all the even integers 
    at the beginning of the array  followed by all the odd integers. 
    Return any array that satisfies the condition
    Example: 
    Input: nums = [3,1,2,4]
    output: [2,4,3,1]
    Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3] 
    would also be accepted
 */
    function evenFirstThenOdd(nums){
        let even = [];
        let odd = [];
        for(let i=0; i<nums.length; i++){
            if(nums[i] % 2 === 0){
                even.push(nums[i]);
            }else{
                odd.push(nums[i]);
            }
        }

        return even.concat(odd);
    }
    // console.log(evenFirstThenOdd([3,1,2,4]))

    /*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

        function convertToSeconds(min){
            //60 seconds = 1minute;
            const sec = 60 * min;
            return sec;
        }
        // console.log(convertToSeconds(3))

    /*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
        
        function isEven(num){
            if(num % 2 ===0){
                return true
            }else{
                return false
            }
        }
        // console.log(isEven(9))

    /* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
        function incrementByOne(num){
          return ++num //num + 1
        }
        // console.log(incrementByOne(0))

    /* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */

        function calcPower(v,c){
            const p = v * c;
            return p
        }
        // console.log(calcPower(230,10))

    /*
        You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */
     function finalPoint(arg1, arg2){
        const twoPointer = 2 * arg1;
        const threePointer = 3 * arg2;

        return twoPointer + threePointer;
     }
    //console.log(finalPoint(5,7))

    /*
        Repeat a given string str (first argument) for num times (second argument). 
        Return an empty string if num is not a positive number. 
        For the purpose of this challenge, do not use the built-in .repeat() method.

        Example:
        repeatStringNumTimes("*", 3) should return the string ***.
         repeatStringNumTimes("abc", 3) should return the string abcabcabc.
    */
   
         function repeatStringNumTimes(str, num){
             let final = ''
             for(let i=0; i<num; i++){
                 final += str // final = final + str
             }
             return final;

         }
        //  console.log(repeatStringNumTimes("grace", 5))


    /*
        Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. 
        If no element passes the test, return undefined.
        Example:
        findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) 
        should return 8.

        findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) 
        should return undefined.
    */

        const findElement = (arr, func)=>{
                const result = arr.find(func)
                return result;
               //alternative
                // for(let i=0; i<arr.length; i++){
                //     let num = arr[i]
                //         if(func(num)){
                //             return num
                //         }
                // }
                // return undefined
        }

        // console.log(findElement([1, 3, 5, 5, 10, 11], function(num) { return num % 2 === 0; }))

        /*
                Write a function that splits an array (first argument) into groups the length of size (second argument) 
                and returns them as a two-dimensional array.

                Example:
                chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

                chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

                chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

                chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

        */

    function chucnks(arr, size){
        // let newArray = [];
        // while(arr.length > 0){
        //      newArray.push(arr.splice(0, size))
        // }
        // return newArray;
        //alternative
        let newArray = []
        for(let i=0; i<arr.length; i+=size){
            newArray.push(arr.slice(i, i+size))
        }
        return newArray
    }

    // console.log(chucnks([0, 1, 2, 3, 4, 5], 4))

    const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
    function itCom(arr){
        let newComp = [];
        for(let i=0; i<arr.length; i++){
          
          let newA = arr[i].match(/o/gi)
          if(!Array.isArray(newA) || (Array.isArray(newA) && newA.length == 1)){
           newComp.push(arr[i])
          }
        }
        return newComp;
    
    }

    // console.log(itCom(itCompanies))

    /*
    

Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present 
in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

    */

    function searchOut(arr, obj){
        let objKeys = Object.keys(obj)
        
        return arr.filter(object => {
            log(object['last'])
            for(let i=0; i<objKeys.length; i++){
                log(object[objKeys[i]] != obj[objKeys[i]])
                   if(!object.hasOwnProperty(objKeys[i]) || object[objKeys[i]] != obj[objKeys[i]]){
                        return false
                   }
            }
            return true
        })
    }

    // log(searchOut([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet",  }))



      /* 

            Perform a search and replace on the sentence using the arguments provided and return the new sentence.

            First argument is the sentence to perform the search and replace on.

            Second argument is the word that you will be replacing (before).

            Third argument is what you will be replacing the second argument with (after).

            Note: Preserve the case of the first character in the original word when you are replacing it. 
            For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

            Template:
            myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

            myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

            myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
      */
        function searchAndReplace(str, before, after){
                const index = str.indexOf(before)

                // using regx
                if(/^[A-Z]/.test(before)){
                    after = after[0].toUpperCase() + after.substring(1)
                }else{
                    after = after[0].toLowerCase() + after.substring(1)
                }

                // log(str[index] === str[index].toUpperCase())
                // if(str[index] === str[index].toUpperCase()){
                //     after = after.charAt(0).toUpperCase() + after.slice(1)
                // }else{
                //     after = after.charAt(0).toLowerCase() + after.slice(1)
                // }
                // log('before', before)
                // log('after', after)
               return  str.replace(before, after)
        }

        // log(searchAndReplace("Let us go to the store", "store", "mall"))
        

    /*
    
        We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
        The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers 
        between 1 and 4 (both inclusive) is 10.

        sumAll([1, 4]) should return 10.

        sumAll([4, 1]) should return 10.

        sumAll([5, 10]) should return 45.

        sumAll([10, 5]) should return 45.
    */

    function sumAll(arr){
        //  sort method
        const sorted = arr.sort((a,b) => a-b)
        // Math function
        const min = Math.min(...arr)//sorted[0]
        const max = Math.max(arr[0], arr[1])// sorted[1]
  
        let sum = 0
        for(let i=min; i <= max; i++){
                sum += i //sum = sum + i
        }

        return sum
        
    }

    // log(sumAll([200, 1]))



    /*
        SUM ALL PRIME:
        A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2
        is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
        divisible by 1, 2 and 4.

        Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

        sumPrimes(10) should return 17.
        sumPrimes(977) should return 73156.

        note:We only need to check up to the square root because the square root 
        of a number is the largest possible unique divisor.
    */
     function sumPrime(num){
        let sum = 0;
        // sum all primes only
        for(let i=2; i<=num; i++){
            if(isPrime(i)){
                sum += i;//summ = sum + i
            }
        }
        return sum

            // check that number is a prime
        function isPrime(num){
            for (let i = 2; i < num; i++) {
                if(num%i == 0){
                    return false
                }
            }
            return true
        }
     }

    //  log(sumPrime(10))
        

        /*
            Writea function that converts a string to spinal case. 
            Spinal case is all-lowercase-words-joined-by-dashes.

            Examples:
            spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap
            spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap
            spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show
            spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh
            spinalCase("AllThe-small Things") should return the string all-the-small-things
        */
   
            function spinalCase(str){
                const regx_1 = /[\s+|_+]/g
                const regx_2 = /([a-z])([A-Z])/g

                str = str.replace(regx_2, '$1 $2')
               
                return str.replace(regx_1, '-').toLowerCase()

            }

            // log(spinalCase('AllThe-small Things'))




    /*
        Write a function that takes two or more arrays and returns a new array of unique values
        in the order of the original provided arrays. In other words, all values present from all 
        arrays should be included in their original order, but with no duplicates in the final array. 
        The unique numbers should be sorted by their original order, but the final array 
        should not be sorted in numerical order.

        uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
        uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
        uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
    */

        function uniteUnique(...arrs){
        //    first solution
            let concatArray = [];
            let allArg = concatArray.concat(...arrs)
            return allArg.filter((item,i) => allArg.indexOf(item) === i)

           //second solution
            // let unique = [];
            // let concatArray = [];
            // let allArg = concatArray.concat(...arrs)
            // for(let i=0; i<allArg.length; i++){
            //     if(!unique.includes(allArg[i])){
            //         unique.push(allArg[i])
            //     }
            // }
            // return unique

            // 3rd solution
            // for(let i=0; i<arrs.length; i++){
            //     // log(arrs[i])
            //     let secondArray = arrs[i]
            //     for(let j=0; j<secondArray.length; j++){
            //             // log(secondArray[j])
            //             if(!unique.includes(secondArray[j])){
            //                 unique.push(secondArray[j])
            //             }
            //     }
            // }
            // return unique

        }

        // log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))


        /*
            DNA Pairing Pairs of DNA strands consist of protein base pairs. 
            Base pairs are represented by the characters AT and CG, which form building blocks of 
            the DNA double helix. The DNA strand is missing the pairing element. 
            Write a function to match the missing base pairs for the provided DNA strand. 
            For each character in the provided string, find the base pair character. 
            Return the results as a 2d array.

            pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
            pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
        */

            // using foreach will require that you split the string to convert it to an array
            function pairElement(str){
                const result = [];
                const newArr = str.split('');
                newArr.forEach(element => {
                    switch(element){
                        case 'A':
                            result.push(['A', 'T'])
                            break;
                        case 'T':
                            result.push(['T', 'A'])
                            break;
                        case 'C':
                            result.push(['C', 'G'])
                            break
                        case 'G':
                            result.push(['G', 'C'])
                            break
                    }
                });
                return result
            }
            // log(pairElement("ATCGA"))

                // using for loop
            // function pairElement(str){
            //     let pairedDNA = []
            //     function pairBases(base){
                   
            //           switch(base){
            //                 case 'A':
            //                     pairedDNA.push(['A', 'T'])
            //                     break;
            //                 case 'T':
            //                     pairedDNA.push(['T', 'A'])
            //                     break;
            //                 case 'C':
            //                     pairedDNA.push(['C', 'G'])
            //                     break
            //                 case 'G':
            //                     pairedDNA.push(['G', 'C'])
            //                     break
            //           }
            //     }
                   
            //     for(let i=0; i<str.length; i++){
            //         const singlePair = str[i];
            //        pairBases(singlePair);
            //     }
            //     return pairedDNA

            // }
            // log(pairElement("ATCGA"))


            
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
Examples:
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
*/
function drop(arr, func){
    // using findIndex
    const index = arr.findIndex(func)
    return arr.slice(index > 0 ? index : arr.length)

    //for loop
    // for(let i=0; i<arr.length; i++){
    //     const item = arr[0]
    //     log(item)
    //     if(arr.length > 0 && func(item)){
    //         break;
    //     }else{
    //         arr.shift()
    //     }
    // }
    // return arr
   
    // while(arr.length > 0 && !func(arr[0])){
    //     arr.shift()
    // }
    // return arr
}

// log(drop([1, 2, 3, 4], function(n) {return n >= 3;}))


/*


Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers 
that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple 
of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

*/

function lcm(arr){
    log( arr.sort((a,b) => a - b))
    const [min, max] = arr.sort((a,b) => a - b)
    // const sorted= arr.sort((a,b) => a - b)
    // const min = sorted[0]
    // const max = sorted[1]

    // lenght of numbers btw min max including min and max
    let numerMultiples = max - min + 1
    
    // get the highest SCM

        let upperBound = 1;
    for(let i = min; i<=max; i++){
            upperBound *= i; // upperBound = upperBound * i
    }
  
    // let get all multiples 0f the max

    for(let multiple = max; multiple <= upperBound; multiple += max){
        // test all values including min and max for even divisions
        let counts  = 0
        for(let i = min; i <=max; i++){
            if(multiple % i === 0){
                counts += 1;
            }
        }

        if(counts === numerMultiples ){
            return multiple
        }
    }

}

// log(lcm([5,1]))

 
/*
   Integer Reversal
    Given an integer, reverse the order of the digits
*/
function reverseInt(int){
    const integer = parseInt(int);
    const rev = integer.toString().split('').reverse().join('')
    log(typeof parseInt(rev))
    return parseInt(rev)
}
// log(reverseInt(123))

/*
Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 2, print out “Fizz”; 
when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
*/
function FizBuzz(num){
    let result = []
  for(let i=1; i<=num; i++){
     
    //    i%2 === 0 && i%3 === 0 ? result.push('FizzBuzz') : i%3===0 ? result.push('Buzz') : i%2===0 ? result.push('Fizz') :  result.push(i)
        if(i%2===0 && i%3 ==0){
            result.push('FizzBuzz')
        }else if(i % 3 === 0){
            result.push('Buzz')
        }else if(i% 2 === 0 ){
            result.push('Fizz')
        }else{
            result.push(i)
        }
  }

  return result
}
// log(FizBuzz(20))
/*
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/

const vowels = string => {
    // Using Regex
    // let testPattern = /[aeiou]/gi
    // let count;
    // let result = string.match(testPattern);
    // count = result.length;
    // return count

    // Using foreach and map method
    // let vowels = ['a', 'e', 'i', 'o', 'u']
    // let splitedString = string.split('')
    // let selectedVowels = []

    // vowels.map(vowel => {
    //    splitedString.forEach(string => {
    //     if(string.toLowerCase() === vowel.toLowerCase()){
    //         selectedVowels.push(string)
    //     }
    //    })
    // })
    // log(selectedVowels)
    // return selectedVowels.length

    let count = 0;
    let vowels = 'aeiou'
    for(let character of string){
        log(character)
        if(vowels.includes(character)){
                count++
        }
    }
    return count;
  };

//   log(vowels('integrityisamuist'))
  

// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function nElements(arr,n){
    if(n <=0 || arr.length === 0) return [];
    if(!n && arr.length > 0) return arr[0];

    let elems = [];
    for(let i=0; i<n; i++){
        if(arr[i] !== undefined){
            elems.push(arr[i]);
        }
    }
    return elems;
} 

// console.log(nElements([7, 9, 0, -2],6))

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// function dashBtwEvenNums(nums){
//     const numString = nums.toString().split('');
//     for(let i = x; i <numString.length; i++){
//         if()
//     }
//     console.log(numString)
// }

// let n = 0254608
// console.log(dashBtwEvenNums(n))


/* Given an array of integers, find the pair of adjacent elements 
that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product. */

const largestAdjacentProduct = (arr) =>{
    let products = []
    let prevElem = arr[0];
    for(let x = 1; x < arr.length; x++){
        products.push(arr[x] * prevElem)
        prevElem = arr[x];
    }
    
    return Math.max(...products)
}

// console.log(largestAdjacentProduct([3, 6, -2, -5, 7, 8]))

/*

const returnLargest = (arr) => {
   let args =  arr.map(item  => 
        arr[arr.indexOf(item)] * arr[arr.indexOf(item) + 1]
        
    )
    let largest = args.reduce((a, b) => Math.max(a,b))

    console.log(largest)
}
returnLargest([3,6,-2,-5,7,3])
*/

/*

    let z = -Infinity;
    
    for(let i = 0;i <inputArray.length;i++){
        if(inputArray[i] * inputArray[i + 1] > z){
            z = inputArray[i] * inputArray[i + 1]
    }
}
return z

}
console.log(solution([3, 6, -2, -5, 7, 3]))
*/

/* 
    const  adjacentElementsProduct = (inputArray) => {

    //Assuming the sum index 0 and 1 is the largest
    let theLargestProduct = inputArray[0] * inputArray[1];

    for (let i = 0; i < inputArray.length; i++) {
        //getting the sum of the next 2 numbers in the array. 
        let theSum = inputArray[i] * inputArray[i + 1];
        
        if (theSum > theLargestProduct) {
            theLargestProduct = theSum;
        }
    }
    return theLargestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
*/

/*
Finding Anagrams - the problem

Write a function that checks that two strings passed into the function are anagrams.
Anagrams are words that have the same characters in the same quantity. 
This means that two strings are anagrams if we can rearrange one to get the other.
Here are some examples.

isAnagram('listen','silent') => true
isAnagram('rail safety','fairy tales') => true
isAnagram('coming','income') => false

*/

function isAnagram(str1,str2){
    const strLowercase_1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const strLowercase_2 = str2.replace(/[^\w]/g, '').toLowerCase();
    console.log(strLowercase_1, strLowercase_2)
   return strLowercase_1.split('').sort().join('') === strLowercase_2.split('').sort().join('')
}

// console.log(isAnagram('listen','silent'))

function isAnagram(str1,str2){
    const strLowercase_1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const strLowercase_2 = str2.replace(/[^\w]/g, '').toLowerCase();
    

      const a = getUniquekeys(strLowercase_1);
      const b = getUniquekeys(strLowercase_2)   
    
      for(let r in a){
            if(a[r] !== b[r]){
                return false
            }
      }
      return true

    function getUniquekeys(string){
        let objKey = {}
        for(let item of string){
            objKey[item] = objKey[item] + 1 || 1
        }
        return objKey
    }
}
// console.log(isAnagram('listen','silent'))

/* Write a function which takes in a string and
  returns counts of each character in the string
*/

/* Write a function which takes in an array of numbers and
  returns the count of unique values in the array
*/

/*  
    Write a function which takes in an array of numbers and
  returns a new array that doubles each item.

  double([1,2,3,4,5]) => [1,4,6,8,10]
*/

function double(array){
    let arrDoubled = []
    //1.return array.map((num)=> num * 2)

    //2.
    for(let i = 0; i<array.length; i++){
        arrDoubled = [...arrDoubled, array[i] * 2] // arrDoubled.push(array[i] * 2)
    }
     return arrDoubled;
}

// console.log(double([1,2,3,4,5]))

/* 
Given: an array containing hashes of names
  Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
  Example:
  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) => 'Bart, Lisa & Maggie'
  list([ {name: 'Bart'}, {name: 'Lisa'} ]) => 'Bart & Lisa'
  list([ {name: 'Bart'} ]) => 'Bart'
  list([]) => returns ''
*/

function list(arr){
    //chec if arr is empty and return 'no item'
    if(arr.length === 0) return 'no item'

    const names = arr.map((item) => item.name);

    if(names.length === 2){
        return names.join(' & ')
    }else if(names.length > 2){
        let restArr = [];
        let lastTwoArr = [];
        //  ['john', 'sayo', 'moji','shade'] => 'john, sayo, moji & shade'

        //push everything into the array aside the last two
        for(let i = 0; i < names.length - 2; i++){
            restArr.push(names[i]);
        }
        for(let i = names.length - 2; i < names.length; i++){
            lastTwoArr.push(names[i]);
        }
        
        const restArrToString = restArr.join(', ');
        const lastTwoArrToString = lastTwoArr.join(' & ');
        return `${restArrToString}, ${lastTwoArrToString}`
    }

    return names.join('')

}

// console.log(list([ {name: 'Bart'} ]));

/*   
create a function called isIsogram that takes one argument, a word to test if its an isogram.
Isogram is a word with no repeating letters 
This function should return a boolean indicating whether it is an isogram(true) or not (false).

Example: 
isIsogram("Dermatoglyphics") => true
isIsogram('andra') => false
isIsogram('anabel') => false
*/

function isIsogram(str){
   let strToLowerCase = str.toLowerCase();

   const uniqueChar = new Set(strToLowerCase)
   const uniqueCharToString = [...uniqueChar].join('')
   return uniqueCharToString.length === strToLowerCase.length;
}

// console.log(isIsogram('andra'))

/* 
     Given a string, return the character that is most commonly used in the string.
        --Examples:
        maxChar("abccccd") => "c"
        maxChar("aaaabbccc") => "a"
*/

 function maxChar(str){
    const count = {};
    for(let i of str){
        if(count[i]){
            count[i] = count[i] + 1
        }else{
            count[i] = 1
        }
        // oe  count[i] = count[i] + 1 || 1
    }

    let maxCountKey = '';
    let maxCountValue = 0;
    for(let key in count){
        if(count[key] > maxCountValue){
            maxCountKey = key;
            maxCountValue = count[key];
        }
    }

    return maxCountKey
 }

//  console.log(maxChar("abccccd"))

/* Write a function which will take one string argument containing characters between a-z, 
  and should remove all repeated characters (dupliacates) in the string.
  The function should be called removeDuplicates and return an object literal containing a 'uniques' property, 
  which should be the sorted input string but without any duplicates or special characters.
  The returned object should also have a 'duplicates' property which should represent the total number of duplicate characters dropped
  For example
  removeDuplicates('th#elex_ash?')
  Returns
  {uniques: 'aehlstx', duplicates: 2}
*/

function removeDuplicates(str){
    //remove special character
        const reg = /[^a-zA-Z]+/g
       const cleanStr = str.replace(reg, '')
    // get unique character from str
    const unique = [...new Set(cleanStr)].join('')
    console.log(unique)
    const duplicate = cleanStr.length - unique.length

    return {unique: unique, duplicate:duplicate}

}

// console.log(removeDuplicates('th#elex_ash?'))

/*  
    write a function that performs linear search on an array of items received as arguement (first parameter). 
    second parameter is the item to be searched.
    Linear Search is defined as a sequential search algorithm that starts at one end 
    and goes through each element of a list until the desired element is found, 
    otherwise the search continues till the end of the data set. It is the easiest searching algorithm 
    
    example => 
    linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 6) => 6
    linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 10) => -1

*/

function linearSearch(arr, num){
    console.time('linearSearch')
     for(let i=0; i<arr.length; i++){
        if(arr[i]===num){
            console.timeEnd('linearSearch')
            return arr[i]
        }
     }

     console.timeEnd('linearSearch')
     return -1
    
} 
//0.126ms
//console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20], 20))
/*  
    write a function that performs binary search on an array of numbers received as arguement (first parameter). 
    second parameter is the item to be searched.
        
    Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 
    The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 

   Hint:
    Begin with the mid element of the whole array as a search key.
    If the value of the search key is equal to the item then return an index of the search key.
    Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
    Otherwise, narrow it to the upper half.
    Repeatedly check from the second point until the value is found or the interval is empty.
    
    example => 
    binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6) => 6
    binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10) => -1

*/+

function binarySearch(arr, num){
    console.time('binarySearch')
   const sorted = arr.sort((a,b)=> a-b);
   let start = 0;
   let end = sorted.length - 1;
   let middle = Math.floor((start + end) / 2);
  
   while(sorted[middle] !== num && start < end){
        if(sorted[middle] > num){
                end = middle - 1;
        }else{
             start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
   }
 
   console.timeEnd('binarySearch');
   return sorted[middle] === num ? sorted[middle] : -1

}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20], 10)) 
