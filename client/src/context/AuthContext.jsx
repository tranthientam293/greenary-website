import { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [logged, setLogged] = useState(() => {
    return sessionStorage.getItem("auth") || false;
  });

  const getUser = () => {
    return JSON.parse(sessionStorage.getItem("auth"));
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, logged, setLogged, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default useAuthContext;
