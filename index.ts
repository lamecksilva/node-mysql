import express, { Request, Response, Application } from 'express';

import { MysqlConnection } from './data';
import { getUsers } from './data/user';

const app: Application = express();

const MysqlClass = new MysqlConnection();

app.get('/all', async (req: Request, res: Response) => {
	const users = await MysqlClass.getUsers();

	return res.json(users);
});

app.get('/register', async (req: Request, res: Response) => {
	const rows = await MysqlClass.insertUser(req.query.name);

	return res.json({ success: true, rows });
});

app.get('/teste', async (req: Request, res: Response) => {
	const rows = await getUsers();

	res.json({ success: true, rows });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
