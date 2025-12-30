import express from 'express';
import cors from 'cors'
import connectDB from './configs/db.js'
import 'dotenv/config'
import linkRouter from './routes/linkRoutes.js';

const app = express();

await connectDB();



app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Server is Live!'))
app.use('/link', linkRouter)




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})