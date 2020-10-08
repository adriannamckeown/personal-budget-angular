// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = { 
        myBudget: [
        {
            title: 'Eat out',
            budget: 45
        },
        {
            title: 'Rent',
            budget: 320
        },
        {
            title: 'Grocery',
            budget: 150
        },
        {
            title: 'Clothes',
            budget: 100
        },
        {
            title: 'Entertainment',
            budget: 45
        },
        {
            title: 'Transportation',
            budget: 75
        },
        {
            title: 'Utilities',
            budget: 150
        }
    ]
};

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});