import express, { Request, Response, response } from "express";

const app = express()

app.get('/',(req: Request, res: Response)=>{
    return res.send('Eu sou Full Cycle')
})

app.listen('8080',()=>{
    console.log('[LISTING] Server now listing in 8080')
})