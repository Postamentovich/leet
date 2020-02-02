/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    const dic = {}
    
    function traverseTree(node, level){
        if (node) {
            if (node.val !== null) dic[level] = dic[level] ?  [...dic[level], node.val] : [node.val]
            if (node.left) traverseTree(node.left, level + 1)
            if (node.right) traverseTree(node.right, level + 1)
        }
    }
    
    traverseTree(root, 1);
    
    return Object.keys(dic).map(el => {
        return [...dic[el]]
    })
};