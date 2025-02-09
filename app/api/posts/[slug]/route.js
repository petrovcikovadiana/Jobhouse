import db from "@/lib/db";

export async function GET(req, context) {
  const params = await context.params; // 🔹 Použijeme `await`
  const { slug } = params;

  // Získání detailu příspěvku
  const post = db
    .prepare(
      `
    SELECT posts.*, users.email
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    WHERE posts.id = ?
  `
    )
    .get(slug);

  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
    });
  }

  // Získání uchazečů, kteří se přihlásili na tuto nabídku
  const applicants = db
    .prepare(
      `
    SELECT users.id, users.email, job_seeker_profiles.full_name, job_seeker_profiles.cv_url
    FROM applications
    INNER JOIN users ON applications.user_id = users.id
    LEFT JOIN job_seeker_profiles ON users.id = job_seeker_profiles.user_id
    WHERE applications.post_id = ?
  `
    )
    .all(slug);

  // Ověření, zda aktuální uživatel už na tuto nabídku aplikoval
  const alreadyApplied =
    db
      .prepare(
        `
    SELECT COUNT(*) AS count FROM applications WHERE post_id = ? AND user_id = ?
  `
      )
      .get(slug, req.headers.get("userId"))?.count > 0;

  return new Response(JSON.stringify({ post, applicants, alreadyApplied }), {
    status: 200,
  });
}
