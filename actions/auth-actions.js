"use server";

import { createUser } from "@/lib/user";
import { hashUserPassword } from "@/lib/hash";
import { redirect } from "next/navigation";
import { createAuthSession, destroySession } from "@/lib/auth";
import { getUserByEmail } from "@/lib/user";
import { verifyPassword } from "@/lib/hash";

export async function signup(prevState, formData) {
  // get data from form
  const email = formData.get("email");
  const password = formData.get("password");

  // validate email and password

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }
  // if something missing from 2 checks above, error
  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }
  // hash password with function hashUserPassword
  const hashedPassword = hashUserPassword(password);
  try {
    // save user to database
    const id = createUser(email, hashedPassword);
    // after create user, calling createAuthSession, which make login
    await createAuthSession(id);
    // after succesfull login, redirect
    redirect("/training");
  } catch (error) {
    // if email existing, error
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "It seems like you already have an account. Please login.",
        },
      };
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  // get data from fromdata
  const email = formData.get("email");
  const password = formData.get("password");
  // cal getUserByEmail and check if user wxist
  const existingUser = getUserByEmail(email);
  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate user, please check your credentials",
      },
    };
  }
  // verify, if password is equal to hash passwrod in database with function verifyPassword
  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "Could not authenticate user, please check your credentials",
      },
    };
  }
  // after create user, calling createAuthSession, which make login

  await createAuthSession(existingUser.id);
  redirect("/training");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export async function logout() {
  await destroySession();
  redirect("/");
}
