# 🏛️ 金融职场生存记 · 宇宙证券

一款以投资银行为背景的全栈角色扮演生存游戏。玩家将扮演刚入职宇宙证券的初级分析师，在金融丛林中闯出属于自己的一片天。

## ✨ 游戏特色

- **100+ 真实职场场景** — 从入职培训到IPO项目、从市场危机到并购风云
- **20+ 金融知识点** — 财务报表、投资组合、合规法规、行为金融等
- **五大属性系统** — 专业技能、人脉关系、声望名誉、压力管理、财富积累
- **6种不同结局** — 你的选择决定你的命运
- **多用户支持** — 注册登录、云端存档、全球排行榜
- **多终端适配** — 手机、平板、电脑均可畅玩

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/YOUR_USERNAME/finance-survival-game.git
cd finance-survival-game

# 安装依赖
cd backend
npm install
cd ..

# 启动服务
npm start
```

服务默认运行在 `http://localhost:3000`

### 环境变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| PORT | 3000 | 服务端口 |
| JWT_SECRET | (内置) | JWT签名密钥 |

## 📁 项目结构

```
finance-survival-game/
├── backend/
│   ├── server.js          # Express 服务器
│   ├── db.js              # SQLite 数据库
│   ├── auth.js            # JWT 认证
│   ├── routes/
│   │   ├── auth.js        # 注册/登录 API
│   │   └── game.js        # 存档/排行榜 API
│   └── package.json
├── frontend/
│   ├── index.html         # 游戏主页面 (SPA)
│   └── scenes.js          # 100+ 场景数据
├── package.json
├── Procfile
├── render.yaml
└── README.md
```

## 🎮 游戏玩法

1. **注册账号** — 创建你的游戏账户
2. **创建角色** — 选择学历背景，分配属性点
3. **做出选择** — 在每个场景中做出决策，影响属性变化
4. **解锁知识** — 在游戏中学习真实的金融知识
5. **追求结局** — 根据你的属性走向6种不同结局

## 🏆 结局一览

| 结局 | 条件 |
|------|------|
| 👔 传奇·金融巨子 | 声望≥70 且 专业≥50 且 人脉≥40 |
| 📊 实力派·专业精英 | 专业≥60 且 声望≥40 |
| 💰 财富猎手 | 财富≥70 |
| 🤝 人脉之王 | 人脉≥60 |
| 😰 燃烧的蜡烛 | 压力管理≤20 |
| 🌱 成长中的金融人 | 默认结局 |

## 🛠️ 技术栈

- **后端**: Node.js + Express + SQLite + JWT
- **前端**: Vanilla HTML/CSS/JS SPA
- **数据库**: SQLite (better-sqlite3)
- **认证**: JWT (7天有效期)

## 🌐 在线部署

项目支持一键部署到 Render.com：

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## 📝 License

MIT
