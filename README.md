# Personal-Finance-Manager

Personal Finance Manager is a web application built with Next.js, React, and Prisma that helps you track your income and expenses, providing a clear overview of your financial situation.

## Features

- Add income and expense transactions
- Categorize transactions
- View total income, expenses, and current balance
- List of recent transactions
- Persistent data storage using a SQLite database

## Technologies Used

- Next.js 13 (App Router)
- React
- TypeScript
- Prisma ORM
- SQLite
- Tailwind CSS
- shadcn/ui components

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Git

## Installation

1. Clone the repository:

gh repo clone sumanth8996/Personal-Finance-Manager


2. Navigate to the project directory:
 cd personal-finance-manager

3. Install the dependencies:
   npm install


4. Set up the database:
   npx prisma generate
   npx prisma migrate dev --name init



   
5. Create a `.env` file in the root directory and add your database URL:

      DATABASE_URL="file:./dev.db"

## Usage

1. Start the development server:
  npm run dev

2. Open your browser and visit `http://localhost:3000`

3. Use the form to add new transactions:
- Select the transaction type (Income or Expense)
- Enter the category (e.g., Salary, Rent, Groceries)
- Input the amount
- Provide a description (optional)
- Click "Add Transaction" to save

4. View your financial summary:
- Total Income
- Total Expenses
- Current Balance

5![pfm](https://github.com/user-attachments/assets/08f2a9b5-6938-44da-9763-f6df9126a2ea)
. Review your recent transactions in the list at the bottom of the page

![pfm2](https://github.com/user-attachments/assets/2339ec5e-f5c7-433f-b284-c3a52ca905f2)



  



