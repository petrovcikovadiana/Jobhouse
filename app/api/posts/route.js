import db from "@/lib/db";

export async function POST(request) {
  const body = await request.json();
  const {
    location = [],
    salary,
    jobContract = [],
    seniority = [],
    field = [],
  } = body;

  let whereClause = "1=1"; // Výchozí podmínka
  const params = [];

  // Filtrování podle lokace
  if (location.length > 0) {
    const placeholders = location.map(() => "?").join(", ");
    whereClause += ` AND location IN (${placeholders})`;
    params.push(...location);
  }

  // Filtrování podle platu
  if (salary) {
    whereClause += " AND salary >= ?";
    params.push(salary);
  }

  // Filtrování podle typu smlouvy
  if (jobContract.length > 0) {
    const placeholders = jobContract.map(() => "?").join(", ");
    whereClause += ` AND job_contract IN (${placeholders})`;
    params.push(...jobContract);
  }

  // Filtrování podle seniority
  if (seniority.length > 0) {
    const placeholders = seniority.map(() => "?").join(", ");
    whereClause += ` AND seniority IN (${placeholders})`;
    params.push(...seniority);
  }

  // Filtrování podle oboru
  if (field.length > 0) {
    const placeholders = field.map(() => "?").join(", ");
    whereClause += ` AND field IN (${placeholders})`;
    params.push(...field);
  }

  const stmt = db.prepare(`
    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, email AS userEmail, location, company, salary, job_contract AS jobContract, seniority, field,
    COUNT(likes.post_id) AS likes,
    EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id AND likes.user_id = 2) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    WHERE ${whereClause}
    GROUP BY posts.id
    ORDER BY createdAt DESC
  `);

  try {
    const posts = stmt.all(...params);
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return new Response(JSON.stringify({ error: "Database query failed" }), {
      status: 500,
    });
  }
}
