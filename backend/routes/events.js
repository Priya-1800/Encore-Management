const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const auth = require('../middleware/authMiddleware');

// Add event (faculty only)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'faculty') return res.status(403).json({ error: 'Forbidden' });

  const { title, date, place } = req.body;
  const event = await Event.create({ title, date, place });
  res.json(event);
});

// Get all events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
