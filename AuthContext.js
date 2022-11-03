

import { createContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import {hasCookie,getCookie} from "cookies-next"

const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const [user,setUser] = useState(false);

    useEffect(()=>{
        if (hasCookie('jwt')) {
            const tkn = getCookie('jwt');
            jwt.verify(tkn,process.env.NEXT_PUBLIC_SECRET,(err,dT)=>{
                if (dT) setUser(dT)
            })
        }
    },[])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}



export default AuthContext;