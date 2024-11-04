import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono 1!')
});

app.post('/add-stats', (c) => {
    return c.text('Stats added!')
});

export default app
