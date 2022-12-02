    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    var twoSum = function(nums, target) {
        let array;
    for(let i = 0; i < nums.length ; i++){
    let sum = 0
    for(let index = 0 ; index < nums.length; index++){
        if(index !== i){
        sum += nums[index] + nums[i]

        if(sum === target){
        array = [i,index]
        }
        sum = 0
        }
    }
    }
    return array
    };

    //given an array of integers
    //and target number
    //return array of index of elements that add up to number target
    //don't use the same index


//     Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?