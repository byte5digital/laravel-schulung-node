import express from "express"

import { TestPdfDocument } from "./pdf/TestPdfDocument"
import { IEmailValidator } from "./models/i-email-validator"
import { EmailValidation } from "./modules/email-validation"
import { processImageFolder } from "./modules/image-processing"

export const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
	const data = req.body
	res.json({
		documentAsB64: await TestPdfDocument.createDocument(data),
	})
	res.end()
})

app.get('/testimages', async(req, res)=>{
	await processImageFolder();
	return res.end()
})

app.post("/validate/email", async (req, res) => {
	const data = req.body as IEmailValidator
    console.log(data)
	
	return res.json({
		isValid: EmailValidation(data),
	})
})

const PORT = 3000
app.listen(PORT, () => {})
