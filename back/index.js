import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    })
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
