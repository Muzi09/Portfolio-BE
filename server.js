const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactFormRoute = require("./Routes/contactFormRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb+srv://amzikhan711:Muzi123@contacts.tsgu3.mongodb.net/?retryWrites=true&w=majority&appName=Contacts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/contact", contactFormRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
