import MainHeader from "@/components/main-header";
import "../globals.css";
import { logout } from "@/actions/auth-actions";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body id="page">
        {" "}
        <header id="auth-header">
          <p>welcome back!</p>
          <form action={logout}>
            <button>Logout</button>
          </form>{" "}
        </header>
        {children}
      </body>
    </html>
  );
}
