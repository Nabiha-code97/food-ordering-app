import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div className="flex justify-center items-center min-h-screen"><span className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full" /></div>;

    return isAuthenticated ? <Outlet /> : <Navigate to='/' replace />;
}
