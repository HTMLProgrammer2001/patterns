type Header = {
	name: string,
	value: string
}


class TRequest{
	headers: Array<Header> = [];

	constructor(private url: string, private body?: any){}

	setHeaders(headers: Array<Header>){
		this.headers = headers;
	}

	addHeader(name: string, value: string){
		let h = this.getHeader(name);

		if(h)
			h.value = value;
		else
			this.headers.push({
				name,
				value
			});
	}

	setBody(body){
		this.body = body;
	}

	getBody(){
		return this.body;
	}

	getHeader(name: string): Header{
		return this.headers.find((h: Header) => {
			if(h.name == name)
				return true;
		});
	}

	getUrl(): string{
		return this.url;
	}
}

export default TRequest;
