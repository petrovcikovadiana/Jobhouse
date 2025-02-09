import sql from "better-sqlite3";

const db = new sql("training.db");

export async function getPosts(maxNumber, filters = {}) {
  let limitClause = "";
  let whereClause = "WHERE 1=1"; // Základní podmínka pro snadné připojování dalších podmínek
  const params = [];

  if (maxNumber) {
    limitClause = "LIMIT ?";
    params.push(maxNumber); // Přidá parametr na konec
  }

  if (filters.salary) {
    whereClause += ` AND salary >= ?`;
    params.unshift(filters.salary); // Přidání parametru na začátek
  }

  const stmt = db.prepare(`
    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, email AS userEmail, location, company, salary, job_contract AS jobContract, seniority, field,
    COUNT(likes.post_id) AS likes,
    EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id AND likes.user_id = 2) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id
    ORDER BY createdAt DESC
    ${limitClause}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return stmt.all(...params);
}

export async function storePost(post) {
  const stmt = db.prepare(`
    INSERT INTO posts (image_url, title, content, user_id, location, company, salary, job_contract, seniority, field)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return stmt.run(
    post.imageUrl,
    post.title,
    post.content,
    post.userId,
    post.location,
    post.company,
    post.salary,
    post.jobContract,
    post.seniority,
    post.field
  );
}

export async function getPostBySlug(slug) {
  const stmt = db.prepare(`
      SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, email AS userEmail, location, company, salary, job_contract AS jobContract,
      COUNT(likes.post_id) AS likes
      FROM posts
      INNER JOIN users ON posts.user_id = users.id
      LEFT JOIN likes ON posts.id = likes.post_id
      WHERE posts.id = ? -- Použijeme slug jako ID příspěvku
      GROUP BY posts.id
    `);

  return stmt.get(slug); // Vrací jeden příspěvek
}

export async function updatePostLikeStatus(postId, userId) {
  const stmt = db.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND post_id = ?`);

  const isLiked = stmt.get(userId, postId).count === 0;

  if (isLiked) {
    const stmt = db.prepare(`
      INSERT INTO likes (user_id, post_id)
      VALUES (?, ?)`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return stmt.run(userId, postId);
  } else {
    const stmt = db.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND post_id = ?`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return stmt.run(userId, postId);
  }
}
