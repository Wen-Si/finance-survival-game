const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbFile = path.join(dataDir, 'db.json');

let data = {
  users: [],
  game_states: [],
  leaderboard: [],
  _nextId: { users: 1, game_states: 1, leaderboard: 1 }
};

if (fs.existsSync(dbFile)) {
  try {
    data = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
  } catch (e) {
    console.warn('DB file corrupted, starting fresh');
  }
}

function save() {
  fs.writeFileSync(dbFile, JSON.stringify(data), 'utf-8');
}

const db = {
  // Users
  findUserByUsername(username) {
    return data.users.find(u => u.username === username) || null;
  },
  findUserById(id) {
    return data.users.find(u => u.id === id) || null;
  },
  createUser(username, password_hash, nickname) {
    const user = {
      id: data._nextId.users++,
      username,
      password_hash,
      nickname,
      created_at: new Date().toISOString()
    };
    data.users.push(user);
    save();
    return user;
  },

  // Game states
  getSaves(userId) {
    return data.game_states
      .filter(s => s.user_id === userId)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  },
  getSaveById(id, userId) {
    return data.game_states.find(s => s.id === id && s.user_id === userId) || null;
  },
  saveGameState(userId, name, state_json) {
    const existing = data.game_states.find(s => s.user_id === userId && s.name === name);
    if (existing) {
      existing.state_json = state_json;
      existing.updated_at = new Date().toISOString();
    } else {
      data.game_states.push({
        id: data._nextId.game_states++,
        user_id: userId,
        name,
        state_json,
        updated_at: new Date().toISOString()
      });
    }
    save();
  },
  deleteSave(id, userId) {
    const idx = data.game_states.findIndex(s => s.id === id && s.user_id === userId);
    if (idx >= 0) {
      data.game_states.splice(idx, 1);
      save();
      return true;
    }
    return false;
  },

  // Leaderboard
  getLeaderboard(limit = 20) {
    return [...data.leaderboard]
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  },
  addScore(userId, username, nickname, score, ending, career_title, stats_json) {
    data.leaderboard.push({
      id: data._nextId.leaderboard++,
      user_id: userId,
      username,
      nickname,
      score,
      ending,
      career_title,
      stats_json,
      created_at: new Date().toISOString()
    });
    save();
  }
};

module.exports = db;
