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

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
