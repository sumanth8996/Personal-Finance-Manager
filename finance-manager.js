'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FinanceManager;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var select_1 = require("@/components/ui/select");
var card_1 = require("@/components/ui/card");
function FinanceManager() {
    var _a = (0, react_1.useState)([]), transactions = _a[0], setTransactions = _a[1];
    var _b = (0, react_1.useState)('expense'), type = _b[0], setType = _b[1];
    var _c = (0, react_1.useState)(''), category = _c[0], setCategory = _c[1];
    var _d = (0, react_1.useState)(''), amount = _d[0], setAmount = _d[1];
    var _e = (0, react_1.useState)(''), description = _e[0], setDescription = _e[1];
    var addTransaction = function (e) {
        e.preventDefault();
        var newTransaction = {
            id: Date.now(),
            type: type,
            category: category,
            amount: parseFloat(amount),
            description: description
        };
        setTransactions(__spreadArray(__spreadArray([], transactions, true), [newTransaction], false));
        setCategory('');
        setAmount('');
        setDescription('');
    };
    var totalIncome = transactions
        .filter(function (t) { return t.type === 'income'; })
        .reduce(function (sum, t) { return sum + t.amount; }, 0);
    var totalExpenses = transactions
        .filter(function (t) { return t.type === 'expense'; })
        .reduce(function (sum, t) { return sum + t.amount; }, 0);
    var balance = totalIncome - totalExpenses;
    return (<div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Personal Finance Manager</h1>
      
      <card_1.Card className="mb-6">
        <card_1.CardHeader>
          <card_1.CardTitle>Add Transaction</card_1.CardTitle>
        </card_1.CardHeader>
        <card_1.CardContent>
          <form onSubmit={addTransaction} className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label_1.Label htmlFor="type">Type</label_1.Label>
                <select_1.Select value={type} onValueChange={function (value) { return setType(value); }}>
                  <select_1.SelectTrigger>
                    <select_1.SelectValue placeholder="Select type"/>
                  </select_1.SelectTrigger>
                  <select_1.SelectContent>
                    <select_1.SelectItem value="income">Income</select_1.SelectItem>
                    <select_1.SelectItem value="expense">Expense</select_1.SelectItem>
                  </select_1.SelectContent>
                </select_1.Select>
              </div>
              <div className="flex-1">
                <label_1.Label htmlFor="category">Category</label_1.Label>
                <input_1.Input id="category" value={category} onChange={function (e) { return setCategory(e.target.value); }} placeholder="e.g., Food, Rent, Salary"/>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label_1.Label htmlFor="amount">Amount</label_1.Label>
                <input_1.Input id="amount" type="number" value={amount} onChange={function (e) { return setAmount(e.target.value); }} placeholder="Enter amount"/>
              </div>
              <div className="flex-1">
                <label_1.Label htmlFor="description">Description</label_1.Label>
                <input_1.Input id="description" value={description} onChange={function (e) { return setDescription(e.target.value); }} placeholder="Enter description"/>
              </div>
            </div>
            <button_1.Button type="submit">Add Transaction</button_1.Button>
          </form>
        </card_1.CardContent>
      </card_1.Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <card_1.Card>
          <card_1.CardHeader>
            <card_1.CardTitle>Total Income</card_1.CardTitle>
          </card_1.CardHeader>
          <card_1.CardContent>
            <p className="text-2xl font-bold text-green-600">${totalIncome.toFixed(2)}</p>
          </card_1.CardContent>
        </card_1.Card>
        <card_1.Card>
          <card_1.CardHeader>
            <card_1.CardTitle>Total Expenses</card_1.CardTitle>
          </card_1.CardHeader>
          <card_1.CardContent>
            <p className="text-2xl font-bold text-red-600">${totalExpenses.toFixed(2)}</p>
          </card_1.CardContent>
        </card_1.Card>
        <card_1.Card>
          <card_1.CardHeader>
            <card_1.CardTitle>Balance</card_1.CardTitle>
          </card_1.CardHeader>
          <card_1.CardContent>
            <p className={"text-2xl font-bold ".concat(balance >= 0 ? 'text-green-600' : 'text-red-600')}>
              ${balance.toFixed(2)}
            </p>
          </card_1.CardContent>
        </card_1.Card>
      </div>

      <card_1.Card>
        <card_1.CardHeader>
          <card_1.CardTitle>Recent Transactions</card_1.CardTitle>
        </card_1.CardHeader>
        <card_1.CardContent>
          <ul className="space-y-2">
            {transactions.slice().reverse().map(function (transaction) { return (<li key={transaction.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <p className="font-semibold">{transaction.category}</p>
                  <p className="text-sm text-gray-500">{transaction.description}</p>
                </div>
                <p className={"font-bold ".concat(transaction.type === 'income' ? 'text-green-600' : 'text-red-600')}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </p>
              </li>); })}
          </ul>
        </card_1.CardContent>
      </card_1.Card>
    </div>);
}
