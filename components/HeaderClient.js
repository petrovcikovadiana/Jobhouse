"use client";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/app/context/UserContext";

export default function HeaderClient() {
  const { user, setUser, fetchUser, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    fetchUser(); // 🟢 Po načtení stránky načte uživatele
  }, []);

  const handleLogout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });

    if (response.ok) {
      setUser(null);
      router.refresh(); // 🔄 Okamžitý rerender stránky
    } else {
      console.error("Failed to logout");
    }
  };

  // 🟢 Nevykreslovat hlavičku, dokud se neověří uživatel
  if (loading) return null;

  return (
    <header id="main-header">
      <Link href="/">
        <img src={logo.src} alt="Mobile phone with posts feed on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          {user?.role === "employer" && (
            <li>
              <Link href="/new-post">New Post</Link>
            </li>
          )}
          {user?.role === "job_seeker" && (
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          )}
          {user ? (
            <li>
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link href="/login-form">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
