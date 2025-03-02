import React, {useState, useEffect} from 'react';
import Card from './card';
import AddAmount from './PopUpModel/AddAmount'
export default function Home() {
    const [expense, setExpense] = useState([]);
    useEffect(()=>{
        GetAllExpense();

        
    },[]);

    const GetAllExpense = () =>{
        const expenses = [
            { _id: 1, title: "Fruits", amount: 100, category: "Food", timestamp: "2025-02-28 10:30 AM" },
            { _id: 2, title: "Electricity Bill", amount: 150, category: "Utilities", timestamp: "2025-02-27 08:15 PM" },
            { _id: 3, title: "Netflix Subscription", amount: 15, category: "Entertainment", timestamp: "2025-02-26 09:00 PM" },
            { _id: 4, title: "Gym Membership", amount: 50, category: "Health", timestamp: "2025-02-25 07:30 AM" },
            { _id: 5, title: "Fuel", amount: 80, category: "Transport", timestamp: "2025-02-24 05:45 PM" },
            { _id: 6, title: "Books", amount: 40, category: "Education", timestamp: "2025-02-23 03:20 PM" },
            { _id: 7, title: "Dining Out", amount: 60, category: "Food", timestamp: "2025-02-22 08:00 PM" },
            { _id: 8, title: "Phone Bill", amount: 70, category: "Utilities", timestamp: "2025-02-21 02:10 PM" },
            { _id: 9, title: "Movie Ticket", amount: 20, category: "Entertainment", timestamp: "2025-02-20 06:45 PM" },
            { _id: 10, title: "Online Course", amount: 120, category: "Education", timestamp: "2025-02-19 04:30 PM" },
          ];
          setExpense(expenses);
    }
  return (
    <div className='d-flex flex-column align-items-center '>
        <h2>Expense Tacker</h2>
        <div className='d-flex justify-content-center align-items-center flex-column w-100'>
            <div className='position-fixed bottom-0 end-0 m-3 z-3'> <AddAmount/> </div>
            <div className='w-50'>
                {expense.map((item)=>{
                    return <React.Fragment key={item._id}> <Card  title={item.title} amount={item.amount} category={item.category} timestamp={item.timestamp}/></React.Fragment>
                })}
            </div>
        </div>
    </div>
  )
}
