import { verifyAuth } from "@/lib/auth";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const { user } = await verifyAuth();

  // Předání stavu přihlášení klientské komponentě
  return <HeaderClient isLoggedIn={!!user} />;
}
