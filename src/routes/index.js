import user_routes from './user.routes.js';

export default function (app) {
	app.use('/user', user_routes);

	app.use((err, _, res, next) => {
		const isNotFound = err.message.indexOf('not found');
		const isCastError = err.message.indexOf('Cast to ObjectId failed');

		if (err.message && (isNotFound || isCastError)) {
			console.log(err);
			return next();
		} else {
			console.log('мы тут?');
			res.status(500).json({ error: err.stack });
		}
	});

	app.use((_, res) => res.sendStatus(404));
}
