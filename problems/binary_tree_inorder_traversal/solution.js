/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
   const result = [];
    
    function traversTree (node) {
        if (node){
          if (node.left) {
            traversTree(node.left)
            }  
        
            if (node.val) result.push(node.val)
        
            if (node.right){
                traversTree(node.right)
             }
        }
    }
    
    traversTree(root)
   
    return result 
};
