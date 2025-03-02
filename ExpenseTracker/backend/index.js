const express = require('express')
const ExpenseModel = require('./config/dbConnection');

const app = express();

app.get('/getData',async (req,resp)=>{
    let data = await ExpenseModel.find({});
    resp.send(data);
});

app.get('/insert', async (req, resp)=>{
    let data = new ExpenseModel({
        // title: 12,
        amount: 45000,
        category_id: 1
    });
    try{
        let result = await data.save();
        resp.send(result);
    }catch(error){
        console.log(error)   
    }
})


const insert = async () =>{
    
    
}

// insert();


app.listen(4000)