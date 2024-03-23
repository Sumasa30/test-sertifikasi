const express = require('express');
const connectDB = require('./db');
const User = require('./model/userModel.js');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

// Koneksi ke MongoDB
connectDB();

// Endpoint untuk membuat user baru
app.post('/api/users', async (req, res) => {
  try {
    const data = req.body;
    const user = new User(data);
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    console.log(req.body);
    res.status(500).send('Terjadi kesalahan saat membuat user.');
  }
});

// Endpoint untuk mendapatkan semua user
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Terjadi kesalahan saat mengambil users.');
  }
});

// Endpoint untuk mendapatkan user berdasarkan ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User tidak ditemukan.' });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Terjadi kesalahan saat mengambil user.');
  }
});

// Endpoint untuk mengupdate user berdasarkan ID
app.put('/api/users/:id', async (req, res) => {
  try {
    const data = req.body;
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User tidak ditemukan.' });
    }
    user.name = data.name;
    user.email = data.email;
    user.username = data.username;
    user.password = data.password;
    user.phone = data.phone;

    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Terjadi kesalahan saat mengupdate user.');
  }
});

// Endpoint untuk menghapus user berdasarkan ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User tidak ditemukan.' });
    }
    await user.remove();
    res.json({ msg: 'User berhasil dihapus.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Terjadi kesalahan saat menghapus user.');
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
