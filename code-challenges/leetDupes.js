var removeDuplicates = function (nums) {
    let ins = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] !== nums[i]) {
            nums[ins] = nums[i]; //same pos really
            ins++;
        }
    }
    return ins;
};

console.log(removeDuplicates([1,1,2]))