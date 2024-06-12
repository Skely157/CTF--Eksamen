import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

const port = 3000;





app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`Server på http://localhost:${port}`)
})
