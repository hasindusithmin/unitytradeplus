import {deleteCookie, hasCookie} from "cookies-next"

export default function handler(req,res){
    try {
        if (!hasCookie('jwt',{req,res})) throw Error("Already sign out")
        deleteCookie('jwt',{req,res,maxAge:0})
        res.redirect('/')
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}