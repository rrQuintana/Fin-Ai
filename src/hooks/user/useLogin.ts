import { useState } from 'react';
import Auth from '@aws-amplify/auth';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const user = await Auth.signIn(username, password);
      const session = await Auth.currentSession();
      const idToken = session.getIdToken().getJwtToken();
      setToken(idToken);

      localStorage.setItem('authToken', idToken);
      
      return idToken;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, token };
};
