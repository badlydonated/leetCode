// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:
// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

// My attempt
var mergeAlternately = function(word1, word2) {
    let merged = []
    let word1Arr = word1.split('')
    let word2Arr = word2.split('')
    let maxLength = Math.max(word1Arr.length, word2Arr.length)
    console.log(word1Arr)
    for(let i = 0; i < maxLength; i++){
        if(word1Arr[i] != undefined){
            merged.push(word1Arr[i])
        }
        if(word2Arr[i] != undefined){
            merged.push(word2Arr[i])
        }
    }
    return merged.join('')
};

console.log(mergeAlternately('abc', 'pqr'))

// Top Leetcode solution
var mergeAlternately = function(word1, word2) {
    let result = '';
     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
     }
     return result;
   };