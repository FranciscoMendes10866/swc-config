import NodeCache from 'node-cache';

class CacheManager {
	private client: NodeCache;

	constructor() {
		this.client = new NodeCache();
	}

	public set = (key: string, value: string, expiration: number): boolean => this.client.set(key, value, expiration);

	public get = (key: string): string | undefined => this.client.get(key);

	public remove = (key: string): number => this.client.del(key);
}

export default new CacheManager();
