import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
const initialContext = {
    newUser: null,
    signIn: () => null,
    signOut: () => null,
};
export const AuthContext = createContext(initialContext);
export const AuthProvider = ({ children }) => {
    const { fetchSignInUser, logOutUser } = useActions();
    const user = useTypedSelector((state) => state.userData.user);
    const localStorageUser = {
        username: localStorage.getItem('blogKataUsername'),
        image: localStorage.getItem('blogKataImage'),
        bio: null,
        token: null,
        email: null,
    };
    const newUser = !user.username ? localStorageUser : user;
    const signIn = (user, cb) => {
        fetchSignInUser(user);
        cb();
    };
    const signOut = (cb) => {
        logOutUser();
        cb();
    };
    const value = { newUser, signIn, signOut };
    return _jsx(AuthContext.Provider, { value: value, children: children });
};
