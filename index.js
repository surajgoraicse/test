const express = require("express")

const app = express()
const port = process.env.PORT || 10000
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ data: "this is some data" })
})

app.post('/data', (req, res) => {
    const { data } = req.body
    res.status(200).json({ data: `data is ${data}` })
})

app.listen(port, () => {
    console.log("server is listening at port http://localhost:8001");
})