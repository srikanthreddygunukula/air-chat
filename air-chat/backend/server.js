const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./configurations/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept JSON Data

app.get("/", (req, res) => {
  res.send("API is Running Sucessfully");
});

app.use("/api/user", userRoutes);

app.use("/api/chat", chatRoutes);

app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9000;

app.listen(9000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
