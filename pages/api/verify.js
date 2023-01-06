
import {getCookie, hasCookie} from "cookies-next"
import jwt from "jsonwebtoken"

export default function handler(req,res) {
    try {
        if (!hasCookie('jwt',{req,res})) throw Error("Cookie Not Found")
        const tkn = getCookie('jwt',{req,res})
        jwt.verify(tkn,process.env.NEXT_PUBLIC_SECRET,(err,dT)=>{
            if (err) throw err
            res.status(200).json(dT)
        })
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}