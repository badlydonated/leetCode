// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting 
// some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
 
// Constraints:
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// My attempt
// take in 2 parameters. strings. only lc english letters. s.length greater than or equal to 0 
//  and less than or equal to 100. t.length is greater than or equal to 0
//  and less than or equal to 104.
// return true or false based on whether s is a subsequence of t.

var isSubsequence = function (s,t){
    //use two pointers to loop through each of the strings independently and compare each character for equality
    let pointer1 = 0;
    let pointer2 = 0;

    while(pointer1 < s.length){
        if (s[pointer1]===t[pointer2]){
            pointer1 ++;
            pointer2 ++;
        } else {
            pointer2 ++;
            if(pointer2 > t.length){
                return false
            }
        }
    }
    return true
} 

console.log(isSubsequence('abc', 'ahbgdc'),true)
console.log(isSubsequence('axc', 'ahbgdc'),false)