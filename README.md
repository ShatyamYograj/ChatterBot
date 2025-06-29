# 🧠 Chatter Bot - Mini Web Chat App

A simple and interactive chatbot web application built with **Express.js**, **MongoDB**, and **Node.js**. This project simulates a basic chatbot experience with support for full **CRUD operations** and displays **timestamped messages** to track conversation history.

---

## 📌 Features

- 📝 Create, Read, Update, Delete (CRUD) messages
- 💬 Interactive chatbot responses
- 🕒 Timestamp for each message
- 🗃 MongoDB-based message storage
- 🛠 RESTful API structure using Express
- 📦 Clean and modular code for easy scalability

---

## 🚀 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Optional: EJS for templating)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose

---

## 📁 Project Structure

chatter-bot/
├── public/ # Static assets (CSS, JS, images)
├── views/ # Frontend templates (EJS or HTML)
├── routes/ # Express route handlers
├── models/ # Mongoose schemas
├── controllers/ # Logic for handling CRUD and bot replies
├── app.js # Entry point of the server
└── package.json


---

## 🧪 API Endpoints

| Method | Route           | Description                  |
|--------|------------------|------------------------------|
| GET    | `/messages`      | Get all messages             |
| POST   | `/messages`      | Add a new message            |
| PUT    | `/messages/:id`  | Update an existing message   |
| DELETE | `/messages/:id`  | Delete a message             |

---

## 🕹 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShatyamYograj/chatter-bot.git
   cd chatter-bot

2. Install dependencies

   npm install

3. Set up MongoDB

   - Make sure MongoDB is running locally
    
   - Or connect to MongoDB Atlas and update the MongoDB URI in a .env file

4. Start the server

   npm start
5. Visit the app

  http://localhost:8080
  
🧠 Future Enhancements

   - Add user authentication
   
   - Improve chatbot intelligence using AI/NLP APIs
   
   - Save conversation sessions

🙌 Contributing

  - Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License

  - This project is open source and available under the MIT License.


👤 Author

Shatyam Yograj
📧 shatyamyograj11@gmail.com


