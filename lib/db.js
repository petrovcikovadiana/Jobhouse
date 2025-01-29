import sql from "better-sqlite3";

const db = sql("training.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY, 
    image_url TEXT NOT NULL,
    title TEXT NOT NULL, 
    content TEXT NOT NULL, 
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER,
    location TEXT,
    company TEXT,
    salary INTEGER,
    job_contract TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  )`);
db.exec(`
  CREATE TABLE IF NOT EXISTS likes (
    user_id INTEGER, 
    post_id INTEGER, 
    PRIMARY KEY(user_id, post_id),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
    FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
  )`);

export default db;
