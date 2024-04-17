import express from 'express'
import reqRoute from './routes/req_routes'

const app = express();

app.use(express.json()); // Parse JSON bodies

app.use("/", reqRoute)

app.listen(3001, () => {
    console.log("App is running successfully on 3001")
})