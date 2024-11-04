export class Stats {
    public static data: Record<string, any[]> = {};

    public static add(ip: string, body: any) {
        this.data[ip] ||= [];
        this.data[ip].push(body);
    }
}