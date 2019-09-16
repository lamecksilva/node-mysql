import express, { Request, Response, Application } from 'express';

import { getUsers, insertUser, getUser, deleteUser } from './data';

const app: Application = express();

/**
 * 	/
 * 	Get all users
 */
app.get('/', async (req: Request, res: Response) => {
	const users = await getUsers();

	return res.json({ success: true, users });
});

/**
 * 	/:id
 * 	Get user by ID
 */
app.get('/:id', async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);

	if (typeof id !== 'number') {
		return res.json({ success: false, errors: { id: 'ID is not a number' } });
	} else {
		const user = await getUser(id);

		return res.json({ success: true, user });
	}
});

/**
 * 	/register/:name
 * 	Register a user by name
 */
app.get('/register/:name', async (req: Request, res: Response) => {
	const insertedData = await insertUser(req.params.name);

	return res.json({ success: true, insertedData });
});

/**
 * 	/delete/:id
 * 	Delete a user by id
 */
app.get('/delete/:id', async (req: Request, res: Response) => {
	const deletedUser = await deleteUser(parseInt(req.params.id));

	return res.json({ success: true, deletedUser });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
