import db from "@/lib/db";

export async function POST(req) {
  const { postId } = await req.json();
  const userId = req.headers.get("userId"); // 📌 Načteme user_id z hlavičky requestu

  if (!userId) {
    return new Response(
      JSON.stringify({ error: "Unauthorized: No user ID provided" }),
      { status: 401 }
    );
  }

  // Ověření, zda už uživatel aplikoval
  const existingApplication = db
    .prepare(
      `
    SELECT id FROM applications WHERE post_id = ? AND user_id = ?
  `
    )
    .get(postId, userId);

  if (existingApplication) {
    return new Response(JSON.stringify({ message: "Already applied" }), {
      status: 400,
    });
  }

  // Uložení přihlášky
  db.prepare(
    `
    INSERT INTO applications (post_id, user_id) VALUES (?, ?)
  `
  ).run(postId, userId);

  return new Response(JSON.stringify({ message: "Application submitted" }), {
    status: 201,
  });
}
