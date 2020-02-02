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
var postorderTraversal = function(root) {
     const result = [];
    
    function traversTree (node) {
        if (node){
          if (node.left) {
            traversTree(node.left)
            }  
            
            if (node.right){
                traversTree(node.right)
             }
        
            if (node.val) result.push(node.val)
        
        }
    }
    
    traversTree(root)
   
    return result 
};