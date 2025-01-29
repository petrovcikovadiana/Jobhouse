"use client";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderClient({ isLoggedIn }) {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });

    if (response.ok) {
      router.push("/");
      router.refresh();
    } else {
      console.error("Failed to logout");
    }
  };
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
          {isLoggedIn && (
            <li>
              <Link href="/new-post">New Post</Link>
            </li>
          )}
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
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
