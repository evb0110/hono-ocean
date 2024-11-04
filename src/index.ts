import { Hono } from 'hono'

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

const data: any[] = ['first record'];

app.get('/', (c) => {
    return c.text('Hello Hono 1!');
});

app.post('/add-stats', async (c) => {
    const body = await c.req.json();
    data.push(body);
    return c.text('Stats added!');
});

app.get('/stats', (c) => {
    return c.json(data);
});

export default app;
