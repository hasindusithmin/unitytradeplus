const { createHash, createHmac } = require('crypto')
import jwt from "jsonwebtoken"
import {setCookie} from "cookies-next"

function checkSignature (token, { hash, ...data }) {
    const secret = createHash('sha256')
      .update(token)
      .digest()
    const checkString = Object.keys(data)
      .sort()
      .map(k => `${k}=${data[k]}`)
      .join('\n')
    const hmac = createHmac('sha256', secret)
      .update(checkString)
      .digest('hex')
    return hmac === hash
  }
  

export default function handler(req,res){
    try {
        const payload = req.query;
        if (Object.entries(payload).length === 0) throw Error("Empty payload")
        if (!checkSignature(process.env.NEXT_PUBLIC_TOKEN,payload)) throw Error("Wrong payload")
        const tkn = jwt.sign(payload,process.env.NEXT_PUBLIC_SECRET,{expiresIn:'1h'})
        setCookie('jwt',tkn,{req,res,maxAge:60*60})
        res.redirect('/')
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}