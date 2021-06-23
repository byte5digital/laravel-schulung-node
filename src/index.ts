import * as express from 'express'
import {request} from "express";

export const app = express()

app.get('/', async(req, res)=>{
	res.json({
		message: "Hallo an Alle"
	}).end()
})

const PORT = 3333
app.listen(PORT, () => {})