// Register
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password: hashed, role });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'User already exists' });
  }
});