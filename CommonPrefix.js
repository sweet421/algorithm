//输入:["flower","flow","flight"]
//输出:"fl"
//最长相同前缀
const longestCommonPrefix = (strsArr) => {
    const findCommonPrefix = (a,b) => {
        let i = 0;
        while(i < a.length && i < b.length && a.charAt(i) === b.charAt(i)){
            i++;
        }
        return i ? a.substring(0,i) : '';
    }
    if(strsArr.length > 0){
        let commonPrefix = strsArr[0];
        for(let i = 1;i<strsArr.length;i++){
            commonPrefix = findCommonPrefix(commonPrefix,strsArr[i]);
        }
        return commonPrefix;
    }
    return '';
}
let test = longestCommonPrefix(['striab','striah','striabcj']);
console.log(test);

