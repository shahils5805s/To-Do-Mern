# 📝 To-Do List Web Application — MERN Stack

A full-stack To-Do List application built with the **MERN** stack (MongoDB, Express.js, React, Node.js). Add, delete, mark complete, and manage daily tasks with real-time updates.

## 🚀 Features

- Add new tasks
- Mark tasks as complete / incomplete
- Delete tasks
- Persistent storage with MongoDB
- Clean, responsive UI
- RESTful API backend

## 🛠️ Tech Stack

- **Frontend:** React, Axios, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)

## 📁 Project Structure

```
todo-mern/
├── backend/
│   ├── config/db.js
│   ├── models/Task.js
│   ├── routes/taskRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── public/index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskItem.js
│   │   ├── services/api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally, **or** a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- npm (comes with Node.js)

## 🔧 Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/todo-mern.git
cd todo-mern
```

### 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set your `MONGO_URI`:
- **Local MongoDB:** `mongodb://localhost:27017/todoapp`
- **MongoDB Atlas:** paste your connection string from the Atlas dashboard

Start the backend:

```bash
npm start
```

The API will run on `http://localhost:5000`.

### 3. Frontend setup

Open a **new terminal**:

```bash
cd frontend
npm install
npm start
```

The React app opens at `http://localhost:3000`.

## 📡 API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/api/tasks`     | Get all tasks       |
| POST   | `/api/tasks`     | Create a new task   |
| PUT    | `/api/tasks/:id` | Update / toggle task|
| DELETE | `/api/tasks/:id` | Delete a task       |

## 📤 Uploading This Project to GitHub

### Option A — Using Git (recommended)

1. Create a new empty repository on GitHub (do NOT initialize with README/.gitignore).
2. In the project folder, run:

```bash
cd todo-mern
git init
git add .
git commit -m "Initial commit: MERN To-Do List app"
git branch -M main
git remote add origin https://github.com/<your-username>/todo-mern.git
git push -u origin main
```

### Option B — Upload via GitHub Web UI

1. Extract the ZIP file.
2. **Delete** any `node_modules` folders inside `backend/` or `frontend/` if present (they should not be uploaded).
3. Create a new repository on GitHub.
4. Click **"uploading an existing file"** on the new repo page.
5. Drag the entire `todo-mern` folder contents in and commit.

## 📝 License

MIT — free to use and modify.
