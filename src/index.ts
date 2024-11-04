import { Hono } from 'hono'
import { getIP } from './services/getIP';
import { Stats } from './Stats';

const app = new Hono();

app.use('*', async (c, next) => {
    c.header('Access-Control-Allow-Origin', '*');
    c.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    c.header('Access-Control-Allow-Headers', 'Content-Type');

    if (c.req.method === 'OPTIONS') {
        return c.text('', 204); // Handle preflight request
    }

    return await next();
});

app.get('/', (c) => {
    return c.text('Hello Hono 1!');
});

app.post('/add-stats', async (c) => {
    const body = await c.req.json();
    const ip = getIP(c);
    Stats.add(ip, body);

    return c.text('Stats added!');
});

app.get('/stats', (c) => {
    return c.json(Stats.data);
});

export default app;
