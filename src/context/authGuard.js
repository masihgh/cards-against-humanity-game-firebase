// authGuard.js
import { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation'

// Authentication Guard HOC
export const withAuth = (WrappedComponent, { redirectTo = '/login', redirectIfFound = false } = {}) => {
  const AuthGuard = (props) => {
    const { currentUser } = useAuth();
    const router = useRouter()

    useEffect(() => {
      if (!currentUser) {
        // Redirect to login page if not logged in
        router.push(redirectTo);
      } else if (redirectIfFound && currentUser) {
        // Redirect to home page if already logged in and trying to access guest-only route
        router.push('/');
      }
    }, [currentUser,router]);

    // Render the wrapped component if authenticated, otherwise null
    return currentUser ? <WrappedComponent {...props} /> : null;
  };

  return AuthGuard;
};

// Guest Guard HOC
export const withGuest = (WrappedComponent, { redirectTo = '/' } = {}) => {
  const GuestGuard = (props) => {
    const { currentUser } = useAuth();
    const router = useRouter()

    useEffect(() => {
      if (currentUser) {
        // Redirect to home page if already logged in and trying to access guest-only route
        router.push(redirectTo);
      }
    }, [currentUser,router]);

    // Render the wrapped component if not authenticated (guest), otherwise null
    return currentUser ? null : <WrappedComponent {...props} />;
  };

  return GuestGuard;
};

export const Auth = ({ children }) => {
    const { currentUser } = useAuth();
  
    return <>{currentUser ? children : null}</>;
  };
  
  export const Guest = ({ children }) => {
    const { currentUser } = useAuth();
  
    return <>{currentUser ? null : children}</>;
  };