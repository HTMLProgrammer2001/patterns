class ClipboardApi{
	private data: string = '';
	private static instance: ClipboardApi;

	private constructor(){}

	public static getInstance(): ClipboardApi{
		if(!ClipboardApi.instance)
			ClipboardApi.instance = new ClipboardApi();

		return ClipboardApi.instance;

	}

	setData(data: string){
		this.data = data;
	}

	getData(): string{
		return this.data;
	}
}

export default ClipboardApi;
