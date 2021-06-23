import * as express from 'express'

export const app = express()

app.use(express.json())

app.post('/', (req, res)=>{
	res.json(req?.body ?? {})
	res.end()
})

const PORT = 3333
app.listen(PORT, () => {})