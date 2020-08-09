/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
     function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
  
    let pParents = [];
    let qParents = [];
    
    const stack = [{node: root, path: []}];    
    
    while(stack.length > 0) {
        const current = stack.shift();
        const {node, path} = current;
        path.push(node.val);
        if (node.val === p.val) pParents = [...path];
        if (node.val === q.val) qParents = [...path];
        if (node.left) stack.push({node: node.left, path: [...path]});
        if (node.right) stack.push({node: node.right, path: [...path]});
    }
    
    let lca = null;
    
    if (pParents.includes(p.val) && qParents.includes(p.val)) {
        lca = p.val;
    } else if(pParents.includes(q.val) && qParents.includes(q.val)) {
        lca = q.val;
    } else {
        for(let i = pParents.length - 1; i >= 0; i--) {
            const pValue = pParents[i];
            const qValue = qParents[i];
            if (pValue === qValue) {
                lca = qValue
                break
            }
        }
    }  

    return new TreeNode(lca)
};