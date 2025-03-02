const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ExpenseTacker');

// const Cat = mongoose.model('E', { name: String });

const ExpenseSchema = new mongoose.Schema({
    title :  {
        type: String,
        required: true
      },
    amount :  {
        type: Number,
        required: true
      },
    category_id : {
        type: Number,
        required: true
      }
});

const ExpenseModel = mongoose.model('Expenses',ExpenseSchema);

module.exports = ExpenseModel;