import http from 'http';

export default function (app) {
	return http.createServer({}, app);
}
