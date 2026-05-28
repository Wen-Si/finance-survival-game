# 🏛️ 金融职场生存记 · 宇宙证券

一款以投资银行为背景的全栈角色扮演生存游戏。玩家将扮演刚入职宇宙证券的初级分析师，在金融丛林中闯出属于自己的一片天。

## 🎮 在线试玩

**GitHub 仓库**: https://github.com/Wen-Si/finance-survival-game

## ✨ 游戏特色

- **100+ 真实职场场景** — 从入职培训到 IPO 项目、从市场危机到并购风云
- **22 个金融知识点** — 财务报表、投资组合、合规法规、行为金融等
- **五大属性系统** — 专业技能、人脉关系、声望名誉、压力管理、财富积累
- **6 种不同结局** — 你的选择决定你的命运
- **多用户支持** — 注册登录、云端存档、全球排行榜
- **多终端适配** — 手机、平板、电脑均可畅玩

## 🌐 一键部署

### 方案一：Render.com（推荐，免费）

1. 访问 [Render.com](https://render.com/) 并注册账号
2. 点击 "New +" → "Web Service"
3. 连接 GitHub 账号，选择 `finance-survival-game` 仓库
4. 配置如下：
   - **Name**: `finance-game`（或自定义）
   - **Region**: Singapore（亚洲用户推荐）
   - **Branch**: `main`
   - **Root Directory**: （留空）
   - **Runtime**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && node server.js`
   - **Instance Type**: Free
5. 点击 "Create Web Service"
6. 等待部署完成（约 2-5 分钟），获得 `https://xxx.onrender.com` 的 URL

### 方案二：本地运行

```bash
# 克隆项目
git clone https://github.com/Wen-Si/finance-survival-game.git
cd finance-survival-game

# 安装依赖
cd backend && npm install && cd ..

# 启动服务
npm start
```

服务默认运行在 `http://localhost:3000`

### 环境变量（可选）

| 变量 | 默认值 | 说明 |
|------|--------|------|
| PORT | 3000 | 服务端口 |
| JWT_SECRET | (内置) | JWT 签名密钥 |

## 📁 项目结构

```
finance-survival-game/
├── backend/
│   ├── server.js          # Express 服务器
│   ├── db.js              # JSON 文件数据库
│   ├── auth.js            # JWT 认证
│   ├── routes/
│   │   ├── auth.js        # 注册/登录 API
│   │   └── game.js        # 存档/排行榜 API
│   └── package.json
├── frontend/
│   ├── index.html         # 游戏主页面 (SPA)
│   └── scenes.js          # 100 场景 + 22 知识点
├── package.json
├── Procfile               # Heroku/Render 部署配置
├── render.yaml            # Render 一键部署配置
└── README.md
```

## 🎮 游戏玩法

1. **注册账号** — 创建你的游戏账户
2. **创建角色** — 选择学历背景（金融学/MBA/理工科/法学），分配 5 点额外属性
3. **做出选择** — 在 100 个场景中做出决策，影响五大属性变化
4. **解锁知识** — 在游戏中学习 22 个真实金融知识
5. **追求结局** — 根据你的属性走向 6 种不同结局

## 🏆 结局一览

| 结局 | 图标 | 达成条件 |
|------|------|----------|
| 👔 传奇·金融巨子 | 声望≥70 且 专业≥50 且 人脉≥40 |
| 📊 实力派·专业精英 | 专业≥60 且 声望≥40 |
| 💰 财富猎手 | 财富≥70 |
| 🤝 人脉之王 | 人脉≥60 |
| 😰 燃烧的蜡烛 | 压力管理≤20 |
| 🌱 成长中的金融人 | 默认结局 |

## 📚 金融知识点（部分）

- 财务报表分析（三大报表）
- 收入确认原则（IFRS 15 / ASC 606）
- 内幕交易法规
- 风险管理基础（VaR、市场风险、信用风险）
- IPO 流程
- 投资组合理论（马科维茨 MPT）
- 行为金融学（损失厌恶、羊群效应）
- 尽职调查
- 并购重组
- 跨境金融
- ...共 22 个知识点

## 🛠️ 技术栈

- **后端**: Node.js 18+ / Express 4.x
- **前端**: 原生 HTML/CSS/JavaScript (SPA)
- **数据库**: JSON 文件存储（轻量级，无需配置）
- **认证**: JWT (7 天有效期)
- **加密**: bcryptjs

## 📝 License

MIT

---

**宇宙证券 · 金融职场生存模拟器 v1.0**
