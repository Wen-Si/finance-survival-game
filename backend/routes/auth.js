const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const { generateToken } = require('../auth');

const router = express.Router();

router.post('/register', (req, res) => {
  try {
    const { username, password, nickname } = req.body;
    if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });
    if (username.length < 3 || username.length > 20) return res.status(400).json({ error: '用户名长度3-20个字符' });
    if (password.length < 6) return res.status(400).json({ error: '密码至少6个字符' });

    if (db.findUserByUsername(username)) return res.status(400).json({ error: '用户名已存在' });

    const hash = bcrypt.hashSync(password, 10);
    const user = db.createUser(username, hash, nickname || username);
    const token = generateToken(user);
    res.json({ token, user: { id: user.id, username: user.username, nickname: user.nickname } });
  } catch (e) {
    console.error('Register error:', e);
    res.status(500).json({ error: '注册失败' });
  }
});

router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });

    const user = db.findUserByUsername(username);
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
      return res.status(400).json({ error: '用户名或密码错误' });
    }

    const token = generateToken(user);
    res.json({ token, user: { id: user.id, username: user.username, nickname: user.nickname } });
  } catch (e) {
    console.error('Login error:', e);
    res.status(500).json({ error: '登录失败' });
  }
});

module.exports = router;
