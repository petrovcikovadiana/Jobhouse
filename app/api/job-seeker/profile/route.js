import db from "@/lib/db";

export async function GET(req) {
  const userId = req.headers.get("userId");

  if (!userId) {
    return new Response(
      JSON.stringify({ error: "Unauthorized: No user ID provided" }),
      { status: 401 }
    );
  }

  // Ověření, zda uživatel existuje
  const profile = db
    .prepare(
      `
    SELECT users.id, users.name, users.email, job_seeker_profiles.full_name, job_seeker_profiles.cv_url
    FROM users
    LEFT JOIN job_seeker_profiles ON users.id = job_seeker_profiles.user_id
    WHERE users.id = ?
  `
    )
    .get(userId);

  if (!profile) {
    return new Response(JSON.stringify({ error: "Profile not found" }), {
      status: 404,
    });
  }

  // 🔹 Opravené načítání přihlášek
  const applications = db
    .prepare(
      `
    SELECT posts.id, posts.title, posts.company, posts.location, posts.salary, posts.job_contract
    FROM applications
    INNER JOIN posts ON applications.post_id = posts.id
    WHERE applications.user_id = ?
  `
    )
    .all(userId);

  console.log("Applications found:", applications); // ✅ Debugging

  return new Response(JSON.stringify({ profile, applications }), {
    status: 200,
  });
}
