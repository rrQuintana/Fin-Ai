import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

type AuthContextType = {
  user: any;
  isLoaded: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoaded: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    checkUser();

    const listener = (data: any) => {
      if (data.payload.event === 'signedIn' || data.payload.event === 'signedOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoaded }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)