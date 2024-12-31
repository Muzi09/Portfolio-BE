const express = require("express");
const ContactForm = require("../Models/ContactForm");

const router = express.Router();

// Handle form submission
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body)

  try {
    const newForm = new ContactForm({ name, email, phone, message });
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting the form", error });
  }
});

module.exports = router;
