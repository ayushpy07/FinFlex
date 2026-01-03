const express = require('express');
const router = express.Router();

let transactions = [];

router.post('/add', (req, res) => {
    const { from, to, amount } = req.body;
    transactions.push({ from, to, amount });
    res.json({ message: 'Added', transactions });
});

router.get('/optimize', (req, res) => {
    const balances = {};
    transactions.forEach(({ from, to, amount }) => {
        balances[from] = (balances[from] || 0) - amount;
        balances[to] = (balances[to] || 0) + amount;
    });

    const balanceArray = Object.entries(balances)
        .filter(([_, b]) => b !== 0)
        .sort((a, b) => b[1] - a[1]);

    const result = [];
    while (balanceArray.length > 1) {
        const maxCredit = balanceArray[0];
        const maxDebt = balanceArray[balanceArray.length - 1];
        const amount = Math.min(maxCredit[1], -maxDebt[1]);

        result.push({ from: maxDebt[0], to: maxCredit[0], amount });
        maxCredit[1] -= amount;
        maxDebt[1] += amount;

        if (maxCredit[1] === 0) balanceArray.shift();
        if (maxDebt[1] === 0) balanceArray.pop();
    }
    res.json({ optimized: result });
});

module.exports = router;
