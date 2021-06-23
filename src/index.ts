import * as express from 'express'
import {TestPdfDocument} from "./pdf/TestPdfDocument";

export const app = express()

app.use(express.json())

app.post('/', async(req, res)=>{
	const data = req.body
	res.json({
		documentAsB64: await TestPdfDocument.createDocument(data)
	})
	res.end()
})

const PORT = 3333
app.listen(PORT, () => {})