const express = require('express');
const app = express();
app.use(express.json());

// Import Logic Modules
const taxRoutes = require('./routes/tax');
const loanRoutes = require('./routes/loan');
const cashflowRoutes = require('./routes/cashflow');
const budgetRoutes = require('./routes/budget');

// Connect Routes
app.use('/api/tax', taxRoutes);
app.use('/api/loan', loanRoutes);
app.use('/api/cashflow', cashflowRoutes);
app.use('/api/budget', budgetRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`FineFlex Server running on port ${PORT}`));
