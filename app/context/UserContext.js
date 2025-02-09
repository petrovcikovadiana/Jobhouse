"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Vytvoření kontextu
const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🟢 Načtení uživatele při startu aplikace
  const fetchUser = async () => {
    try {
      const response = await fetch("/api/auth");
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false); // Po dokončení requestu nastavíme loading na false
    }
  };

  // 🟢 Automaticky zavolat `fetchUser` při načtení aplikace
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Vlastní hook pro přístup k UserContextu
export function useUser() {
  return useContext(UserContext);
}
