import type { Context } from 'hono';

export const getIP = (c: Context) => {
    return c.req.header('x-forwarded-for') ||
        c.req.header('cf-connecting-ip') ||
        c.req.header('x-real-ip') ||
        'unknown';
}