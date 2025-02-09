import db from "./db";

export function createUser(email, password, role) {
  // sql request
  const result = db
    .prepare("INSERT INTO users (email, password, role) VALUES (?, ?, ?)")
    .run(email, password, role);
  // return lastInsertRowid-new ID
  return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  // sql request select, which get user data by email. with get return user
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}

export function getUserById(userId) {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(userId);
}
