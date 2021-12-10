# GitHub 开源项目
* [fucking-algorithm](https://github.com/labuladong/fucking-algorithm)
* [leetcode](https://github.com/azl397985856/leetcode)
* [LeetCodeAnimation](https://github.com/MisterBooo/LeetCodeAnimation)
  * 用动画的形式呈现解LeetCode题目的思路
* [TheAlgorithms](https://github.com/TheAlgorithms/Python)



# 刷题
* [力扣](https://leetcode-cn.com/problemset/algorithms/)


# 奥利给
1. 两数之和
```python
# 来源：力扣（LeetCode）
def twoSum(nums, target):
    hashmap={}
    for i, num in enumerate(nums):
        if hashmap.get(target - num) is not None:
            return [i, hashmap.get(target - num)]
        hashmap[num] = i #这句不能放在if语句之前，解决list中有重复值或target-num=num的情况
```
