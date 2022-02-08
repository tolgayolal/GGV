import { createContext, useContext, useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import { IResponseLogin } from "../interfaces/Auth";
import ApiCalls from "../network/ApiCalls";

const AuthContext = createContext<Partial<ContextProps>>({});
export const api = {};

type ProviderProps = {
      children: React.ReactNode
}
interface ContextProps {
      user: IResponseLogin | null,
      isShow: boolean,
      authLoading: boolean,
      toggle: () => void,
      logout: () => void,
      setUser: (arg: IResponseLogin) => void
}

export const AuthProvider = ({ children }: ProviderProps) => {
      const [user, setUser] = useState<IResponseLogin | null>(null);
      const [authLoading, setAuthLoading] = useState(false);
      const { isShow, toggle } = useModal()


      const logout = async () => {
            setUser(null)
            await localStorage.removeItem('auth')
      }

      useEffect(() => {
            setAuthLoading(true)
            const token = localStorage.getItem('auth')
            if (token) {
                  ApiCalls.getUserDetails(token).then((response: any) => {
                        const { user } = response.data
                        setUser(user)
                  })
                  setAuthLoading(false)
            } else {
                  setUser(null)
            }
      }, []);

      return (
            <AuthContext.Provider value={{ user, isShow, authLoading, toggle, logout, setUser }}>
                  {children}
            </AuthContext.Provider>
      );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;