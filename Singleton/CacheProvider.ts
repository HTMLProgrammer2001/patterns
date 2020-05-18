class CacheProvider{
	public static instance: CacheProvider;
	public static items = {};

	private constructor(){}

	public static getInstance(): CacheProvider{
		if(!CacheProvider.instance)
			CacheProvider.instance = new CacheProvider();

		return CacheProvider.instance;
	}

	getItem(key: string){
		return CacheProvider.items[key];
	}

	setItem(key: string, val){
		console.log(`Set ${key}:${val}`);
		CacheProvider.items[key] = val;
	}
}

export default CacheProvider;