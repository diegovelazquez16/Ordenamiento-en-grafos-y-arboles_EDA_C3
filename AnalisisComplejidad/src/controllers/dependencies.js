import BST from '../models/BST/BST.JS';

let dataset = [];
const dataTree = new BST();
          dataset.forEach(data => dataTree.add(data));

export default dataTree;
