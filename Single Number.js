/**
 * @param {number[]} nums
 * @return {number}
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
 var singleNumber = function(nums) {
    let sorted = nums.sort();
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i-1] !== sorted[i] && sorted[i+1] !== sorted[i]) {
            return sorted[i];
    }
  }
}