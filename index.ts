import express, { Request, Response, Application } from 'express';

import { getUsers, insertUser } from './data';

const app: Application = express();

app.get('/all', async (req: Request, res: Response) => {
	const users = await getUsers();

	return res.json({ success: true, users });
});

app.get('/register', async (req: Request, res: Response) => {
	const insertedData = await insertUser(req.query.name);

	return res.json({ success: true, insertedData });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
