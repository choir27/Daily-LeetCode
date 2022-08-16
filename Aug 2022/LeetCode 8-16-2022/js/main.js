// 387. First Unique Character in a String
// Easy
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.


//FIRST TRY
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for(let i = 0;i<s.length;i++){
        if(s[i]!== s[i+1] && s[i]!== s[i-1]){
            return i
        }
    }
    return -1
};

//given a string of s
//find first non-repeating character and return its index
//return -1 if it doesn't exist
// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

//1. go through each element of the string
//2 define what is non-repeating
//3. find the first non-repeating element
//4. return that element's index


//2nd Try

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const count = {
        
    }
    for(let i = 0;i<s.length;i++){
    count[s[i]] = 0
    }
    
    for(let i = 0;i<s.length;i++){
    count[s[i]]+=1
    }
    
    for(let i =0;i<s.length;i++){
        if(count[s[i]]===1){
            return i
        }
    }
    return -1

  
};

//given a string of s
//find first non-repeating character and return its index
//return -1 if it doesn't exist
// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

//1. go through each element of the string
//2.  define what is non-repeating
//3. count how many times an element appears in the string
//4. find the first non-repeating element
//5. return that element's index