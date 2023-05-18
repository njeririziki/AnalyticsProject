import React, {createContext,ReactNode,useEffect,useState} from 'react'
import { User } from '../types/types'

type AuthContextType = {
    currentUser: User | null
   // token: string
    isAuthenticated: boolean
    authenticateUser: () => void
    unauthenticateUser: () => void
  }

  export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [token, setToken] = useState (null);
   
     useEffect(() => {
       console.log('authenticating')
      const tk=sessionStorage.getItem('token')
      const userJSON= sessionStorage.getItem('user')
      const user:User | null = userJSON? JSON.parse(userJSON):null;
      console.log(user)
      if(tk){
        setIsAuthenticated(true)
        setToken(token)
        setCurrentUser(user)
      }
    
     }, [isAuthenticated]);

       const authenticateUser = () => {
      return setIsAuthenticated(true)
       // setCurrentUser(user)
       // setToken( token)
      }
    
      const unauthenticateUser = () => {
        setIsAuthenticated(false)
        setCurrentUser(null)
      
      }
    
    return (
        <AuthContext.Provider
          value={{ currentUser, isAuthenticated, authenticateUser, unauthenticateUser }}
        >
          {children}
        </AuthContext.Provider>
      )
  }  

