// authGuard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './AuthContext';

// Authentication Guard HOC
export const withAuth = (WrappedComponent, { redirectTo = '/login', redirectIfFound = false } = {}) => {
  const AuthGuard = (props) => {
    const router = useRouter();
    const { currentUser } = useAuth();

    useEffect(() => {
      if (!currentUser) {
        // Redirect to login page if not logged in
        router.push(redirectTo);
      } else if (redirectIfFound && currentUser) {
        // Redirect to home page if already logged in and trying to access guest-only route
        router.push('/');
      }
    }, [currentUser, router]);

    // Render the wrapped component if authenticated, otherwise null
    return currentUser ? <WrappedComponent {...props} /> : null;
  };

  return AuthGuard;
};

// Guest Guard HOC
export const withGuest = (WrappedComponent, { redirectTo = '/' } = {}) => {
  const GuestGuard = (props) => {
    const router = useRouter();
    const { currentUser } = useAuth();

    useEffect(() => {
      if (currentUser) {
        // Redirect to home page if already logged in and trying to access guest-only route
        router.push( );
      }
    }, [currentUser, router]);

    // Render the wrapped component if not authenticated (guest), otherwise null
    return currentUser ? null : <WrappedComponent {...props} />;
  };

  return GuestGuard;
};
