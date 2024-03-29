function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function deserialize(nodeString) {
  const splited = nodeString.split(",");
  let index = 0;

  function encode(splited) {
    if (index == splited.lenght || splited[index] == '#') {
      index++;
      return null;
    }

    const root = new Node(splited[index], null, null);
    index++;

    root.left = encode(splited);
    root.right = encode(splited);

    return root;
  }

  return encode(splited);
}

function serialize(root) {
  let serial = "";
  function decode(node) {
    if (node == null) {
      serial += "#,";
    } else {
      serial += node.val + ",";
      decode(node.left);
      decode(node.right);
    }
  }
  decode(root);
  return serial;
}