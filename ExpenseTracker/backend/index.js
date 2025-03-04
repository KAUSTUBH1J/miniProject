const express = require('express')
const ExpenseModel = require('./config/dbConnection');

const app = express();

const validateData = (req, res, next) => {
    const { title, amount, category_id } = req.body;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Title is required and must be a string' });
    }
    if (!amount || typeof amount !== 'number') {
      return res.status(400).json({ error: 'Amount is required and must be a number' });
    }
    if (!category_id || typeof category_id !== 'number') {
        return res.status(400).json({ error: 'category_id is required and must be a number' });
    }
    next();
};


app.get('/getData',  async (req,resp)=>{
    let data = await ExpenseModel.find({});
    resp.send(data);
});

app.get('/insert',validateData, async (req, resp)=>{
    console.log(req.body);
    
    // let data = new ExpenseModel({
    //     title: 'hello',
    //     amount: 45000,
    //     category_id: 1
    // });
    try{
        // let result = await data.save();
        // resp.send(result);
    }catch(error){
        console.log('Error -->')
        console.log(error)   
    }
})




app.listen(4000)