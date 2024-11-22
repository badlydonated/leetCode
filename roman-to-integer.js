// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. 
// The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// My attempt
// take in a string, a roman numeral
// return an integer representing the roman numeral

function romanToInteger(s){
    let romanNums = {
        'I':1,
        'IV':4,
        'V':5,
        'IX':9,
        'X':10,
        'XL':40,
        'L':50,
        'XC':40,
        'C':100,
        'CD':400,
        'D':500,
        'CM':900,
        'M':1000,
    }
    let result = []

    // if(s.contains('IX')){
    //     result.push(romanNums['IX'])
    // }
    // if(s.contains('XL')){
    //     result.push(romanNums['XL'])
    // }
    // if(s.contains('XC')){
    //     result.push(romanNums['XC'])
    // }
    // if(s.contains('CD')){
    //     result.push(romanNums['CD'])
    // }
    // if(s.contains('CM')){
    //     result.push(romanNums['CM'])
    // }
  
}

console.log(romanToInteger('MCMXCIV'), 1994)

// Leetcode hash map solution
// I had the right idea using a hash map but I didn't understand how to use it, or how to do the subtraction part. 
// In this solution only the single symbols are used in the hash map. Then using a for loop, the string can be
//  iterated over. 
// To compare the current character to the next character in the string, two variables are declared,
//  one containing the value of the current key [i] is. The other contains the current position plus one to ultimately
//  target the next character in the string. 
// Now the current char and next char of the string can be compared to determine what subtraction if any needs to happen
// If the current val is less than the next value then the current val should be subtracted from the next val
//  and added to whatever is in result AND 'i' gets incremented by one. This is in addition to the increment of the loop.
// This is done to skip over the char val that was subtracted from.   
// If the current val is larger than the next value, the current value gets added to result.
// Once the loop completes, return result.
function romToInt(s){
    let result = 0
    const romanNums = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    for(let i = 0; i < s.length; i++){
        const currentValue = romanNums[s[i]]
        const nextValue = romanNums[s[i+1]]

        if(currentValue < nextValue){
            result += nextValue - currentValue;
            i++;
        }else if (currentValue > nextValue){
            result += currentValue
        }
    }
    return result
}

console.log(romToInt('MCMXCIV'), 1994)