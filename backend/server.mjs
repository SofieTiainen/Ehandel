import express from "express";
import productsRoutes from './routes/productsRoutes.mjs';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 3000 || process.env.PORT;

app.use('/api', productsRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})