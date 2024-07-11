const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 8000;


const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.use(cors());

app.get('/api/meals', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('your-database-name');
    const mealsCollection = database.collection('meals');
    const meals = await mealsCollection.find({}).toArray();
    res.json(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).send('Error fetching meals');
  }
});

app.get('/api/tags', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('your-database-name');
    const labelsCollection = database.collection('labels');
    const labels = await labelsCollection.find({}).toArray();
    res.json(labels);
  } catch (error) {
    console.error('Error fetching labels:', error);
    res.status(500).send('Error fetching labels');
  }
});


app.post('/api/orders', async (req, res) => {
    const { customerName, total, mealOrders, drinkOrders } = req.body;
  
    try {
      const ordersCollection = req.db.collection('orders');
  
     
      const newOrder = {
        customerName,
        total,
        mealOrders,
        drinkOrders,
        createdAt: new Date()
      };
  
      
      const result = await ordersCollection.insertOne(newOrder);
  
      res.status(201).json({ message: "Order placed successfully", orderId: result.insertedId });
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: "Failed to place order" });
    }
  });

  // Add this endpoint to fetch all orders
app.get('/api/orders', async (req, res) => {
  try {
    const ordersCollection = req.db.collection('orders');
    const orders = await ordersCollection.find({}).toArray();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
