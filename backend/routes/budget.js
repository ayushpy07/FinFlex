const express = require('express');
const router = express.Router();

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() { this.root = null; }
    insert(key) { this.root = this._insertRec(this.root, key); }
    _insertRec(node, key) {
        if (!node) return new Node(key);
        if (key < node.key) node.left = this._insertRec(node.left, key);
        else if (key > node.key) node.right = this._insertRec(node.right, key);
        return node;
    }
    search(key) { return this._searchRec(this.root, key); }
    _searchRec(node, key) {
        if (!node) return false;
        if (key === node.key) return true;
        return key < node.key ? this._searchRec(node.left, key) : this._searchRec(node.right, key);
    }
}

router.post('/analyze', (req, res) => {
    const { income, transactions } = req.body;
    const tree = new BinarySearchTree();
    const recurring = [];
    transactions.forEach(t => {
        if (tree.search(t.description)) recurring.push(t.description);
        else tree.insert(t.description);
    });
    res.json({ recurringExpenses: recurring });
});

module.exports = router;
