//给定一个二叉树，找出其最大深度
const maxDepth = root => {
    if(root === null){
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    const childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return childDepth + 1; 
} 