const express = require('express');
const db = require('../db');
const { authMiddleware } = require('../auth');

const router = express.Router();

router.post('/save', authMiddleware, (req, res) => {
  try {
    const { state, name } = req.body;
    if (!state) return res.status(400).json({ error: '存档数据不能为空' });
    db.saveGameState(req.user.id, name || '存档1', JSON.stringify(state));
    res.json({ success: true, message: '保存成功' });
  } catch (e) {
    console.error('Save error:', e);
    res.status(500).json({ error: '保存失败' });
  }
});

router.get('/load', authMiddleware, (req, res) => {
  try {
    const saves = db.getSaves(req.user.id);
    const result = saves.map(s => ({
      id: s.id, name: s.name, updated_at: s.updated_at,
      state: JSON.parse(s.state_json)
    }));
    res.json({ saves: result });
  } catch (e) {
    console.error('Load error:', e);
    res.status(500).json({ error: '加载失败' });
  }
});

router.delete('/save/:id', authMiddleware, (req, res) => {
  try {
    const ok = db.deleteSave(parseInt(req.params.id), req.user.id);
    if (!ok) return res.status(404).json({ error: '存档不存在' });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: '删除失败' });
  }
});

router.get('/leaderboard', (req, res) => {
  try {
    res.json({ leaderboard: db.getLeaderboard(20) });
  } catch (e) {
    res.status(500).json({ error: '获取排行榜失败' });
  }
});

router.post('/score', authMiddleware, (req, res) => {
  try {
    const { score, ending, career_title, stats } = req.body;
    db.addScore(req.user.id, req.user.username, req.user.nickname || req.user.username,
      score || 0, ending || '', career_title || '', JSON.stringify(stats || {}));
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: '提交分数失败' });
  }
});

module.exports = router;
