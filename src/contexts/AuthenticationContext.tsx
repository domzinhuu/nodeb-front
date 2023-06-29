import { ReactNode, createContext } from "react";
import { api } from "../lib/axios";

const USER_SESSION = "nodeb@user_session";

interface AuthenticationContextData {
  auth: (username: string, password: string) => Promise<any>;
  isAuthenticated: () => boolean;
}

export const AuthenticationContext = createContext(
  {} as AuthenticationContextData
);

interface AuthenticationContextProviderProps {
  children: ReactNode;
}

function saveAuthSession(data: any) {
  window.sessionStorage.setItem(USER_SESSION, JSON.stringify(data));
}

function getAuthSession() {
  const userStringified = window.sessionStorage.getItem(USER_SESSION);
  if (userStringified) {
    return JSON.parse(userStringified);
  }

  return null;
}

export function AuthenticationContextProvider({
  children,
}: AuthenticationContextProviderProps) {
  async function auth(username: string, password: string) {
    const response = await api.get(`users?email=${username}`);

    if (!response.data || response.data[0].password !== password) {
      return null;
    }

    saveAuthSession(response.data[0]);
    return response.data[0];
  }

  function isAuthenticated(): boolean {
    const user = getAuthSession();

    return !!user;
  }

  return (
    <AuthenticationContext.Provider value={{ auth, isAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
