import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { newUser } = useAuth();
    if (!(newUser === null || newUser === void 0 ? void 0 : newUser.username)) {
        return _jsx(Navigate, { to: "/sign-in", state: { from: location } });
    }
    return children;
};
export { RequireAuth };
