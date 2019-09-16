import express, { Request, Response, Application } from 'express';

import { MysqlConnection } from './data';

const app: Application = express();

const MysqlClass: any = new MysqlConnection();

app.get('/all', async (req: Request, res: Response) => {
	console.log(req.path);

	const users = await MysqlClass.getUsers();
	console.log('Users na controller');
	console.log(users);

	return res.json(users);
});

app.get('/register', async (req: Request, res: Response) => {
	console.log(req.query.name);

	const rows = await MysqlClass.insertUser(req.query.name);

	return res.json({ success: true, rows });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
