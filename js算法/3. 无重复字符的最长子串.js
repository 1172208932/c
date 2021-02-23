/*
    给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

    示例 1:

    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const processed = [];
    let max = 0;
    for(let i=0;i<s.length;i++){
        let index = processed.indexOf(s[i])
        if(index != -1){
            processed.splice(0,processed.length)
        }
        processed.push(s[i])
        max = Math.max(processed.length,max)
    }
    return max
};
