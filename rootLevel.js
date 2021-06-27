//给定一个二叉树，返回其按层次遍历的节点值
const levelOrder = root => {
    //把遍历的结果返回到一个数组
    const levels = [];
    //root为0时，返回空数组
    if(!root){
        return levels;
    }
    const helper = (node,level) => {
        //数组的长度和level一样时，levels[level] = []
        if(levels.length === level){
            levels.push([]);
        }
        //levels[level] = node.value
        levels[level].push(node.value)
        //如果node有左节点，遍历左节点的值
        if(node.left){
            //遍历左节点，层次+1
            helper(node.left,level+1) 
        }
        //如果node有右节点，遍历右节点的值
        if(node.right){
            //遍历右节点，层次+1
            helper(node.right,level+1)
        }
    }
    helper(root,0)
    return levels;
}
const test = levelOrder({
    value:'第一层',
    left:{
        value:'第二层左',
        // left:{
        //     value:'第三层左左',
        // },
        // right:{
        //     value:'第三层左右',
        // }
    },
    right:{
        value:'第二层右',
        left:{
            value:'第三层右左',
            left:{
                value:"4左"
            },
            right:{
                value:"4右"
            }
        },
        right:{
            value:'第三层右右'
        }
    }
},0)
console.log(test)