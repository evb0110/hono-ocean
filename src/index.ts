import { Hono } from 'hono'

const app = new Hono();

const data: any[] = ['first record'];

app.get('/', (c) => {
  return c.text('Hello Hono 1!')
});

app.post('/add-stats', async (c) => {
    const body = await c.req.json();
    data.push(body);
    return c.text('Stats added!')
});

app.get('/stats', (c) => {
    return c.json(data);
});

export default app
