const { MongoClient } = require('mongodb');
const fs = require('fs');

// Correct URI with your actual MongoDB Atlas credentials
const uri = "mongodb+srv://ayushluckycharmer:Ayush%40007@cluster0.jlfbp6e.mongodb.net/";

async function loadMeals() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('your-database-name'); // Replace 'your-database-name' with the actual database name
    const mealsCollection = database.collection('meals');
    const labelsCollection = database.collection('labels');

    // Read meals.json file
    const data = JSON.parse(fs.readFileSync('meals.json', 'utf8'));

    // Insert labels
    await labelsCollection.insertMany(data.labels);

    // Insert meals
    await mealsCollection.insertMany(data.meals);

    console.log('Data successfully loaded into MongoDB');
  } catch (err) {
    console.error('Error loading data into MongoDB:', err);
  } finally {
    await client.close();
  }
}

loadMeals();
