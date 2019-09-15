import express, { Request, Response, Application } from 'express';

// import {} from "./db"

const app: Application = express();

const PORT = process.env.PORT || 9000;

app.get('/all', async (req: Request, res: Response) => {
	console.log(req.path);

	return res.json({ msg: 'Hello All' });
});

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
