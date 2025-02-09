"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext"; // Použití kontextu
import { auth } from "@/actions/auth-actions";

export default function AuthForm({ mode }) {
  const { setUser } = useUser(); // ✅ Přidání UserContextu pro aktualizaci uživatele
  const router = useRouter();
  const [formState, setFormState] = useState({ errors: {} });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const result = await auth(mode, {}, formData); // Volání serverové akce

    if (result?.errors) {
      setFormState(result); // Nastavení chyb pokud jsou
    } else {
      setUser(result.user); // ✅ Okamžitě aktualizujeme UserContext
      router.refresh(); // ✅ Provede refresh stránky a aktualizaci headeru
      router.push("/"); // ✅ Přesměrování na homepage
    }
  };

  return (
    <form id="auth-form" onSubmit={handleSubmit}>
      <div>
        <img src="/images/lock.webp" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </p>
      {/* Volba role pouze při registraci */}
      {mode === "signup" && (
        <p>
          <label htmlFor="role">Register as:</label>
          <select name="role" id="role" required>
            <option value="job_seeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </p>
      )}

      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </p>

      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        {mode === "login" ? (
          <Link href="/login-form?mode=signup">Create an account.</Link>
        ) : (
          <Link href="/login-form?mode=login">
            Login with existing account.
          </Link>
        )}
      </p>
    </form>
  );
}
