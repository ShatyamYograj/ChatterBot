const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then( () => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "send exam sheets",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "pritam",
        msg: "hello bhai",
        created_at: new Date(),
    },
    {
        from: "tina",
        to: "mina",
        msg: "kya haaal hai apka",
        created_at: new Date(),
    },
    {
        from: "riya",
        to: "diya",
        msg: "send exam answers",
        created_at: new Date(),
    },
    {
        from: "nisha",
        to: "riya",
        msg: "send watermellon",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);

