// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// My attempt
// take in an array of strings
// return the longest common prefix (string) or empty string if none exist

let longestCommonPrefix = function(strs){

}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))

// leetcode solution
let longestCommonPrefix1 = function(strs) {
    let pref = strs[0]; 
    let prefLen = pref.length; 

    for (let i = 1; i < strs.length; i++) { 
        let s = strs[i]; 

while (pref !== s.substring(0, prefLen)) { 
    prefLen--; 
    if (prefLen === 0) { 
return ""; 
    } 
    pref = pref.substring(0, prefLen); 
} 
    } 
    return pref; 
};
