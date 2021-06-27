//给定一个包含n个整数的数组nums,判断nums中是否存在三个元素a,b,c
//使得a + b + c = 0,找出所有满足条件且不重复的三元组
//例如: nums [-1,0,1,2,-1,-4],满足要求的三元组集合为:[[-1,0,1],[-1,-1,2]]
const threeSum = nums => {
    const res = [];
    const uniqueMap = {};
    //nums.sort();
    const len = nums.length;
    for(let i = 0;i < len - 2;i++){
        for(let j = i + 1;j < len - 1;j++){
            for(let k = j + 1;k < len;k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    const item = [nums[i],nums[j],nums[k]];
                    if(!uniqueMap[item.join('')]){
                        res.push(item)
                        uniqueMap[item.join('')] = 1;
                    }
                }
            }
        }
    }
    return res;
}
console.log(threeSum([1,0,-1,-1,-1,2,2,-2]))