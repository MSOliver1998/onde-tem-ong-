import { AuthProvider } from "./AuthContext/AuthContext";
import { UserProvider } from "./UserContext/UserContext";

interface iProviders {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};
