const express = require('express');
const router = express.Router();
const FormSubmission = require('../models/formSubmission');

router.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newSubmission = new FormSubmission({ name, email, message });
        await newSubmission.save();
        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form', error });
    }
});

module.exports = router;