import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { cookies } from "next/headers";

import db from "./db";
import { redirect } from "next/navigation";

// create new adapter object
const adapter = new BetterSqlite3Adapter(db, {
  // what tablename of your  users database table will be
  user: "users",
  session: "sessions",
});

// where and how to store the user data
const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: { secure: process.env.NODE_ENV === "production" },
  },
});

// create and store a new session
export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  const cookieStore = cookies(); // Použijte cookie store

  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

// check if the user is authenticated

export async function verifyAuth() {
  const cookieStore = cookies();
  const sessionCookie = await cookieStore.get(lucia.sessionCookieName);

  if (!sessionCookie) {
    return { user: null, session: null };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return { user: null, session: null };
  }

  const result = await lucia.validateSession(sessionId);

  if (!result.session) {
    return { user: null, session: null };
  }

  return { user: result.user, session: result.session };
}

// vymazani

export async function destroySession() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(lucia.sessionCookieName);

  if (!sessionCookie) {
    return { success: false, message: "No session found" };
  }

  const sessionId = sessionCookie.value;

  // Invalidace relace v databázi
  await lucia.invalidateSession(sessionId);

  // Vymazání cookie
  const blankSessionCookie = lucia.createBlankSessionCookie();
  cookieStore.set(
    blankSessionCookie.name,
    blankSessionCookie.value,
    blankSessionCookie.attributes
  );

  return { success: true };
}
